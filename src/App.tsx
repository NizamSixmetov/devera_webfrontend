import "./App.css";
// import HomePage from "./App/page.js";
import TawkToManager from "./Components/TawkToManager.js";
import { useLenis } from "./hooks/useLenis.js";

function App() {
  useLenis();

  return (
    <div className="relative">
      {/* <HomePage /> */}
      <TawkToManager />
    </div>
  );
}

export default App;
