import "./index.css";

function Header({ setIsLogged }) {
  function modeToggle() {
    document.querySelector("html").classList.toggle("light-mode");
  }
  return (
    <header>
      <div>
        <h2>
          <span>Nu</span> Kenzie
        </h2>
        <div>
          <button onClick={() => setIsLogged(false)}>Início</button>
          <button onClick={() => modeToggle()}>Mode</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
