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

function App() {
  return (
    <div className="App">
    <Router>
     <Switch>
      <Route exact path="/" component={BookStroeRegistration}></Route>
      <Route exact path="/login" component={LoginPage}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>

     </Switch>
     </Router>
    </div>
  );
}

export default App;
