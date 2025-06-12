import DownloadBanner from "components/home/DownloadBanner";
import LearnMoreBanner from "components/home/LearnMoreBanner";
import Layout from "components/Layout";
import Footer from "components/Layout/Footer";
import MakeDifferent from "components/process/MakeDifferent";
import AgencyLeadership from "components/story/AgencyLeadership";
import HeaderBanner from "components/HeaderBanner";
import SyndicateBanner from "components/marketing/SyndicateBanner";
import StoryDescription from "components/marketing/StoryDescription";
import StatsSection from "components/marketing/StatsSection";
import Image from "next/image";
import Head from "next/head";

const marketing = () => {
  return (
    <>
      <Head>
        {/* <title>VentureCraft | Meet the Team</title> */}
        <title>Marketing | VentureCraft</title>
      </Head>
      <Layout>
        <HeaderBanner heading="Marketing" />
        <StoryDescription/>
        <StatsSection />
        <SyndicateBanner />        
        <Footer />
      </Layout>
    </>
  );
};

export default marketing;
