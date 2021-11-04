import React from "react";
import icons from "../icons";

function Button({ text, setShow }) {
  function IconButton(params) {
    switch (params) {
      case "publicar":
        return <FiEdit />;
      case "felicitar":
        return <FiAward />;
      case "evento":
        return <FiCalendar />;
      case "vender":
        return <FiHome />;
      case "asistente":
        return <FiMessageSquare />;

      case "like":
        return <HiOutlineThumbUp />

      case 'notLike':
        return <HiOutlineThumbDown />
    }
  }

  function ColorButton(params) {
    switch (params) {
      case "publicar":
        return { color: "green" };
      case "felicitar":
        return { color: "purple" };
      case "evento":
        return { color: "red" };
      case "vender":
        return { color: "blue" };
      case "asistente":
        return { color: "orange" };
      default:
        return { color: "black", background: 'black' };
    }
  }
  return (
    <button className="button" style={ColorButton(text)} onClick={() => setShow(true)}>
      <p>{icons(text)} </p>
      <p>{text}</p>{" "}
    </button>
  );
}

export default Button;
