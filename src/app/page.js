import Footer from "@/components/common/Footer";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import LookFamiiliar from "@/components/LookFamiiliar";
import MeetPumpions from "@/components/MeetPumpions";
import OgPumpions from "@/components/OgPumpions";
import Pumpmap from "@/components/Pumpmap";
import SunsetClub from "@/components/SunsetClub";

export default function Home() {
  return (
    <>
    <Hero/>
    <MeetPumpions/>
    <LookFamiiliar/>
    <SunsetClub/>
    <Pumpmap/>
    <OgPumpions/>
    <Faq/>
    <Footer/>
    </>
  );
}
