import "./index.css";
import { useState } from "react";
import Header from "../Header";
import Main from "../Main";

function Dashboard({ setIsLogged }) {
  const [finances, setFinances] = useState([]);
  const [price, setPrice] = useState(0);

  return (
    <div>
      <Header setIsLogged={setIsLogged} />
      <Main
        finances={finances}
        setFinances={setFinances}
        price={price}
        setPrice={setPrice}
      />
    </div>
  );
}

export default Dashboard;
