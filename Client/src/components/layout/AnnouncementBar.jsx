import ArrowIcon from "../common/ArrowIcon.jsx";

export default function AnnouncementBar() {
  return (
    <div className="announcement">
      <span className="announcement__dot" />
      Working together for shared progress
      <a href="#join">
        Find your place <ArrowIcon diagonal />
      </a>
    </div>
  );
}
