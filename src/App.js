import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import UserDetail from './components/UserDetail/UserDetail';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/user/:userId">
            <UserDetail></UserDetail>
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
