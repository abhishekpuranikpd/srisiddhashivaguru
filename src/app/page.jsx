import Image from "next/image";
import HomeClient from "./(routes)/components/home";
import Footer from "./(routes)/components/footer";
import GurukulFoundation from "./(routes)/components/foundation";
import HistorySection from "./(routes)/components/history";
import PhotoGallery from "./(routes)/components/gallery";
import AnnacharaSection from "./(routes)/components/events";
import VisionSection from "./(routes)/components/visionstatement";
import HomeBlog from "./blog/homeblog";
import JoinUsForm from "./(routes)/components/join-us";
import ContactUsForm from "./(routes)/components/contact-us";

export default function Home() {
  return (
    <>
      <HomeClient /> <HistorySection />
      <VisionSection />
      <GurukulFoundation />
      <PhotoGallery />
      <AnnacharaSection />
      <HomeBlog />
    </>
  );
}
