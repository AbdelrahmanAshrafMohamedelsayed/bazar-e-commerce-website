import { useState } from "react";

const useInput = (validatefunc) => {
  const [value, setvalue] = useState("");
  const [InputTouched, setInputTouched] = useState(false);
  const inputValid = validatefunc(value);
  const onChangeHandler = (e) => {
    setvalue(e.target.value);
  };
  const onBlurHandler = (e) => {
    setInputTouched(true);
  };
  const reset = () => {
    setvalue("");
    setInputTouched(false);
  };
  return {
    value,
    inputValid,
    InputTouched,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
