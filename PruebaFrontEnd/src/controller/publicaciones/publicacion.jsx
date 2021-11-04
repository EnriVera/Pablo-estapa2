import React, { useEffect, useState } from "react";
import icons from "../icons";
export default function Publicacion({ text, date, tipe }) {
  const [tipePublic, setTipePublic] = useState({
    icon: icons('texto'),
    text: "Texto",
  });

  useEffect(() => {
    console.log(tipe)
    switch (tipe) {
      case "publicacion":
        setTipePublic({
          icon: icons('publicar'),
          text: "Publicacion",
        });
      case "anuncio_oficial":
        setTipePublic({
          icon: icons('megafono'),
          text: "Anuncio Oficial",
        });
      case "ofreser_ayuda":
        setTipePublic({
          icon: icons('corazon'),
          text: "Ofreser Ayuda",
        });
      case "objeto_perdido":
        setTipePublic({
          icon: icons('search'),
          text: "Objeto Perdido",
        });
      case "encuesta":
        setTipePublic({
          icon: icons('encuaesta'),
          text: "Encuesta",
        });
    }
  }, [tipe]);
  return (
    <>
      <section className="container">
        <article className="conatainer_user">
          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/56312238_2009132362519163_4996070906926202880_n.jpg?ccb=11-4&oh=a866e87ce8efd381679a34f6a92b2717&oe=61883886"
            alt="img"
          />
          <div>
            <h2>Pablo de Marcos</h2>
            <div>
              <p>{date}</p>
              <p>{tipePublic.icon} {tipePublic.text}</p>
            </div>
          </div>
        </article>
        <article className="container_publi">
          <p>{text}</p>
        </article>
        <span className="line"></span>
        <article className="publi_button">
          <button>{icons("like")} 0</button>
          <button>{icons("hand")} 0</button>
          <button>{icons("corazon")} 0</button>
          <button>{icons("idea")} 0</button>
          <button>{icons("notLike")} 0</button>
          <button>{icons("folder")} 0</button>
        </article>
      </section>
    </>
  );
}
