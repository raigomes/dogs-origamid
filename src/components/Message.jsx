import React, { useEffect, useReducer, useState } from "react";

export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const WARN = "WARN";

export const Message = ({ type, text }) => {
  const [style, setStyle] = useState(null);

  useEffect(() => {
    switch (type) {
      case SUCCESS:
        setStyle({ color: "rgb(68, 204, 17)" });
        break;
      case ERROR:
        setStyle({ color: "rgb(255, 51, 17)", margin: "1rem 0px" });
        break;
      case WARN:
        setStyle({ color: "rgb(255, 187, 17)", margin: "1rem 0px" });
        break;
      default:
        throw new Error("Opção inválida");
    }
  }, []);

  return <p style={style}>{text}</p>;
};

export default Message;
