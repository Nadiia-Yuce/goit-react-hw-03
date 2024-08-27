import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
  //початкові значення для обовʼязкового пропсу initialValues в Formik
  const initialValues = { contactName: "", number: "" };

  //під час сабміту додається новий контакт, який атрибутом передається в початкову ф-ю addContact в App
  // обовʼязкові аргументи для сабміту форми Formik-у:
  //values - об'єкт значень полів форми в момент її відправки
  //actions - обʼєкт налаштувань; використовуємо для ресету
  const handleSubmit = (values, actions) => {
    onAdd({
      name: values.contactName,
      number: values.number,
      id: nanoid(),
    });
    actions.resetForm();
  };

  //бібліотека для валідації "yup"; схема валідації полів; передається пропсом в Formik
  //помилки валідації візуалізуємо через компонент ErrorMessage, який додаємо до кожного філда
  const contactSchema = Yup.object().shape({
    contactName: Yup.string()
      .min(3, "Too short! Minimum 3 letters.")
      .max(50, "Too long! Maximum 50 letters.")
      .required("Required!"),
    number: Yup.string()
      .min(3, "Too short! Minimum 3 letters.")
      .max(50, "Too long! Maximum 50 letters.")
      .required("Required!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label htmlFor="contactName">Name</label>
        <Field name="contactName" id="contactName" className={css.formInput} />
        <ErrorMessage
          name="contactName"
          component="span"
          className={css.error}
        />

        <label htmlFor="number">Number</label>
        <Field name="number" id="number" className={css.formInput} />
        <ErrorMessage name="number" component="span" className={css.error} />

        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
