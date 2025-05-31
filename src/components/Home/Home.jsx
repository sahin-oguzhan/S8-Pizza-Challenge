import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.allPage}>
      <div className={styles.menu}>
        <nav className={styles.navIcons}>
          <a href="" className={styles.navLink}>
            <img
              src="images/iteration-2-images/icons/1.svg"
              alt=""
              className={styles.navIcon}
            />
            YENİ! Kore
          </a>
          <a href="" className={styles.navLink}>
            <img
              src="images/iteration-2-images/icons/2.svg"
              alt=""
              className={styles.navIcon}
            />
            Pizza
          </a>
          <a href="" className={styles.navLink}>
            <img
              src="images/iteration-2-images/icons/3.svg"
              alt=""
              className={styles.navIcon}
            />
            Burger
          </a>
          <a href="" className={styles.navLink}>
            <img
              src="images/iteration-2-images/icons/4.svg"
              alt=""
              className={styles.navIcon}
            />
            Kızartmalar
          </a>
          <a href="" className={styles.navLink}>
            <img
              src="images/iteration-2-images/icons/5.svg"
              alt=""
              className={styles.navIcon}
            />
            Fast Food
          </a>
          <a href="" className={styles.navLink}>
            <img
              src="images/iteration-2-images/icons/6.svg"
              alt=""
              className={styles.navIcon}
            />
            Gazlı İçecek
          </a>
        </nav>
      </div>
      <section className={styles.cardContainer}>
        <div className={styles.leftCard}>
          <img
            className={styles.cardImage}
            src="images/iteration-2-images/cta/kart-1.png"
            alt=""
          />
          <div className={styles.leftCardText}>
            <p>Özel Lezzetus</p>
            <button className={styles.cardButton}>SİPARİŞ VER</button>
          </div>
        </div>
        <div className={styles.rightCard}>
          <img
            className={styles.cardImage}
            src="images/iteration-2-images/cta/kart-2.png"
            alt=""
          />
          <div className={styles.rightCardTop}>
            <p>Hackathlon Burger Menü</p>
            <button className={styles.cardButton}>SİPARİŞ VER</button>
          </div>
          <img
            className={styles.cardImage}
            src="images/iteration-2-images/cta/kart-3.png"
            alt=""
          />
          <div className={styles.rightCardBottom}>
            <p>
              <span className={styles.highlightText}>Çooook</span> hızlı npm
              gibi kurye
            </p>
            <button className={styles.cardButton}>SİPARİŞ VER</button>
          </div>
        </div>
      </section>
      <section className={styles.menuSlogan}>
        <div className={styles.sloganText}>
          <p>
            <span>en çok paketlenen menüler</span>
          </p>
          <div className={styles.sloganText}>
            Acıktıran Kodlara Doyuran Lezzetler
          </div>
        </div>
      </section>
      <section className={styles.pizzaMenu}>
        <nav className={styles.pizzaNav}>
          <a href="" className={styles.pizzaNavLink}>
            <img
              src="images/iteration-2-images/icons/1.svg"
              alt=""
              className={styles.pizzaNavIcon}
            />
            Ramen
          </a>
          <a className={`${styles.pizzaNavLink} ${styles.activePizzaLink}`}>
            <img
              src="images/iteration-2-images/icons/2.svg"
              alt=""
              className={styles.pizzaNavIcon}
            />
            Pizza
          </a>
          <a href="" className={styles.pizzaNavLink}>
            <img
              src="images/iteration-2-images/icons/3.svg"
              alt=""
              className={styles.pizzaNavIcon}
            />
            Burger
          </a>
          <a href="" className={styles.pizzaNavLink}>
            <img
              src="images/iteration-2-images/icons/4.svg"
              alt=""
              className={styles.pizzaNavIcon}
            />
            French Fries
          </a>
          <a href="" className={styles.pizzaNavLink}>
            <img
              src="images/iteration-2-images/icons/5.svg"
              alt=""
              className={styles.pizzaNavIcon}
            />
            Fast Food
          </a>
          <a href="" className={styles.pizzaNavLink}>
            <img
              src="images/iteration-2-images/icons/6.svg"
              alt=""
              className={styles.pizzaNavIcon}
            />
            Soft Drinks
          </a>
        </nav>
        <div className={styles.pizzaCardContainer}>
          <div className={styles.pizzaItem}>
            <img
              src="images/iteration-2-images/pictures/food-1.png"
              alt=""
              className={styles.pizzaItemImage}
            />
            <div className={styles.pizzaItemText}>
              <p>Terminal Pizza</p>
            </div>
            <div className={styles.priceContainer}>
              <p>4.9 (200)</p>
              <p>
                <span>60₺</span>
              </p>
            </div>
          </div>
          <div className={styles.pizzaItem}>
            <img
              src="images/iteration-2-images/pictures/food-2.png"
              alt=""
              className={styles.pizzaItemImage}
            />
            <div className={styles.pizzaItemText}>
              <p>Position Absolute Acı Pizza</p>
            </div>
            <div className={styles.priceContainer}>
              <p>4.9 (200)</p>
              <p>
                <span>60₺</span>
              </p>
            </div>
          </div>
          <div className={styles.pizzaItem}>
            <img
              src="images/iteration-2-images/pictures/food-3.png"
              alt=""
              className={styles.pizzaItemImage}
            />
            <div className={styles.pizzaItemText}>
              <p>useEffect Tavuklu Burger</p>
            </div>
            <div className={styles.priceContainer}>
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
