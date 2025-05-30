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

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/order">
          <Order />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
