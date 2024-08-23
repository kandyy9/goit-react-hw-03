import Contact from "../Contact/Contact";
import { nanoid } from "nanoid";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, deleteContact }) {
  return (
    <>
      <ul className={css.contactList}>
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
