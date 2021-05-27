import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/Counter";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementState = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  console.log("this is count useselector", count);

  const memoizedCallback = useCallback(() => {
    callback;
  }, [input]);
  return (
    <div>
      <p>this is counter</p>
      <div>
        Value: {counter} <button onClick={incrementState}>Increment</button>
      </div>
      <p>this is reudx counter</p>
      <div>
        Value: {count.value}{" "}
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
