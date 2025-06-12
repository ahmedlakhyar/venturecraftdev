import DownloadBanner from "components/home/DownloadBanner";
import LearnMoreBanner from "components/home/LearnMoreBanner";
import Layout from "components/Layout";
import Footer from "components/Layout/Footer";
import StoryDescription from "components/story/StoryDescription";
import MakeDifferent from "components/process/MakeDifferent";
import AgencyLeadership from "components/story/AgencyLeadership";
import HeaderBanner from "components/HeaderBanner";
import SyndicateBanner from "components/story/SyndicateBanner";
import Image from "next/image";
import Head from "next/head";

const Items = [
  {
    image: "/images/story/creativity.svg",
    title: "Creativity",
    subTitle: "Helping your ideas stand out requires an innovative mindset. We are experts at showcasing ideas in new and novel ways.",
    // ratio: "0.66",
    aosDelay: "100",
  },
  {
    image: "/images/story/passion.svg",
    title: "Passion",
    subTitle: "At our core, we are educators. We love nothing more than helping people learn by making information more accessible and inclusive.",
    // ratio: "0.84",
    aosDelay: "300",
  },
  {
    image: "/images/story/versatility.svg",
    title: "Versatility",
    subTitle: "Few organizations have the breadth of experience as ours to tackle any project in any industry, no matter how technical.",
    // ratio: "1",
    aosDelay: "500",
  },
  {
    image: "/images/story/collaboration.svg",
    title: "Collaboration",
    subTitle: "We seamlessly engage with all decision makers within an organization to distill their voice into a single, cohesive story.",
    // ratio: "1",
    aosDelay: "700",
  },
];

const story = () => {
  return (
    <>
      <Head>
        {/* <title>VentureCraft | Meet the Team</title> */}
        <title>Meet the Team | VentureCraft</title>
      </Head>
      <Layout>
        <HeaderBanner heading="Story" />
        <StoryDescription/>
        <AgencyLeadership />
        <SyndicateBanner />
        <MakeDifferent Items={Items} heading="What Defines Us" />
        <LearnMoreBanner />
        <DownloadBanner
          bannerText={
            <>
              <span className="lg:pr-12 md:pr-8 pr-10 galaxy_pr">
                Get our <span className="text-yellowBase ">FREE </span> Pitch Deck Guide
              </span>
              <span className="img_div aspect-square ml-1 lg:w-20 w-16 inline-block absolute right-0 md:top-0 -top-2 galaxy_hide">
                <Image src="/images/fire-3.gif" layout="fill" />
              </span>
            </>
          }
        />
        <Footer />
      </Layout>
    </>
  );
};

export default story;
