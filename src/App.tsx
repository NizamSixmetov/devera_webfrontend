import HomePage from "./App/page.js";
import "./App.css";
import ChatWidget from "./Components/ChatWidget.js";

function App() {
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