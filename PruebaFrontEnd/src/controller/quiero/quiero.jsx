import axios from "axios";
import React, { useState } from "react";
import Button from "../button/button";
import Modal from "../modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { obtenerAllMessage } from "../../../reducers/message/message.reducers";
function Quiero() {
    const url = 'http://localhost:4000/'
    const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [quiero, setQuiero] = useState({
    text: "",
    date: new Date(),
    tipe: "text",
  });
  async function addMessaje() {
    await axios
      .post(`${url}api/add`, quiero)
      .then(() => {
        setQuiero({ ...quiero, text: "" })
        dispatch(obtenerAllMessage());
      })
      .catch(() => {
        alert("Error en el mensaje");
      });
  }
  return (
    <>
      <section className="container">
        <article className="quiero_input">
          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/56312238_2009132362519163_4996070906926202880_n.jpg?ccb=11-4&oh=a866e87ce8efd381679a34f6a92b2717&oe=61883886"
            alt="img"
          />
          <div>
            <input
              type="text"
              placeholder="Quiero..."
              value={quiero.text}
              onChange={(e) => setQuiero({ ...quiero, text: e.target.value })}
              onKeyPress={(event, d) => {
                if (event.key === "Enter") {
                  addMessaje();
                }
              }}
            />
          </div>
        </article>
        <span className="line" />
        <article className="quiero_button">
          <Button text="publicar" setShow={setShow} />
          <Button text="felicitar" />
          <Button text="evento" />
          <Button text="vender" />
          <Button text="asistente" />
        </article>
      </section>
      <Modal show={show} setShow={setShow} />
    </>
  );
}

export default Quiero;
