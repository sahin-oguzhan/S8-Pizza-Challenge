import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Order from './components/Order/Order';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Success from './components/Success/Success';
import './components/Success/Success.css';
import Hero from './components/Hero/Hero';
import './components/Hero/Hero.css';
import { useState } from 'react';
import Home from './components/Home/Home';

import Footer from './components/Footer/Footer';
import './components/Footer/Footer.css';

const colors = {
  yellow: '#FDC913',
  lightgray: '#5F5F5F',
  darkgray: '#292929',
  red: '#CE2829',
  beige: '#FAF7F2',
  white: 'white',
  black: 'black',
};

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
  const [formData, setFormData] = useState(initialData);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Hero />
          <Home />
          <Footer />
        </Route>
        <Route path="/order">
          <Order
            formData={formData}
            setFormData={setFormData}
            extras={extras}
            pizza={pizza}
            colors={colors}
          />
        </Route>
        <Route path="/success">
          <Success
            baslik={pizza.isim}
            boyut={formData.boyut}
            kalınlık={formData.kalınlık}
            ekstra={formData.ekstra}
            isim={formData.isim}
            ordernote={formData.ordernote}
            pizza={pizza}
            formData={formData}
            colors={colors}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
