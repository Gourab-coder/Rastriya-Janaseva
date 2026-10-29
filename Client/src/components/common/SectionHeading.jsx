export default function SectionHeading({
  eyebrow,
  title,
  description,
  variant = "split",
}) {
  return (
    <div className={`section-heading section-heading--${variant}`}>
      <div>
        <p className="eyebrow">
          <span /> {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-lead">{description}</p>}
    </div>
  );
}
