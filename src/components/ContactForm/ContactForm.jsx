import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
  const initialValues = { contactName: "", number: "" };

  const handleSubmit = (values, actions) => {
    onAdd({
      name: values.contactName,
      number: values.number,
      id: nanoid(),
    });
    actions.resetForm();
  };

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
