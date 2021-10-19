
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Login from './Pages/Login/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>


          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
