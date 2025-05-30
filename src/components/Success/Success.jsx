export default function Success({ baslik }) {
  return (
    <body>
      <div className="body">
        <div className="success">
          <img src="/images/iteration-1-images/logo.svg" alt="" />
          <div className="text">
            <h1 style={{ color: '#FDC913', fontFamily: 'Satisfy' }}>
              lezzetin yolda
            </h1>
            <h1 data-cy="success">
              SİPARİŞİNİZ ALINDI {baslik}{' '}
              <hr style={{ border: '2px solid white' }} />
            </h1>
          </div>
        </div>
      </div>
      <footer>
        <div className="main-top">
          <div className="left-side">
            <img
              src="images/iteration-2-images/footer/logo-footer.svg"
              alt=""
            />
            <ul>
              <li className="text1">
                <img
                  src="images/iteration-2-images/footer/icons/icon-1.png"
                  alt=""
                />
                341 Londonderry Road, İstanbul Türkiye
              </li>
              <li>
                <img
                  src="images/iteration-2-images/footer/icons/icon-2.png"
                  alt=""
                />
                aciktim@teknolojikyemekler.com
              </li>
              <li>
                <img
                  src="images/iteration-2-images/footer/icons/icon-3.png"
                  alt=""
                />
                +90 216 123 45 67
              </li>
            </ul>
          </div>
          <div className="mid">
            <p>Hot Menu</p>
            <ul>
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </div>
          <div className="right-side">
            <div className="right-text">
              <p>Instagram</p>
            </div>
            <div className="insta-img">
              <img
                src="images/iteration-2-images/footer/insta/li-0.png"
                alt=""
              />
              <img
                src="images/iteration-2-images/footer/insta/li-1.png"
                alt=""
              />
              <img
                src="images/iteration-2-images/footer/insta/li-2.png"
                alt=""
              />
              <img
                src="images/iteration-2-images/footer/insta/li-3.png"
                alt=""
              />
              <img
                src="images/iteration-2-images/footer/insta/li-4.png"
                alt=""
              />
              <img
                src="images/iteration-2-images/footer/insta/li-5.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="main-bottom">
          <p>© 2023 Teknolojik Yemekler.</p>
        </div>
      </footer>
    </body>
  );
}
