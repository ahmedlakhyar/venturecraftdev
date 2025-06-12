import Brands from "components/home/Brands";
import DownloadBanner from "components/home/DownloadBanner";
import OurClients from "components/home/OurClients";
import OurMission from "components/home/OurMission";
import StatsSection from "components/home/StatsSection";
import Layout from "components/Layout";
import Footer from "components/Layout/Footer";
import Head from "next/head";
// import Head from "next/head";
import HeroBanner from "../components/home/HeroBanner";
import WhyTechTrustUs from "components/home/WhyTechTrustUs";

export default function Home() {
  return (
    <>
      <Head>
        {/* <title>VentureCraft | Pitch Deck & Commercialization Experts</title> */}
        <title>Pitch Deck & Commercialization Experts | VentureCraft</title>
      </Head>
      <Layout>
        <HeroBanner />
        <Brands />
        <StatsSection />
        <OurMission />
        <WhyTechTrustUs />
        <OurClients />
        <DownloadBanner
          bannerText={
            <>
              <span className="animL galaxy_hide"> 👉 </span> Get&nbsp;our
              <span className="text-yellowBase">FREE</span> Pitch&nbsp;Deck&nbsp;Guide
              <span className="animR galaxy_hide"> 👈 </span>
            </>
          }
        />
        <Footer />
      </Layout>
    </>
  );
}
