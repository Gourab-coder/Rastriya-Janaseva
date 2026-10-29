import { useState } from "react";
import ArrowIcon from "../common/ArrowIcon.jsx";

export default function InquiryForm({ kind }) {
  const [submitted, setSubmitted] = useState(false);
  const isJoin = kind === "join";

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full name
          <input name="name" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </label>
        <label>
          Phone <span className="optional">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+91" />
        </label>
        {isJoin ? (
          <label>
            Area of interest
            <select name="interest" defaultValue="" required>
              <option value="" disabled>
                Choose an area
              </option>
              <option>Volunteering</option>
              <option>Skills and expertise</option>
              <option>Community partnership</option>
              <option>Institutional partnership</option>
              <option>Other</option>
            </select>
          </label>
        ) : (
          <label>
            Organisation <span className="optional">(optional)</span>
            <input name="organisation" placeholder="Organisation name" />
          </label>
        )}
      </div>
      {isJoin && (
        <label>
          Skills or availability <span className="optional">(optional)</span>
          <input name="skills" placeholder="Tell us a little more" />
        </label>
      )}
      <label>
        {isJoin ? "Your message" : "How can we help?"}
        <textarea name="message" rows="4" placeholder="Write your message..." required />
      </label>
      <label className="consent">
        <input type="checkbox" required />
        <span>I agree to be contacted about this enquiry.</span>
      </label>
      <div className="form-submit-row">
        <button className="button button--dark" type="submit">
          {isJoin ? "Send your interest" : "Send an enquiry"} <ArrowIcon />
        </button>
        <span className="form-note">This preview form is not connected to an inbox.</span>
      </div>
      {submitted && (
        <p className="form-status" role="status">
          Thanks for reaching out. This website preview does not deliver messages
          yet; please configure an official contact inbox before publishing.
        </p>
      )}
    </form>
  );
}
