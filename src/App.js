import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Login from "./components/Pages/AccountSetup/Login/Login";
import HomePage from "./components/Pages/Home/HomePage/HomePage";
import PageError from "./components/Pages/PageError/PageError";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>
          <Route exact path='/home'>
            <HomePage></HomePage>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <PageError></PageError>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
