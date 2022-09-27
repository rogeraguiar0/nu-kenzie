import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function Main({ finances, setFinances, price, setPrice }) {
  const types = ["Entrada", "Saída"];

  const [description, setDescription] = useState({
    desc: "",
    value: "",
    type: "Entrada",
  });

  const [filter, setFilter] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setDescription(
      description.type === "Saída" &&
        (description.value = description.value * -1)
    );

    if (description.desc !== "" && description.value !== "") {
      setFinances([...finances, description]);
      toast.success("Finança adicionada com sucesso!", {
        position: "top-center",
        autoClose: 1000,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Insira os dados corretamente!", {
        position: "top-center",
        autoClose: 1000,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setDescription({
      desc: "",
      value: "",
      type: description.type,
    });
  }

  function handleClose(elem) {
    setFinances(finances.filter((elemF) => elem !== elemF));
    toast.success("Finança removida com sucesso!", {
      position: "top-center",
      autoClose: 1000,
      theme: "colored",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const newFinances = finances.filter((elem) =>
    filter === "" ? true : elem.type === filter
  );

  const newPrice = finances.reduce((acc, elem) => acc + elem.value, 0);

  return (
    <main>
      <ToastContainer />
      <section className="description">
        <h3>Descrição</h3>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(event) =>
              setDescription({ ...description, desc: event.target.value })
            }
            value={description.desc}
            placeholder="Digite aqui sua descrição"
            type="text"
          />
          <label>Ex: Compra de roupas</label>
          <div>
            <div className="value">
              <label>Valor</label>
              <div>
                <input
                  onChange={(event) => {
                    setDescription({
                      ...description,
                      value: +event.target.value,
                    });
                  }}
                  value={description.value}
                  placeholder="0,00"
                  type="number"
                />
                <p>R$</p>
              </div>
            </div>
            <div className="type-value">
              <label>Tipo</label>
              <select
                onChange={(event) =>
                  setDescription({ ...description, type: event.target.value })
                }
                defaultValue={description.type}
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button onClick={setPrice(newPrice)} className="btn-df" type="submit">
            Inserir valor
          </button>
        </form>
        {price !== 0 && (
          <div className="total-value">
            <div>
              <h3>Valor total:</h3>
              <p>
                <span>$ {price}</span>
              </p>
            </div>
            <p>O valor se refere ao saldo</p>
          </div>
        )}
      </section>
      <section className="resume">
        <div>
          <h3>Resumo financeiro</h3>
          <ul>
            <li>
              <button
                onClick={() => setFilter("")}
                className="btn-vr"
                type="button"
              >
                Todos
              </button>
            </li>
            <li>
              <button
                onClick={() => setFilter("Entrada")}
                className="btn-vr"
                type="button"
              >
                Entradas
              </button>
            </li>
            <li>
              <button
                onClick={() => setFilter("Saída")}
                className="btn-vr"
                type="button"
              >
                Saídas
              </button>
            </li>
          </ul>
        </div>
        <ul>
          {finances.length > 0 ? (
            newFinances.map((elem, index) => {
              return (
                <li key={index}>
                  <div>
                    <h4>{elem.desc}</h4>
                    <div>
                      <p>R$ {elem.value}</p>
                      <button
                        onClick={() => handleClose(elem)}
                        className="btn-ex"
                        type="button"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <p>{elem.type}</p>
                </li>
              );
            })
          ) : (
            <>
              <p>Você ainda não possui nenhum lançamento</p>
            </>
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;
