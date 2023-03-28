import { useState } from "react";

export const Practice = () => {
  const [count, setCount] = useState(0);
  const handlerState = () => {
    setCount((count) => count + 1);
  };
  const drecrementState = () => {
    setCount((count) => count - 1);
  };

  const resethandler = () => {
    setCount((count) => (count = 0));
  };

  return (
    <div style={{ color: count > 7 ? "red" : "black" }}>
      {" "}
      <button onClick={handlerState}>+</button>
      {count}
      <button onClick={drecrementState}>-</button>
      <button onClick={resethandler}>rest</button>
    </div>
  );
};
