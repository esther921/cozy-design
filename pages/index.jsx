import HeadSection from "../components/sections/HeadSection";
import Navbar from "../components/layouts/Navbar";
import GetCozy from "../components/sections/GetCozy";
import Client from "../components/sections/Client";
import Footer from "../components/layouts/Footer";
import VideoSection from "../components/sections/VideoSection";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-full ">
        <Navbar />
        <HeadSection />
      </section>

      <section className=" h-full w-full">
        <GetCozy />
      </section>

      <section className="pt-16 overflow-hidden">
        <Client />
      </section>

      <section className="h-screen overflow-hidden">
        <VideoSection />
      </section>

      <section className="bg-text overflow-hidden">
        <Footer />
      </section>
    </>
  );
}
