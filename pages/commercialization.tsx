import DownloadBanner from "components/home/DownloadBanner";
import LearnMoreBanner from "components/home/LearnMoreBanner";
import Layout from "components/Layout";
import Footer from "components/Layout/Footer";
import MakeDifferent from "components/process/MakeDifferent";
import AgencyLeadership from "components/story/AgencyLeadership";
import HeaderBanner from "components/HeaderBanner";
import SyndicateBanner from "components/commercialization/SyndicateBanner";
import StoryDescription from "components/commercialization/StoryDescription";
import StatsSection from "components/commercialization/StatsSection";
import Image from "next/image";
import Head from "next/head";

const commercialization = () => {
  return (
    <>
      <Head>
        {/* <title>VentureCraft | Meet the Team</title> */}
        <title>Commercialization | VentureCraft</title>
      </Head>
      <Layout>
        <HeaderBanner heading="Commercialization" />
        <StoryDescription/>
        <StatsSection />
        <SyndicateBanner />        
        <Footer />
      </Layout>
    </>
  );
};

export default commercialization;
