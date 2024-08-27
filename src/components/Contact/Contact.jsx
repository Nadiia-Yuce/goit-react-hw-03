import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import css from "./Contact.module.css";
import clsx from "clsx";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onDelete(id);
    }, 500);
  };

  return (
    <div
      className={clsx(
        css.card,
        "animate__animated",
        isRemoving && "animate__fadeOut"
      )}
    >
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
      <button type="button" className={css.delete} onClick={handleRemove}>
        Delete
      </button>
    </div>
  );
}
