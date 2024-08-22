import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MaskedInput from "react-text-mask";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const id = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onAdd({
      name: values.name,
      number: values.number,
      id: Date.now(),
    });
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Too Short!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.addForm}>
        <div className={css.fieldContainer}>
          <label htmlFor={`${id}-name`}>Name</label>
          <Field className={css.formikInput} name="name" id={`${id}-name`} />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          ></ErrorMessage>
        </div>
        <div className={css.fieldContainer}>
          <label htmlFor={`${id}-number`}>Number</label>
          <Field name="number">
            {({ field }) => (
              <MaskedInput
                className={css.formikInput}
                {...field}
                mask={[/\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]}
                id={`${id}-number`}
              />
            )}
          </Field>
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          ></ErrorMessage>
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
