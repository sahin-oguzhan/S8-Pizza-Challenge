import { useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import Header from '../Header/Header';
import '../Header/Header.css';
import OrderTotal from './OrderTotal';

export default function Order({
  formData,
  setFormData,
  extras,
  pizza,
  colors,
}) {
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
    <>
      <Header>
        <NavLink
          to="/"
          exact
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          Anasayfa - <br />
        </NavLink>
        <NavLink to="/order" style={{ textDecoration: 'none', color: 'white' }}>
          Sipariş Oluştur
        </NavLink>
      </Header>

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
                value="Küçük"
                checked={formData.boyut === 'Küçük'}
                onChange={handleChange}
              />
              <Label htmlFor="küçük">Küçük</Label>
            </FormGroup>
            <FormGroup>
              <Input
                name="boyut"
                type="radio"
                id="orta"
                value="Orta"
                checked={formData.boyut === 'Orta'}
                onChange={handleChange}
              />
              <Label htmlFor="orta">Orta</Label>
            </FormGroup>
            <FormGroup>
              <Input
                name="boyut"
                type="radio"
                id="büyük"
                value="Büyük"
                checked={formData.boyut === 'Büyük'}
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
                <option value="İnce Kenar">İnce Kenar</option>
                <option value="Normal Kenar">Normal Kenar</option>
                <option value="Kalın Kenar">Kalın Kenar</option>
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
            <OrderTotal
              pizza={pizza}
              formData={formData}
              color1={colors.black}
              color2={colors.darkgray}
              color3={colors.red}
            />
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
    </>
  );
}
