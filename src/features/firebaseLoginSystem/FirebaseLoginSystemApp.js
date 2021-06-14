import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { AuthListener } from "./settings/AuthListener";

export default function FirebaseLoginSystemApp() {
  AuthListener();

  return (
    <BrowserRouter>
      <header className="App-header">
        <nav>
          <Link to="/account">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <Switch>
          <PrivateRoute path="/account" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </header>
    </BrowserRouter>
  );
}
