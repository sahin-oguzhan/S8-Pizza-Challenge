import { useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';

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

export default function Order() {
  const [formData, setFormData] = useState(initialData);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    boyut: true,
    kalınlık: true,
    ekstra: true,
    isim: true,
  });

  let history = useHistory();

  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error === true);
    setIsValid(!hasErrors);
  }, [errors]);

  function handleChange(event) {
    const { value, type, checked, name } = event.target;
    let newFormData = { ...formData };

    if (type === 'checkbox') {
      if (checked) {
        if (formData[name].length < 10) {
          newFormData[name] = [...formData[name], value];
        }
      } else {
        newFormData[name] = formData[name].filter((item) => item !== value);
      }
    } else if (type === 'button') {
      if (value === 'increase') {
        newFormData.adet = formData.adet + 1;
      } else if (value === 'decrease' && formData.adet > 1) {
        newFormData.adet = formData.adet - 1;
      }
    } else {
      newFormData[name] = value;
    }

    setFormData(newFormData);

    let newErrors = { ...errors };

    if (name === 'boyut') {
      newErrors.boyut = !newFormData.boyut;
    } else if (name === 'kalınlık') {
      newErrors.kalınlık = !newFormData.kalınlık;
    } else if (name === 'isim') {
      newErrors.isim = newFormData.isim.trim().length < 3;
    } else if (name === 'ekstra') {
      newErrors.ekstra =
        newFormData.ekstra.length < 4 || newFormData.ekstra.length > 10;
    }

    setErrors(newErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) return;
    axios
      .post('https://reqres.in/api/pizza', formData, {
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      })
      .then((response) => {
        console.log('API Yanıtı:', response.data);
        history.push('/success');
      })
      .catch((error) => {
        console.error(`API Hatası: ${error}`);
      });
  }

  return (
    <body>
      <header>
        <div className="logo">
          <img src="/images/iteration-1-images/logo.svg" alt="" />
        </div>
        <div className="nav">
          <NavLink
            to="/"
            exact
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Anasayfa - <br />
          </NavLink>
          <NavLink
            to="/order"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Sipariş Oluştur
          </NavLink>
        </div>
      </header>

      <div className="pizza-card">
        <h1>{pizza.isim}</h1>
        <div className="pizza-info">
          <h3>{pizza.fiyat}TL</h3>
          <p>{pizza.puan}</p>
          <p>{pizza.yorum}</p>
        </div>
        <p>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>

      <Form onSubmit={handleSubmit}>
        <div className="boyut">
          <div>
            <Label style={{ color: 'black', fontWeight: 'bold' }}>
              {' '}
              Boyut Seç
              <span className="text-danger">*</span>
            </Label>
            <FormGroup>
              <Input
                data-cy="küçük"
                name="boyut"
                type="radio"
                id="küçük"
                value="küçük"
                checked={formData.boyut === 'küçük'}
                onChange={handleChange}
              />
              <Label htmlFor="küçük">Küçük</Label>
            </FormGroup>
            <FormGroup>
              <Input
                name="boyut"
                type="radio"
                id="orta"
                value="orta"
                checked={formData.boyut === 'orta'}
                onChange={handleChange}
              />
              <Label htmlFor="orta">Orta</Label>
            </FormGroup>
            <FormGroup>
              <Input
                name="boyut"
                type="radio"
                id="büyük"
                value="büyük"
                checked={formData.boyut === 'büyük'}
                onChange={handleChange}
              />{' '}
              <Label htmlFor="büyük">Büyük</Label>
            </FormGroup>
          </div>

          <div className="crust">
            <FormGroup>
              <Label
                for="kalınlık"
                style={{ color: 'black', fontWeight: 'bold' }}
              >
                Hamur Seç <span className="text-danger">*</span>
              </Label>
              <Input
                id="kalınlık"
                name="kalınlık"
                type="select"
                value={formData.kalınlık}
                onChange={handleChange}
                data-cy="kalınlık"
              >
                <option value="" disabled hidden>
                  Hamur Kalınlığı
                </option>
                <option value="ince kenar">İnce Kenar</option>
                <option value="normal kenar">Normal Kenar</option>
                <option value="kalın kenar">Kalın Kenar</option>
              </Input>
            </FormGroup>
          </div>
        </div>
        <div>
          <Label style={{ color: 'black', fontWeight: 'bold' }}>
            Ek Malzemeler
          </Label>
          <p>En az 4 en fazla 10 malzeme seçebilirsiniz. 5TL</p>
        </div>
        <div className="extras">
          {extras.map((item, index) => {
            return (
              <FormGroup key={index}>
                <Input
                  type="checkbox"
                  id={index}
                  name="ekstra"
                  onChange={handleChange}
                  value={item}
                  checked={formData.ekstra.includes(item)}
                  data-cy="extras"
                />{' '}
                <Label htmlFor={index}>{item}</Label>
              </FormGroup>
            );
          })}
        </div>

        <FormGroup>
          <Label
            for="exampleEmail"
            style={{ color: 'black', fontWeight: 'bold' }}
          >
            İsminiz:
          </Label>
          <Input
            id="isim"
            name="isim"
            placeholder="İsminizi giriniz"
            type="text"
            value={formData.isim}
            onChange={handleChange}
            data-cy="isim"
          />
        </FormGroup>
        <FormGroup>
          <Label for="ordernote" style={{ color: 'black', fontWeight: 'bold' }}>
            Siparişine eklemek istediğin bir not var mı?
          </Label>
          <Input
            id="ordernote"
            name="ordernote"
            type="textarea"
            placeholder="Sipariş notunuz"
            value={formData.ordernote}
            onChange={handleChange}
          />
        </FormGroup>
        <div className="order-finish">
          <div className="count-btn">
            <ButtonGroup>
              <Button
                style={{
                  backgroundColor: '#FDC913',
                  color: 'black',
                }}
                type="button"
                value="decrease"
                name="adet"
                onClick={handleChange}
              >
                -
              </Button>
              <div className="count">{formData.adet}</div>
              <Button
                style={{ backgroundColor: '#FDC913', color: 'black' }}
                type="button"
                value="increase"
                name="adet"
                onClick={handleChange}
              >
                +
              </Button>
            </ButtonGroup>
          </div>

          <div className="total">
            <h5 style={{ color: 'black', fontWeight: 'bold' }}>
              Sipariş Toplamı
            </h5>
            <h6>Seçimler {formData.ekstra.length * 5}TL</h6>
            <h6 style={{ color: '#CE2829' }}>
              Toplam{' '}
              {(Number(pizza.fiyat) + formData.ekstra.length * 5) *
                formData.adet}
              TL
            </h6>
            <Button
              style={{
                backgroundColor: '#FDC913',
                color: 'black',
                width: '100%',
              }}
              disabled={!isValid}
              data-cy="submit"
            >
              SİPARİŞ VER
            </Button>
          </div>
        </div>
      </Form>
    </body>
  );
}
