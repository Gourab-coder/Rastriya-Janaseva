import { waysToJoin } from "../../data/siteContent.js";
import InquiryForm from "../forms/InquiryForm.jsx";

export default function JoinSection() {
  return (
    <section className="join-section" id="join">
      <div className="join-banner">
        <div className="join-banner__ornament" aria-hidden="true">✳</div>
        <div className="join-banner__copy">
          <p className="eyebrow"><span /> A place for you</p>
          <h2>Progress is a team effort.<br /><em>Come be part of it.</em></h2>
          <p>
            Volunteer, share your expertise or explore a partnership. There are
            many ways to contribute to shared progress.
          </p>
          <ul>
            {waysToJoin.map((item) => (
              <li key={item}><span>✓</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="join-form-card">
          <span className="eyebrow">JOIN THE CONVERSATION</span>
          <h3>Let’s find your way in.</h3>
          <p>Tell us what you care about and how you’d like to contribute.</p>
          <InquiryForm kind="join" />
        </div>
      </div>
    </section>
  );
}
