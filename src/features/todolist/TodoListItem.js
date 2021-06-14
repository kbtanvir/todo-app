import { updateTodo, toggleCompleteTodo, removeTodo } from "./todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
export function TodoListItem({ todo: { id, text, complete }, state }) {
  const [done, setDone] = useState(complete);
  const [action, setAction] = useState("read");
  const [input, setInput] = useState(text);
  const dispatch = useDispatch();

  function handleInputChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (input === "") return;
    setAction("read");
    dispatch(updateTodo({ id, input }));
  }
  function handleComplete() {
    setDone(!done);
    dispatch(toggleCompleteTodo({ id, done }));
  }
  const display =
    action === "read" ? (
      <>
        <div onClick={handleComplete}>{JSON.stringify(state)}</div>
        <button onClick={() => setAction("edit")}>Edit</button>
        <button onClick={() => dispatch(removeTodo({ id }))}>Delete</button>
      </>
    ) : (
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleInputChange} value={input} />
        </form>
      </div>
    );
  return display;
}
