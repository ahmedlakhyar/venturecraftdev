import Layout from "components/Layout";
import ProcessStory from "components/process/ProcessStory";
import MakeDifferent from "components/process/MakeDifferent";
import Footer from "components/Layout/Footer";
import DownloadBanner from "components/home/DownloadBanner";
import { PrimaryButton } from "components/Button";
import Image from "next/image";
import HeaderBanner from "components/HeaderBanner";
import { animL, animR } from "public/Global";
import styled from "styled-components";
import { useState } from "react";
import ChatPopup from "components/ChatPopup";
import Head from "next/head";

const Items = [
  {
    image: "/images/process/network.svg",
    title: "Our Network",
    subTitle: "We leverage our team's 20+ years of relationships in the innovation ecosystem for our clients.",
    aosDelay: "100",
  },
  {
    image: "/images/process/empathy.svg",
    title: "Our Empathy",
    subTitle: "We enable our clients to see through the eyes of their audience, understand what motivates them, anticipate their needs, and defuse their skepticism. ",
    aosDelay: "300",
  },
  {
    image: "/images/process/accuracy.svg",
    title: "Our Accuracy",
    subTitle: "We simplify data, but stay true to the science of your innovation. ",
    aosDelay: "500",
  },
  {
    image: "/images/process/process.svg",
    title: "Our Process",
    subTitle: "Our process has been refined through the hundreds of stories it has crafted and millions of dollars it has raised. ",
    aosDelay: "700",
  },
];

const process = () => {
  const [chatPopup, setChatPopup] = useState(false);

  const openChatPopup = () => {
    setChatPopup(true);
  };

  return (
    <>
      <Head>
        {/* <title>VentureCraft | Our Industry-Leading Storytelling Process</title> */}
        <title>Our Industry-Leading Investor Storytelling Process | VentureCraft</title>
      </Head>
      <Layout>
        <HeaderBanner
          heading={
            <>
              Our Process is Your Story's <br /> Best Chance for Success.
            </>
          }
        />
        <ProcessStory />
        <MakeDifferent Items={Items} heading="What Makes Us Different" />
        <ProcessBannner className="flex flex-col md:gap-10 items-center md:mt-32 mt-10 lg:mb-20 mb-10 desktop_container">
          <h2 className="h2 text-lightBlack md:mt-0 mt-12">Let's Create Your Winning Story</h2>
          <PrimaryButton
            openChatPopup={openChatPopup}
            text={
              <>
                <span className="animL galaxy_hide"> 👉 </span> Click Here to Contact Us Now <span className="animR galaxy_hide"> 👈 </span>
              </>
            }
            fontSize="text-[2rem]"
          />
        </ProcessBannner>
        <DownloadBanner
          bannerText={
            <>
              <span className="lg:pr-12 md:pr-8 pr-10 galaxy_pr">
                Get our <span className="text-yellowBase ">FREE</span> Pitch Deck Guide
              </span>
              <span className="fire_img aspect-square ml-1 lg:w-20 w-16 inline-block absolute right-0 md:top-0 -top-2 galaxy_hide">
                <Image src="/images/fire-3.gif" layout="fill" />
              </span>
            </>
          }
        />
        <Footer />
        <ChatPopup open={chatPopup} onClose={() => setChatPopup(false)} />
      </Layout>
    </>
  );
};

export default process;

const ProcessBannner = styled.section`
  .animL {
    animation: ${animL} 0.4s infinite alternate;
    margin-right: 4px;
  }
  .animR {
    animation: ${animR} 0.4s infinite alternate;
    margin-left: 4px;
  }
`;
