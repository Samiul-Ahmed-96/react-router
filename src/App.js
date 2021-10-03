import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import User from './components/User/User';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
          <Route path="/user">
            <User></User>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route>
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
