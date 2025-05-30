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

const pizza = {
  isim: 'Position Absolute Acı Pizza',
  fiyat: '85.50',
  puan: 4.9,
  yorum: 200,
};

const initialData = {
  boyut: '',
  kalınlık: '',
  ekstra: [],
  isim: '',
  ordernote: '',
  adet: 1,
};

const extras = [
  'Pepperoni',
  'Sosis',
  'Kanada Jambonu',
  'Tavuk Izgara',
  'Soğan',
  'Domates',
  'Mısır',
  'Sucuk',
  'Jalapeno',
  'Sarımsak',
  'Biber',
  'Ananas',
  'Kabak',
];

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
          <Success baslik={pizza.isim} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
