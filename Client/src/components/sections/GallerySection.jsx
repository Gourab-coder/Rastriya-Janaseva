export default function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="section-wrap gallery-layout">
        <div className="gallery-copy">
          <p className="eyebrow"><span /> Moments that matter</p>
          <h2>Stories are best<br />told <em>together.</em></h2>
          <p>
            A glimpse into the people, partnerships and ideas shaping a more
            connected future.
          </p>
          <div className="gallery-tags" aria-label="Gallery categories">
            <span>Community</span>
            <span>Partnerships</span>
            <span>Culture</span>
            <span>Sustainability</span>
          </div>
        </div>
        <div className="gallery-empty">
          <span className="gallery-empty__icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <rect x="7" y="9" width="34" height="30" rx="4" />
              <circle cx="18" cy="19" r="3" />
              <path d="m9 33 10-9 7 6 5-4 8 7" />
            </svg>
          </span>
          <strong>Good stories deserve the real thing.</strong>
          <p>
            Approved photographs and verified event highlights will appear
            here. We don’t use stock imagery to represent our work.
          </p>
          <span className="gallery-empty__label">Photo stories coming soon</span>
        </div>
      </div>
    </section>
  );
}
