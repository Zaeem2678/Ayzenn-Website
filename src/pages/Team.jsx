import TeamsSection from "../components/homepage/TeamsSection";
import Pagenavigation from "../components/pagenavigation/pagenavigation";
import { Box } from "@mui/material";
export default function Team() {
  return (
    <>
      <Pagenavigation title={"Our Team"} subheading={"Our Team"} />

      <TeamsSection />
    </>
  );
}
