import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Header />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSection />
        <AchievementSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
