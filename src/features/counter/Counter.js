import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispath = useDispatch();

  return (
    <>
      <Button variant="success" onClick={() => dispath(increment())}>
        Increment
      </Button>
      <p>{count}</p>
      <Button variant="danger" onClick={() => dispath(decrement())}>
        Decrement
      </Button>
    </>
  );
}
