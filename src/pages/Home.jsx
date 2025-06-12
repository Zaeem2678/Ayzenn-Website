import React, { Suspense } from "react";
import FadeInSection from "../components/wrapper/FadeInSection";

// Lazy-loaded components
const Header = React.lazy(() => import("../components/homepage/Header"));
const Services = React.lazy(() => import("../components/homepage/Services"));
const Facts = React.lazy(() => import("../components/homepage/Facts"));
const Projects = React.lazy(() =>
  import("../components/homepage/ProjectsSection")
);
const TeamsSection = React.lazy(() =>
  import("../components/homepage/TeamsSection")
);

export default function Home() {
  return (
    <Suspense
      fallback={
        <div style={{ textAlign: "center", padding: "2rem", color: "white" }}>
          Loading sections...
        </div>
      }
    >
      <FadeInSection delay={0.1}>
        <Header />
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <Services />
      </FadeInSection>
      <FadeInSection delay={0.3}>
        <Facts />
      </FadeInSection>
      <FadeInSection delay={0.4}>
        <Projects />
      </FadeInSection>
      <FadeInSection delay={0.5}>
        <TeamsSection />
      </FadeInSection>
    </Suspense>
  );
}
