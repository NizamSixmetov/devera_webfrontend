import "./App.css";
import { useLenis } from "./hooks/useLenis.js";
import TawkToManager from "./Components/TawkToManager.js";
import { createContext, useContext } from "react";
import type Lenis from "lenis";

// Context for Lenis
const LenisContext = createContext<React.RefObject<Lenis | null> | null>(null);

export const useLenisInstance = () => useContext(LenisContext);

function App() {
  const lenisRef = useLenis();

  return (
    <LenisContext.Provider value={lenisRef}>
      <div className="relative">
        <TawkToManager lenisRef={lenisRef} />
      </div>
    </LenisContext.Provider>
  );
}

export default App;
