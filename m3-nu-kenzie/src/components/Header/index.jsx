import "./index.css";

function Header({ setIsLogged }) {
  return (
    <header>
      <div>
        <h2>
          <span>Nu</span> Kenzie
        </h2>
        <button onClick={() => setIsLogged(false)}>Início</button>
      </div>
    </header>
  );
}

export default Header;
