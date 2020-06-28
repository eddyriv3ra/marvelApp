import { useEffect } from "react";
import { createPortal } from "react-dom";
import getDivToPortal from "./utils";

const Portal = ({ children }) => {
  const element = document.createElement("div");

  useEffect(() => {
    const modalRoot = getDivToPortal();
    modalRoot.appendChild(element);
    return () => modalRoot.removeChild(element);
  }, []);

  return createPortal(children, element);
};

export default Portal;
