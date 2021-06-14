import { useSelector } from "react-redux";
import { selectTodo } from "./todoSlice";
import { TodoListItem } from "./TodoListItem";
import { AddTodoForm } from "./AddTodoForm";
export default function TodoListApp() {
  const todoAll = useSelector(selectTodo);
  const todoList = todoAll ? (
    todoAll.map(todo => <TodoListItem key={todo.id} todo={todo} state={todo} />)
  ) : (
    <div>No todo</div>
  );
  return (
    <>
      {todoList}
      <AddTodoForm />
    </>
  );
}
