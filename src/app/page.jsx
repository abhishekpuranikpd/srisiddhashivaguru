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
import Link from "next/link";
import PublicationsPage from "./(routes)/components/bookslist";
import PageSeva from "./(routes)/components/seva-events";
import AboutAppaji from "./(routes)/components/aboutappaji";

export default function Home() {
  return (
    <>
      <HomeClient />{" "}
      <section id="about">
        <HistorySection />
        <AboutAppaji/>
      </section>
      <section id="seva">
        <PageSeva />
      </section>
      <section id="publication">
        <PublicationsPage />
      </section>
      <section id="gallery">
        <PhotoGallery />
      </section>
      <AnnacharaSection />
      <HomeBlog />
    </>
  );
}
