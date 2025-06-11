import Header from "../components/homepage/Header";
import Services from "../components/homepage/Services";
import Facts from "../components/homepage/Facts";
import Projects from "../components/homepage/ProjectsSection";
import TeamsSection from "../components/homepage/TeamsSection";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Facts />
      <Projects />
      <TeamsSection />
    </>
  );
}
