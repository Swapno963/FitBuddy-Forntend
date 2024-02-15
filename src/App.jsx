import ClassShedule from "./Components/ClassShedule";
import ContactUs from "./Components/ContactUs";
import HeroSectioin from "./Components/HeroSectioin";
import NewsLetter from "./Components/NewsLetter";
// import NotFound from "./Components/NotFound";
import ProgramContainer from "./Components/ProgramContainer";
// import TopBanner from "./Components/TopBanner";
import Trainer from "./Components/Trainer";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Pricing from "./Pricing";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSectioin />

      <Trainer />
      <ClassShedule />
      <ProgramContainer />

      {/* <TopBanner /> */}

      <Pricing />
      {/* <DetailPricing/> */}
      <ContactUs />
      <NewsLetter />

      {/* <NotFound /> */}
      <Footer />
    </div>
  );
}
