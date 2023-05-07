import "./index.css";
import image from "../../assets/ilustration.svg";

function LandingPage({ setIsLogged }) {
  return (
    <div className="landing">
      <div className="slogan">
        <h1 className="slogan__title">
          <span>Nu</span> Kenzie
        </h1>
        <p className="slogan__message">
          Centralize o controle das suas finanças
        </p>
        <p className="slogan__lt-message">de forma rápida e segura</p>
        <button
          onClick={() => setIsLogged(true)}
          type="button"
          className="btn-df"
        >
          Iniciar
        </button>
      </div>
      <div className="ilustration">
        <img src={image} alt="ilustration" />
      </div>
    </div>
  );
}

export default LandingPage;
