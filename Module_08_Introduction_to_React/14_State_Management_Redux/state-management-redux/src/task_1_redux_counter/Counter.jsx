import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterActions";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Redux Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}
