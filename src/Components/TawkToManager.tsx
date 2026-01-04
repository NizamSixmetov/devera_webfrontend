import { useState, useEffect } from "react";
import type Lenis from "lenis";
import HomePage from "../App/page.js";
import TawkTo from "./TawkTo.js";

interface TawkToManagerProps {
  lenisRef: React.RefObject<Lenis | null>;
}

function TawkToManager({ lenisRef }: TawkToManagerProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Scroll block when chat is open
  useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    if (isChatOpen) {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);

      // Stop Lenis
      if (lenisRef.current) {
        lenisRef.current.stop();
      }
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      if (lenisRef.current) {
        lenisRef.current.start();
      }
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.scrollTo(0, scrollPosition);
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.start();
      }
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";

      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [isChatOpen, lenisRef, scrollPosition]);

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
