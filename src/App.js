import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import BlogHome from "./features/blog/BlogHome";
import Counter from "./features/counter/Counter";
import FirebaseLoginSystemApp from "./features/firebaseLoginSystem/FirebaseLoginSystemApp";
import TodoListApp from "./features/todolist/TodoListApp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink to="/account">Auth app</NavLink>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/todoapp">Todo list</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
        <header className="App-header">
          <Switch>
            <Route path="/account" exact component={FirebaseLoginSystemApp} />
            <Route path="/counter" component={Counter} />
            <Route path="/todoapp" component={TodoListApp} />
            <Route path="/blog" component={BlogHome} />
          </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
