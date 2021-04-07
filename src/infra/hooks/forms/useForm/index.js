import React from 'react';

function formatErrors(yupErrorsInner = []) {
  return yupErrorsInner.reduce((accValue, currentValue) => {
    const currentName = currentValue.path;
    const currentMsg = currentValue.message;

    return {
      ...accValue,
      [currentName]: currentMsg,
    };
  }, {});
}

export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = React.useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [isFormLoading, setIsFormLoading] = React.useState(false);

  async function validateValues(currentValues) {
    try {
      await validateSchema(currentValues);
      setIsFormDisabled(false);
      setErrors({});
    } catch (err) {
      const currentErrors = formatErrors(err.inner);
      setErrors(currentErrors);
      setIsFormDisabled(true);
    }
  }

  React.useEffect(() => {
    validateValues(values).catch((err) => {
      console.log(err);
    });
  }, [values]);

  return {
    values,
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
    isFormDisabled,
    setIsFormDisabled,
    isFormLoading,
    setIsFormLoading,
    validateSchema,
    errors,
  };
}
