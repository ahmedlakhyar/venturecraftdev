import DownloadBanner from "components/home/DownloadBanner";
import LearnMoreBanner from "components/home/LearnMoreBanner";
import Layout from "components/Layout";
import Footer from "components/Layout/Footer";
import MakeDifferent from "components/process/MakeDifferent";
import AgencyLeadership from "components/story/AgencyLeadership";
import HeaderBanner from "components/HeaderBanner";
import SyndicateBanner from "components/fundraising/SyndicateBanner";
import StoryDescription from "components/fundraising/StoryDescription";
import Image from "next/image";
import Head from "next/head";

const fundraising = () => {
  return (
    <>
      <Head>
        {/* <title>VentureCraft | Meet the Team</title> */}
        <title>Fundraising | VentureCraft</title>
      </Head>
      <Layout>
        <HeaderBanner heading="Fundraising" />
        <StoryDescription/>
        <SyndicateBanner />
        
        <Footer />
      </Layout>
    </>
  );
};

export default fundraising;
