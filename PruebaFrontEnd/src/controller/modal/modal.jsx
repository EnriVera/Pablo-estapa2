import React, {useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./style/modal.css";
import {
  HiOutlineX,
  HiSpeakerphone,
  HiHeart,
  HiOutlineSearch,
  HiOutlinePresentationChartLine,
} from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { obtenerAllMessage } from "../../../reducers/message/message.reducers";

export default function Modal(prosp) {
  const dispatch = useDispatch();
  const url = 'http://localhost:4000/'
  if (!prosp.show) {
    return null;
  }

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
      prosp.setShow(false)
    })
    .catch(() => {
      alert("Error en el mensaje");
    });
  }
  return ReactDOM.createPortal(
    <div className="cont-modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title">
            <FiEdit style={{background: 'transparent'}}/>
            <p>Publicar</p>
          </div>
          <button className="modal-exit" onClick={() => prosp.setShow(false)}>
            <HiOutlineX style={{background: 'transparent'}}/>
          </button>
        </div>
        <div className="modal-body">
          <p>Tipo de publicacion</p>
          <div className="modal-button">
            <button onClick={() => setQuiero({...quiero, tipe: 'publicacion'})}>
              <FiEdit style={{background: 'transparent'}}/>
              Publicacion
            </button>
            <button onClick={() => setQuiero({...quiero, tipe: 'anuncio_oficial'})}>
              <HiSpeakerphone style={{background: 'transparent'}}/>
              Anuncio Oficial
            </button>
            <button onClick={() => setQuiero({...quiero, tipe: 'ofreser_ayuda'})}>
              <HiHeart style={{background: 'transparent'}}/>
              Ofreser Ayuda
            </button>
            <button onClick={() => setQuiero({...quiero, tipe: 'objeto_perdido'})}>
              <HiOutlineSearch style={{background: 'transparent'}}/>
              Objeto Perdido
            </button>
            <button onClick={() => setQuiero({...quiero, tipe: 'encuesta'})}>
              <HiOutlinePresentationChartLine style={{background: 'transparent'}}/>
              Encuesta
            </button>
          </div>
        </div>
        <div className='model-text'>
          <p>Mensaje</p>
            <textarea name="" id="" cols="30" rows="10" onChange={(e) => setQuiero({ ...quiero, text: e.target.value })}></textarea>
        </div>
        <div className='modal-footer'>
            <button onClick={() => addMessaje()}>Agregar</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
