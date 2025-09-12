import GuideSlider from "@/components/ui/publice/GuideSlider";
import HomeSlider from "@/components/ui/publice/HomeSlider";
import Location from "@/components/ui/publice/Location";
import TravelStatsSection from "@/components/ui/publice/TravelStatsSection";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <Location />
      <TravelStatsSection />
      <GuideSlider />
    </div>
  );
};

export default Home;
