import { useState } from "react";

export const Practice = () => {
  const [count, setCount] = useState(0);
  const handlerState = () => {
    setCount((count) => count + 1);
  };

  return (
    <div style={{ color: count > 7 ? "red" : "black" }} onClick={handlerState}>
      {" "}
      {count}
    </div>
  );
};
