import "./App.css";
import { useLenis } from "./hooks/useLenis.js";
import TawkToManager from "./Components/TawkToManager.js";
import { LenisContext } from "./contexts/LenisContext";

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
