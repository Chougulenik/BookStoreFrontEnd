import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import BookStroeRegistration from './Component/RegistrationPage/BookStroeRegistration';
import LoginPage from './Component/RegistrationPage/LoginPage';
import Dashboard from "./Component/Dashboard/Dashboard";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Component/Cart/Cart";
import CustomerDetails from "./Component/Cart/CustomerDetails";
import OrderDetails from "./Component/Cart/OrderDetails";

function App() {
  return (
    <div className="App">
    <Router>
     <Switch>
      <Route exact path="/" component={BookStroeRegistration}></Route>
      <Route exact path="/login" component={LoginPage}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>
      <Route exact path="/cart" component={Cart}></Route>
      <Route exact path="/customerdetails" component={CustomerDetails}></Route>
      <Route exact path="/ordersummary" component={OrderDetails }></Route>
      

     </Switch>
     </Router>
    </div>
  );
}

export default App;
