// Components/TawkTo.js

import { useEffect } from "react";

// ВАЖНО: Используем ПОЛНЫЙ URL с ID виджета
const TAWK_SRC = "https://embed.tawk.to/6948fc20420bc819787f0343/1jd2hhoas";

export default function TawkTo({ onChatStateChange }) {
  useEffect(() => {
    // Проверяем, не был ли скрипт уже добавлен
    if (document.getElementById("tawk-script")) {
      console.log("Tawk.to скрипт уже существует.");
      // Даже если скрипт существует, нам нужно повесить обработчики
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_API.onChatMaximized = () => onChatStateChange(true);
      window.Tawk_API.onChatMinimized = () => onChatStateChange(false);
      return;
    }

    // Инициализация глобальных переменных (как в оригинале)
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // 1. Назначаем обработчики событий ДО загрузки скрипта
    // onChatMaximized вызывается, когда чат открывается
    window.Tawk_API.onChatMaximized = () => {
      console.log("Чат Tawk.to открыт");
      onChatStateChange(true);
    };

    // onChatMinimized вызывается, когда чат закрывается
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

    // Функция очистки при размонтировании компонента
    return () => {
      const scriptElement = document.getElementById("tawk-script");
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [onChatStateChange]); // Добавляем зависимость, чтобы эффект перезапускался, если prop изменится

  return null;
}