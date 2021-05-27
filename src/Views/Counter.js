import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/Counter";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementState = () => {
    setCounter(counter + 1);
  };
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  const handleClick2 = useCallback(
    () => console.log("clicked!" + counter),
    [counter]
  );
  const handleClick1 = () => console.log("clicked!" + counter);
  // useCallback(() => {
  //   console.log("this is count useselector", counter);
  // }, [counter]);
  // console.log("this is count useselector" + counter);
  return (
    <div>
      <p>this is counter</p>
      <div>
        Value: {counter} <button onClick={incrementState}>Increment</button>
      </div>
      <button onClick={handleClick2}>클릭해보세요!</button>
      <p>this is reudx counter</p>
      <div>
        Value: {count.value}{" "}
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
