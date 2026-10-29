import { services } from "../../data/siteContent.js";
import SectionHeading from "../common/SectionHeading.jsx";

export default function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="section-wrap">
        <SectionHeading
          variant="center"
          eyebrow="A platform for collaboration"
          title={<>Ways we can move<br /><em>forward together.</em></>}
          description="We aim to make the right connections and create space for practical collaboration across communities and sectors."
        />
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-card__icon" aria-hidden="true">
                {service.icon}
              </span>
              <span className="service-card__number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
        {/* These are areas of interest, not a guarantee of available services. */}
        <p className="content-note">
          These are proposed areas of support. Specific services depend on
          confirmed organisational programmes and capacity.
        </p>
      </div>
    </section>
  );
}
