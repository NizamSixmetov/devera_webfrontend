import "./App.css";
import HomePage from "./App/page.js";
import ChatWidget from "./Components/ChatWidget.js";
import { useLenis } from "./hooks/useLenis.js";

function App() {
  useLenis();
  return (
    <div className="relative">
      <HomePage />

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <ChatWidget />
      </div>
    </div>
  );
}

export default App;