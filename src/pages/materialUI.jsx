import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useForm, Controller } from 'react-hook-form';
import { Button } from "@material-ui/core";
import { DevTool } from "@hookform/devtools";
import { useEffect } from 'react';
import { useRef } from 'react';

const options = [{id: 1, name: 'Option 1'}, {id: 3, name: 'Option 2'}];
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
]

export default function ControllableStates() {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const { register, handleSubmit, control,errors } = useForm();

  useEffect(() => {
    register({
      name: "autocomp",
      required: true,
    })
  }, [])

  return (
    <>
    <form onSubmit={handleSubmit(data => console.log(data, errors))}>
      {/* <Controller */}
          <Autocomplete
            getOptionLabel={option => option.title}
            value={value}
            inputValue={inputValue}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            // ref={register({
            //   name: "autocomp",
            //   required: true,
            // })}
            getOptionLabel={option => option.title}
            // getOptionLabel={(option) => typeof(option) === "object" ? option.title : top100Films.find((val, index) => index === option).title}
            // getOptionSelected={(option, value) => true}
            options={top100Films}
            style={{ width: 300 }}
            renderInput={(params) => (
              <Controller
                as={
                  <TextField {...params} label="Controllable" variant="outlined" />
                }
                name='autocomp'
                control={control}
                defaultValue=""
              />
            )
            }
          />
      <Button type="submit">Submit</Button>
    </form>
    <DevTool control={control} />
    </>
  );
}