import "./App.css";
import { useLenis } from "./hooks/useLenis.js";
import TawkToManager from "./Components/TawkToManager.js";

function App() {
  useLenis();

  return (
    <div className="relative">
      <TawkToManager />
    </div>
  );
}

export default App;
