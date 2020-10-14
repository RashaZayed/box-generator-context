import React, { useContext } from "react";
import MyContext from "../MyContext";
import styles from './styles.module.css'

const Input = (props) => {
  const context = useContext(MyContext);
  var currentSquare = {}

  const onChange = (e) => {

    currentSquare = {
        ...currentSquare,
        [e.target.name] :e.target.value
    }

    console.log(currentSquare)
  };
  const onSubmit = (e) => {

    context.setColor([...context.color, currentSquare]);
    // currentSquare = {}
    console.log(context.color);
  };
  
  return (
    <div>
      <label>Color: </label>
      <input type="text" name='color' onChange={onChange}></input>
      <label>Height: </label>
      <input type="text" name='height' onChange={onChange}></input>
      <label>Width: </label>
      <input type="text" name='width' onChange={onChange}></input>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
};
export default Input;
