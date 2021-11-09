import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Login from "./components/Pages/AccountSetup/Login/Login";
import Registration from "./components/Pages/AccountSetup/Registration/Registration";
import Products from "./components/Pages/Home/AllProducts/Products/Products";
import HomePage from "./components/Pages/Home/HomePage/HomePage";
import PageError from "./components/Pages/PageError/PageError";
import Navigation from "./components/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
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
          <Route exact path='/register'>
            <Registration></Registration>
          </Route>
          <Route exact path='/products'>
            <Products></Products>
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
