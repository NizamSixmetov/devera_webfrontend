import { useState, useEffect } from "react";
import HomePage from "../App/page.js";
import TawkTo from "./TawkTo.js";

function TawkToManager() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isChatOpen) {
        window.Tawk_API?.minimize?.();
      }
    };

    if (isChatOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isChatOpen]);

  return (
    <>
      <div className={isChatOpen ? "blurred-background" : ""}>
        <HomePage />
      </div>

      {isChatOpen && (
        <div
          className="chat-overlay"
          onClick={() => window.Tawk_API?.minimize?.()}
        ></div>
      )}

      <TawkTo onChatStateChange={setIsChatOpen} />
    </>
  );
}

export default TawkToManager;
