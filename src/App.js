import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Login from "./components/Pages/AccountSetup/Login/Login";
import Registration from "./components/Pages/AccountSetup/Registration/Registration";
import Admin from "./components/Pages/Dashboard/Admin/Admin";
import Dashboard from "./components/Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "./components/Pages/Dashboard/Dashboard/MyOrders/MyOrders";
import Payment from "./components/Pages/Dashboard/Dashboard/Payment/Payment";
import Review from "./components/Pages/Dashboard/Dashboard/Review/Review";
import Products from "./components/Pages/Home/AllProducts/Products/Products";
import HomePage from "./components/Pages/Home/HomePage/HomePage";
import PageError from "./components/Pages/PageError/PageError";
import Navigation from "./components/Shared/Navigation/Navigation";

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
          <Route exact path='/register'>
            <Registration></Registration>
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route exact path='/myOrders'>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path='/payment'>
            <Payment></Payment>
          </Route>
          <Route exact path='/review'>
            <Review></Review>
          </Route>
          <Route exact path='/admin'>
            <Admin></Admin>
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
