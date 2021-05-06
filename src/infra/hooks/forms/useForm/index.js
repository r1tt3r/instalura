import React from 'react';

export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = React.useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [isFormLoading, setIsFormLoading] = React.useState(false);

  React.useEffect(() => {
    validateSchema(values)
      .then(() => {
        setIsFormDisabled(false);
        setErrors({});
      })
      .catch((error) => {
        const currentErrors = error.inner.reduce((accValue, currentValue) => {
          const currentName = currentValue.path;
          const currentMsg = currentValue.message;

          return {
            ...accValue,
            [currentName]: currentMsg,
          };
        }, {});
        setErrors(currentErrors);
        setIsFormDisabled(true);
      });
  }, [values]);

  return {
    values,
    setValues,
    handleSubmit(e) {
      e.preventDefault();
      onSubmit(values);
    },
    handleChange(e) {
      const currentName = e.target.name;
      const currentValue = e.target.value;
      setValues((currentValues) => ({
        ...currentValues,
        [currentName]: currentValue,
      }));
    },
    handleBlur(e) {
      const currentName = e.target.name;
      setTouched({
        ...touched,
        [currentName]: true,
      });
    },
    touched,
    setTouched,
    isFormDisabled,
    setIsFormDisabled,
    isFormLoading,
    setIsFormLoading,
    validateSchema,
    errors,
  };
}
