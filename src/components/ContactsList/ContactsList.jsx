import Contact from "../Contact/Contact";
import { nanoid } from "nanoid";
import css from "./ContactsList.module.css";

export default function ContactsList({ contacts, deleteContact }) {
  return (
    <>
      <ul className={css.contactsList}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id ? contact.id : nanoid()}
            contact={contact}
            deleteContact={deleteContact}
          ></Contact>
        ))}
      </ul>
    </>
  );
}
