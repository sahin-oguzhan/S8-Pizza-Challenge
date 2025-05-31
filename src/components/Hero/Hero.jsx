import { Link } from 'react-router-dom';
export default function Hero() {
  return (
    <div className="banner">
      <div className="banner-text">
        <div className="logo">
          <img src="/images/iteration-1-images/logo.svg" alt="" />
        </div>
        <div className="slogan">
          <div className="slogan-small">fırsatı kaçırma</div>
          <div className="slogan-main">
            <h1>
              KOD ACIKTIRIR <br /> PİZZA DOYURUR
            </h1>
          </div>
        </div>
        <Link to="/order" exact className="button">
          ACIKTIM
        </Link>
      </div>
    </div>
  );
}
