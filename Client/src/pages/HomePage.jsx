import ActivitiesSection from "../components/sections/ActivitiesSection.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";
import GallerySection from "../components/sections/GallerySection.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import JoinSection from "../components/sections/JoinSection.jsx";
import ServicesSection from "../components/sections/ServicesSection.jsx";
import TeamSection from "../components/sections/TeamSection.jsx";
import AnnouncementBar from "../components/layout/AnnouncementBar.jsx";
import SiteFooter from "../components/layout/SiteFooter.jsx";
import SiteHeader from "../components/layout/SiteHeader.jsx";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <section className="values-strip" aria-label="Our shared values">
          <div className="values-strip__inner">
            <span>Built on shared purpose</span>
            <b>Community</b>
            <i />
            <b>Collaboration</b>
            <i />
            <b>Sustainable progress</b>
          </div>
        </section>
        <ActivitiesSection />
        <TeamSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
        <JoinSection />
      </main>
      <SiteFooter />
    </>
  );
}
