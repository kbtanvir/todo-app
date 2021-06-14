import { useState } from "react";
import { addTodo } from "./todoSlice";
import { useDispatch } from "react-redux";

export function AddTodoForm() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (input === "") return;
    dispatch(addTodo(input));
    setInput("");
  }
  return (
    <>
      <h5>Add Todo</h5>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button>Add</button>
      </form>
    </>
  );
}
