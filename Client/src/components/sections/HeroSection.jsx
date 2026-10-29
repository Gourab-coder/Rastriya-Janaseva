import logo from "../../../assets/logo.jpg";
import ArrowIcon from "../common/ArrowIcon.jsx";

export default function HeroSection() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero__copy">
        <p className="eyebrow"><span /> A community for possibility</p>
        <h1>
          Connecting people.
          <br />
          Creating <em>opportunity.</em>
        </h1>
        <p className="hero__intro">
          Rastriya Janaseva brings people and organisations together to
          encourage collaboration, share knowledge and support community
          progress.
        </p>
        <div className="hero__actions">
          <a className="button button--saffron" href="#join">
            Be part of it <ArrowIcon />
          </a>
          <a className="text-link" href="#activities">
            Explore our activities <ArrowIcon />
          </a>
        </div>
        <div className="hero__footnote">
          <span className="mini-avatars" aria-hidden="true">
            <i>R</i><i>J</i><i>+</i>
          </span>
          <span>Progress starts when we come together.</span>
        </div>
      </div>
      <div className="hero-art" aria-label="Rastriya Janaseva emblem">
        <div className="hero-art__halo" />
        <div className="hero-art__orbit hero-art__orbit--one" />
        <div className="hero-art__orbit hero-art__orbit--two" />
        <div className="hero-art__sun">
          <span className="hero-art__sun-inner" />
        </div>
        <div className="hero-art__logo">
          <img src={logo} alt="Rastriya Janaseva emblem" />
        </div>
        <div className="hero-art__caption">
          <span>ONE SHARED PURPOSE</span>
          <strong>Unity in action.</strong>
        </div>
        <span className="hero-art__spark hero-art__spark--one">✳</span>
        <span className="hero-art__spark hero-art__spark--two">✳</span>
      </div>
      <a className="scroll-cue" href="#activities">
        <span>Scroll to discover</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
