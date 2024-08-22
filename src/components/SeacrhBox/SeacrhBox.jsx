import { useId } from "react";
import css from "./SeacrhBox.module.css";

export default function SearchBox({ value, onFilter }) {
  const id = useId();
  return (
    <>
      <label htmlFor={`${id}-searchBox`}>Find contacts by name</label>
      <input
        id={`${id}-searchBox`}
        name="searchBox"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      ></input>
    </>
  );
}
