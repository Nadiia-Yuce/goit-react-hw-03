import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <FaUser size={16} color="rgb(97, 76, 150)" />
        <p className={css.text}>{name}</p>
      </div>
      <div className={css.wrap}>
        <FaPhone size={16} color="rgb(97, 76, 150)" />
        <p className={css.text}>{number}</p>
      </div>
      {/* при події onClick викликається коллбек onDelete, якому передається поточне значеня id, по якому має видалятися обʼєкт */}
      {/* атрибут id ф-ї onDelete піднімається до початкової ф-ї removeContact в App  */}
      <button type="button" className={css.delete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
