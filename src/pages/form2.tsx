import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { useRef } from 'react';

export default () => {
  const ref = useRef<HTMLInputElement>(null);
  const {handleSubmit, control} = useForm();

  let onSubmit = (values) => {
    console.log(values);
  }

  let handleClick = (e) => {
    e.preventDefault();
    if (ref && ref.current) {
      ref.current.focus();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller 
        as={TextField}
        inputRef={ref}
        control={control}
        name="text-field"
        defaultValue=""
      /> 
      <button onClick={handleClick}>Установить курсор!</button>
      <button type="submit">Send</button>
    </form>
  );
}