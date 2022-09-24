import "./App.css";
import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="App">
      {isLogged ? (
        <Dashboard setIsLogged={setIsLogged} />
      ) : (
        <LandingPage setIsLogged={setIsLogged} />
      )}
    </div>
  );
}

export default App;
