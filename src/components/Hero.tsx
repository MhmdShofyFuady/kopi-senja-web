import heroBg from '../assets/hero-bg.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero">
      <div className="hero__bg" aria-hidden="true">
        <img src={heroBg} alt="" loading="eager" />
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <h1 className="hero__title">
          A Cup of <span className="hero__title-accent">Warmth</span>,<br />
          Brewed for You
        </h1>
        <p className="hero__subtitle">
          Hand-crafted coffee in a place that feels like home.
          Slow down, sip, and savor the golden hour.
        </p>
        <a href="#menu" className="hero__cta" id="hero-cta">
          View Menu
        </a>
      </div>
    </section>
  );
}
