import { useEffect, useMemo } from "react";

const modalRootElement = document.getElementById("modal");

export default function Modal() {
  const element = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    modalRootElement.appendChild(element);

    return () => {
      modalRootElement.removeChild(element);
    };
  });
  return <p>Modal</p>;
}
