import "./index.css";
// import FaTrash from "react-icons/fa";
// import { useState } from "react";

function Main({ finances, setFinances, price, setPrice }) {
  //   const [description, setDescription] = useState("");
  //   const [value, setValue] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();

    // setValue(0);
    // setDescription("");
  }

  return (
    <main>
      <section className="description">
        <h3>Descrição</h3>
        <form onSubmit={handleSubmit}>
          <input placeholder="Digite aqui sua descrição" type="text" />
          <label>Ex: Compra de roupas</label>
          <div>
            <div className="value">
              <label>Valor</label>
              <div>
                <input placeholder="0,00" type="number" />
                <p>R$</p>
              </div>
            </div>
            <div className="type-value">
              <label>Tipo</label>
              <select>
                <option value="0">Entrada</option>
                <option value="1">Saída</option>
              </select>
            </div>
          </div>
          <button className="btn-df" type="submit">
            Inserir valor
          </button>
        </form>
        <div className="total-value">
          <div>
            <h3>Valor total:</h3>
            <p>
              <span>$ {price}</span>
            </p>
          </div>
          <p>O valor se refere ao saldo</p>
        </div>
      </section>
      <section className="resume">
        <div>
          <h3>Resumo financeiro</h3>
          <ul>
            <li>
              <button className="btn-vr" type="button">
                Todos
              </button>
            </li>
            <li>
              <button className="btn-vr" type="button">
                Entradas
              </button>
            </li>
            <li>
              <button className="btn-vr" type="button">
                Saídas
              </button>
            </li>
          </ul>
        </div>
        <ul>
          {/* <li>
            <div>
              <h4>Teste</h4>
              <div>
                <p>R$ 500</p>
                <button className="btn-ex">x</button>
              </div>
            </div>
            <p>Entrada</p>
          </li> */}
          {finances.map((elem) => {
            return (
              <li>
                <div>
                  <h4>{elem.desc}</h4>
                  <div>
                    <p>{elem.value}</p>
                    <button className="btn-ex" type="button">
                      x
                    </button>
                  </div>
                </div>
                <p>{elem.type}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
