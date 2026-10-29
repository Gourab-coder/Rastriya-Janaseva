export default function TeamSection() {
  return (
    <section className="team-section" id="team">
      <div className="team-section__pattern" aria-hidden="true" />
      <div className="section-wrap team-layout">
        <div className="team-visual">
          <div className="team-visual__frame">
            <div className="team-visual__sun" />
            <div className="team-visual__rings" />
            <div className="team-visual__message">
              <span>Better, together</span>
              <strong>People make<br />the difference.</strong>
            </div>
            <div className="team-visual__seal">RJ</div>
          </div>
          <span className="team-visual__caption">
            A shared commitment to service
          </span>
        </div>
        <div className="team-copy">
          <p className="eyebrow eyebrow--light">
            <span /> The people behind the purpose
          </p>
          <h2>Good work is<br />always <em>shared.</em></h2>
          <p>
            Our team brings together people with a shared commitment to
            service, coordination and partnership. We value transparent
            collaboration and work with stakeholders to turn ideas into
            practical initiatives.
          </p>
          <div className="team-principles">
            <span><i>01</i> Listen with intention</span>
            <span><i>02</i> Work across boundaries</span>
            <span><i>03</i> Turn ideas into action</span>
          </div>
          {/* Add staff profiles only after names, roles and image permissions are confirmed. */}
          <p className="team-note">
            Team profiles will be shared here once names, roles and
            photographs are confirmed and approved.
          </p>
        </div>
      </div>
    </section>
  );
}
