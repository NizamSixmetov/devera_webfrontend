import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: {
      onChatMaximized?: () => void;
      onChatMinimized?: () => void;
      minimize?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

const TAWK_SRC = "https://embed.tawk.to/6948fc20420bc819787f0343/1jd2hhoas";

interface TawkToProps {
  onChatStateChange: (isOpen: boolean) => void;
}

export default function TawkTo({ onChatStateChange }: TawkToProps) {
  useEffect(() => {
    if (document.getElementById("tawk-script")) {
      console.log("Tawk.to скрипт уже существует.");
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_API.onChatMaximized = () => onChatStateChange(true);
      window.Tawk_API.onChatMinimized = () => onChatStateChange(false);
      return;
    }

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    window.Tawk_API.onChatMaximized = () => {
      console.log("Чат Tawk.to открыт");
      onChatStateChange(true);
    };

    window.Tawk_API.onChatMinimized = () => {
      console.log("Чат Tawk.to закрыт");
      onChatStateChange(false);
    };

    const script = document.createElement("script");
    script.id = "tawk-script";
    script.src = TAWK_SRC;
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    script.onload = () => {
      console.log("Tawk.to виджет загружен и обработчики установлены.");
    };

    script.onerror = (e) => {
      console.error("Ошибка при загрузке скрипта Tawk.to:", e);
    };

    return () => {
      const scriptElement = document.getElementById("tawk-script");
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [onChatStateChange]);

  return null;
}