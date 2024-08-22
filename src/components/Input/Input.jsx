import { useId, useState } from "react";
import css from "./Input.module.css";

export default function Input() {
  const id = useId();
  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleChange} value={inputValue} />
      <p>{inputValue}</p>
    </>
  );
}
