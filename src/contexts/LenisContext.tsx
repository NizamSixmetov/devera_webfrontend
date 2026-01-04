import { createContext, useContext } from "react";
import type Lenis from "lenis";

// Context for Lenis
export const LenisContext = createContext<React.RefObject<Lenis | null> | null>(null);

// Hook for convenient use of context in other components
export const useLenisInstance = () => useContext(LenisContext);
