import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  return (
    <div>
      <div className={css.wrap}>
        <FaUser />
        <p className={css.text}>{contact.name}</p>
      </div>
      <div className={css.wrap}>
        <FaPhone />
        <p className={css.text}>{contact.number}</p>
      </div>
      <button type="button">Delete</button>
    </div>
  );
}
