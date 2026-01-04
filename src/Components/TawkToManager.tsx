import { useState, useEffect, useRef } from "react";
import type Lenis from "lenis";
import HomePage from "../App/page.js";
import TawkTo from "./TawkTo.js";

interface TawkToManagerProps {
  lenisRef: React.RefObject<Lenis | null>;
}

function TawkToManager({ lenisRef }: TawkToManagerProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const scrollPositionRef = useRef(0);

  // Scroll block when chat is open
  useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Копируем ref для использования в cleanup
    const lenis = lenisRef.current;

    if (isChatOpen) {
      scrollPositionRef.current = window.scrollY;

      // Stop Lenis
      if (lenis) {
        lenis.stop();
      }
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      if (lenis) {
        lenis.start();
      }
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.scrollTo(0, scrollPositionRef.current);
    }

    return () => {
      if (lenis) {
        lenis.start();
      }
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";

      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [isChatOpen, lenisRef]);

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
