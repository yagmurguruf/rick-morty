import logo from './logo.svg';
import Home from "./pages/Home";
import User from "./pages/User";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav> */}

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/user/:user"
            component={User}
            // render={}
            >
          </Route>
          <Route
            component={Home}
          path="/">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
