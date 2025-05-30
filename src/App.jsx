import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Order from './components/Order/Order';
import './components/Order/Order.css';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Success from './components/Success/Success';
import './components/Success/Success.css';
import Home from './components/Home/Home';
import './components/Home/Home.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
