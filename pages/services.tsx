import { PrimaryButton } from "components/Button";
import HeaderBanner from "components/HeaderBanner";
import Layout from "components/Layout";
import Footer from "components/Layout/Footer";
import FundedService from "components/services/FundedService";
import GetCommercialize from "components/services/GetCommercialize";
import GetFund from "components/services/GetFund";
import ServicesHome from "components/services/ServicesHome";
import { animL, animR } from "public/Global";
import styled from "styled-components";
import { useState } from "react";
import ChatPopup from "components/ChatPopup";
import Head from "next/head";

const services = () => {
  const [chatPopup, setChatPopup] = useState(false);

  const openChatPopup = () => {
    setChatPopup(true);
  };

  return (
    <>
      <Head>
        {/* <title>VentureCraft | How We Help You Get Funded & Get Commercialized</title> */}
        <title>How We Help Your Startup Get Funded & Get Commercialized | VentureCraft</title>
      </Head>
      <Layout>
        <HeaderBanner heading="How We Help You" />
        <ServicesHome />
        <GetFund />
        <FundedService />

        <div className="desktop_container">
          <ServiceBannner className="flex flex-col md:gap-10 gap-2 items-center md:my-20 my-8">
            <h2 className="h2 text-lightBlack">Let's Create Your Winning Story</h2>
            <PrimaryButton
              openChatPopup={openChatPopup}
              text={
                <>
                  <span className="animL galaxy_hide"> 👉 </span> Click Here to Contact Us Now <span className="animR galaxy_hide"> 👈 </span>
                </>
              }
              fontSize="text-[2rem]"
            />
          </ServiceBannner>
        </div>

        <GetCommercialize />
        <Footer />
        <ChatPopup open={chatPopup} onClose={() => setChatPopup(false)} />
      </Layout>
    </>
  );
};

export default services;

const ServiceBannner = styled.section`
  .animL {
    animation: ${animL} 0.4s infinite alternate;
    margin-right: 4px;
  }
  .animR {
    animation: ${animR} 0.4s infinite alternate;
    margin-left: 4px;
  }
`;
