import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.allPage}>
      <div className={styles.menu}>
        <nav className={styles.icons}>
          <a href="" className={styles.iconLink}>
            <img
              src="images/iteration-2-images/icons/1.svg"
              alt=""
              className={styles.iconImg}
            />
            YENİ! Kore
          </a>
          <a href="" className={styles.iconLink}>
            <img
              src="images/iteration-2-images/icons/2.svg"
              alt=""
              className={styles.iconImg}
            />
            Pizza
          </a>
          <a href="" className={styles.iconLink}>
            <img
              src="images/iteration-2-images/icons/3.svg"
              alt=""
              className={styles.iconImg}
            />
            Burger
          </a>
          <a href="" className={styles.iconLink}>
            <img
              src="images/iteration-2-images/icons/4.svg"
              alt=""
              className={styles.iconImg}
            />
            Kızartmalar
          </a>
          <a href="" className={styles.iconLink}>
            <img
              src="images/iteration-2-images/icons/5.svg"
              alt=""
              className={styles.iconImg}
            />
            Fast Food
          </a>
          <a href="" className={styles.iconLink}>
            <img
              src="images/iteration-2-images/icons/6.svg"
              alt=""
              className={styles.iconImg}
            />
            Gazlı İçecek
          </a>
        </nav>
      </div>

      <section className={styles.card}>
        <div className={styles.leftCard}>
          <img
            className={styles.card1}
            src="images/iteration-2-images/cta/kart-1.png"
            alt=""
          />
          <div className={styles.leftCardText}>
            <p>Özel Lezzetus</p>
            <Link to="/order" style={{ textDecoration: 'none' }}>
              <button className={styles.orderButton}>SİPARİŞ VER</button>
            </Link>
          </div>
        </div>
        <div className={styles.rightCard}>
          <img
            className={styles.card2}
            src="images/iteration-2-images/cta/kart-2.png"
            alt=""
          />
          <div className={styles.rightCardTop}>
            <p>Hackathlon Burger Menü</p>
            <Link to="/order" style={{ textDecoration: 'none' }}>
              <button className={styles.orderButton}>SİPARİŞ VER</button>
            </Link>
          </div>
          <img
            className={styles.card3}
            src="images/iteration-2-images/cta/kart-3.png"
            alt=""
          />
          <div className={styles.rightCardBot}>
            <p>
              <span className={styles.highlight}>Çooook</span> hızlı npm gibi
              kurye
            </p>
            <Link to="/order" style={{ textDecoration: 'none' }}>
              <button className={styles.orderButton}>SİPARİŞ VER</button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.menuSlogan}>
        <div className={styles.slogan2}>
          <p>
            <span>en çok paketlenen menüler</span>
          </p>
          <div className={styles.slogan2Bot}>
            Acıktıran Kodlara Doyuran Lezzetler
          </div>
        </div>
      </section>

      <section className={styles.pizzaMenu}>
        <nav className={styles.pizzaNav}>
          <a href="" className={styles.pizzaLink}>
            <img
              src="images/iteration-2-images/icons/1.svg"
              alt=""
              className={styles.pizzaIcon}
            />
            Ramen
          </a>
          <a className={`${styles.pizzaLink} ${styles.activePizza}`}>
            <img
              src="images/iteration-2-images/icons/2.svg"
              alt=""
              className={styles.pizzaIcon}
            />
            Pizza
          </a>
          <a href="" className={styles.pizzaLink}>
            <img
              src="images/iteration-2-images/icons/3.svg"
              alt=""
              className={styles.pizzaIcon}
            />
            Burger
          </a>
          <a href="" className={styles.pizzaLink}>
            <img
              src="images/iteration-2-images/icons/4.svg"
              alt=""
              className={styles.pizzaIcon}
            />
            French Fries
          </a>
          <a href="" className={styles.pizzaLink}>
            <img
              src="images/iteration-2-images/icons/5.svg"
              alt=""
              className={styles.pizzaIcon}
            />
            Fast Food
          </a>
          <a href="" className={styles.pizzaLink}>
            <img
              src="images/iteration-2-images/icons/6.svg"
              alt=""
              className={styles.pizzaIcon}
            />
            Soft Drinks
          </a>
        </nav>

        <div className={styles.pizzaCard}>
          <div className={styles.pizzaCard1}>
            <img
              src="images/iteration-2-images/pictures/food-1.png"
              alt=""
              className={styles.pizzaImage}
            />
            <div className={styles.pizzaText}>
              <p>Terminal Pizza</p>
            </div>
            <div className={styles.price}>
              <p>4.9 (200)</p>
              <p>
                <span>60₺</span>
              </p>
            </div>
          </div>
          <div className={styles.pizzaCard2}>
            <img
              src="images/iteration-2-images/pictures/food-2.png"
              alt=""
              className={styles.pizzaImage}
            />
            <div className={styles.pizzaText}>
              <p>Position Absolute Acı Pizza</p>
            </div>
            <div className={styles.price}>
              <p>4.9 (200)</p>
              <p>
                <span>60₺</span>
              </p>
            </div>
          </div>
          <div className={styles.pizzaCard3}>
            <img
              src="images/iteration-2-images/pictures/food-3.png"
              alt=""
              className={styles.pizzaImage}
            />
            <div className={styles.pizzaText}>
              <p>useEffect Tavuklu Burger</p>
            </div>
            <div className={styles.price}>
              <p>4.9 (200)</p>
              <p>
                <span>60₺</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
