import React from 'react';

export function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = React.useState(initialValues);

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
  };
}
