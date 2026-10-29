import { activityAreas } from "../../data/siteContent.js";
import SectionHeading from "../common/SectionHeading.jsx";

export default function ActivitiesSection() {
  return (
    <section className="section section--activities" id="activities">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Where ideas meet action"
          title={<>Many voices.<br /><em>One shared future.</em></>}
          description="Meaningful progress grows through participation, shared responsibility and practical solutions. Here are the areas we hope to bring people together around."
        />
        <div className="activity-grid">
          {activityAreas.map((activity) => (
            <article className="activity-card" key={activity.number}>
              <div className="activity-card__top">
                <span className="activity-card__number">{activity.number}</span>
                <span className="activity-card__icon" aria-hidden="true">
                  {activity.icon}
                </span>
              </div>
              <h3>{activity.title}</h3>
              <p>{activity.text}</p>
              <span className="activity-card__line" />
            </article>
          ))}
        </div>
        <div className="story-note">
          <span className="story-note__mark">“</span>
          <div>
            <p>
              Every meaningful story starts with people willing to listen,
              connect and take the next step together.
            </p>
            <small>Our approach to community progress</small>
          </div>
          <span className="story-note__badge">People first <i>✳</i></span>
        </div>
        {/* Publish reports and testimonials only after the organisation verifies them. */}
        <p className="content-note">
          Activity reports, testimonials and outcomes will be added after they
          have been verified and approved for publication.
        </p>
      </div>
    </section>
  );
}
