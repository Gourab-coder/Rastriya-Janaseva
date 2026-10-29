import InquiryForm from "../forms/InquiryForm.jsx";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-layout">
        <div className="contact-copy">
          <p className="eyebrow eyebrow--light">
            <span /> Let’s start a conversation
          </p>
          <h2>Good things<br />begin with <em>hello.</em></h2>
          <p>
            Have a question, partnership proposal or request for information?
            Tell us how you would like to connect.
          </p>
          <div className="contact-detail">
            <span className="contact-detail__icon">✉</span>
            <span>
              <small>Official contact details</small>
              <strong>To be confirmed</strong>
            </span>
          </div>
          {/* Replace this placeholder only with verified, official contact information. */}
          <p className="contact-note">
            Official email, phone, office address and social links will be added
            once verified.
          </p>
        </div>
        <div className="form-card">
          <div className="form-card__heading">
            <div>
              <span className="eyebrow">CONTACT RASTRIYA JANASEVA</span>
              <h3>Send us a note</h3>
            </div>
            <span className="form-card__symbol">↗</span>
          </div>
          <InquiryForm kind="contact" />
        </div>
      </div>
    </section>
  );
}
