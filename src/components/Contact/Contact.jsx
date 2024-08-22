import css from "./Contact.module.css";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({
  contact: { name, number, id },
  deleteContact,
}) {
  return (
    <li className={css.contactContainer}>
      <div className={css.contacInfo}>
        <p className={css.contactInfoField}>
          <BsFillPersonFill />
          {name}
        </p>
        <p className={css.contactInfoField}>
          <BsFillTelephoneFill />
          {number}
        </p>
      </div>
      <button
        className={css.addContactButton}
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
