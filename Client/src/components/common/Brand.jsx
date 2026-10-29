import logo from "../../../assets/logo.jpg";

export default function Brand({ footer = false }) {
  return (
    <a
      className={`brand${footer ? " brand--footer" : ""}`}
      href="#home"
      aria-label="Rastriya Janaseva home"
    >
      <img src={logo} alt="" />
      <span className="brand__name">
        <strong>Rastriya Janaseva</strong>
        <small>Unity · Faith · Sacrifice</small>
      </span>
    </a>
  );
}
