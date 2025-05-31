import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../Header/Header.css';
import '../Footer/Footer.css';
import OrderTotal from '../Order/OrderTotal';
import '../Order/OrderTotal.css';

export default function Success({
  baslik,
  boyut,
  kalınlık,
  ekstra,
  isim,
  pizza,
  formData,
  colors,
}) {
  return (
    <main>
      <div className="body">
        <main className="success">
          <Header />
          <section className="text">
            <h1 style={{ color: '#FDC913', fontFamily: 'Satisfy' }}>
              lezzetin yolda
            </h1>
            <h1 data-cy="success">
              SİPARİŞİNİZ ALINDI <br />
              {isim} <hr style={{ border: '2px solid white' }} />
            </h1>
            <div className="order-info">
              <h2>{baslik}</h2>
              <h6>
                Boyut: <span style={{ fontWeight: 'bold' }}>{boyut}</span>
              </h6>
              <h6>
                Hamur: <span style={{ fontWeight: 'bold' }}>{kalınlık}</span>
              </h6>
              <h6>
                Ekstralar:{' '}
                <span style={{ fontWeight: 'bold' }}>{ekstra.join(', ')}</span>
              </h6>
            </div>
            <div className="order-total">
              <OrderTotal
                pizza={pizza}
                formData={formData}
                color1={colors.white}
                color2={colors.white}
                color3={colors.white}
              />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </main>
  );
}
