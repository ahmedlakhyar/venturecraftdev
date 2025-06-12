import styled from "styled-components";
import Image from "next/image";
import { ButtonDark } from "components/Button";
import { animL, animR } from "public/Global";
import ChatPopup from "components/ChatPopup";
import LearnMoreBanner from "./LearnMoreBanner";
import { useState } from "react";

const STRATEGIES = [
  {
    id: 1,
    image: "/images/home/years.png",
    title: "20+ years of commercialization leadership.",
    subTitle:
      "We’ve guided early-stage technologies across sectors from initial grant funding through scale, acquisition, and exit. Our depth of experience ensures practical, phase-appropriate guidance every step of the way.",
    // ratio: 1.08,
    // width: "130px",
  },
  {
    id: 2,
    image: "/images/home/end-to-end.png",
    title: "End-to-end support for deep tech ventures.",
    subTitle:
      " We provide integrated commercialization strategy—from SBIR grant planning to go-to-market roadmaps and investor readiness—ensuring nothing gets lost between the lab and the market.",
    // ratio: 0.92,
    // width: "130px",
  },
  {
    id: 3,
    image: "/images/service/fundingstrat.svg",
    title: "Agency-aligned and TABA-eligible.",
    subTitle:
      "As an approved commercialization vendor, we support teams applying to and funded by agencies such as NIH, DOE, NSF, DoD, and others. We understand what federal reviewers—and commercial partners—look for.",
    // ratio: 0.58,
    // width: "130px",
  },
  {
    id: 4,
    image: "/images/service/magnifying.svg",
    title: "Fluent in science, business, and capital markets.",
    subTitle:
      "Our team combines technical expertise with real-world operating experience, allowing us to speak the language of researchers, regulators, and investors alike.",
    // ratio: 0.72,
    // width: "130px",
  },
  {
    id: 5,
    image: "/images/service/magnifying.svg",
    title: "Tailored, evidence-driven strategy.",
    subTitle:
      "We don’t offer one-size-fits-all templates. Our commercialization plans and business strategies are customized based on your technology’s readiness, market dynamics, and funding trajectory.",
    // ratio: 0.72,
    // width: "130px",
  },
];

const WhyTechTrustUs = () => {
  const [chatPopup, setChatPopup] = useState(false);

  const openChatPopup = () => {
    setChatPopup(true);
  };

  return (
    <>
      <Root>
        <div className="desktop_container md:py-20 pt-10 pb-6">
          <h1 className="h1 text-whiteColor">Why technology teams trust us:</h1>
          <div className="strategies_wrapper sm:max-w-[75%] md:mt-[5rem] mt-[2rem] mx-auto flex md:gap-20 gap-10 md:pr-10">
            {STRATEGIES.map((s, ind) => {
              return (
                <div
                  key={ind}
                  className="flex md:flex-row flex-col md:gap-20 gap-10 items-center"
                >
                  

                  <div className="flex flex-col md:text-left text-center gap-5">
                    <div className="title text-whiteColor font-semibold">
                      {s.title}
                    </div>
                    <div className="p1 text-lightBlack">{s.subTitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <LearnMoreBanner />
        </div>
        <ChatPopup open={chatPopup} onClose={() => setChatPopup(false)} />
      </Root>
    </>
  );
};

export default WhyTechTrustUs;

const Root = styled.section`
  background: url("/images/service/commercialized-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 60px;

  .animL {
    animation: ${animL} 0.4s infinite alternate;
    margin-right: 4px;
  }
  .animR {
    animation: ${animR} 0.4s infinite alternate;
    margin-left: 4px;
  }

  .p1 {
    font-weight: 600;
  }

  .title {
    /* font-size: 3rem; */
    font-weight: 800;
  }

  .strategies_wrapper {
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* margin: 5rem auto 0; */
    /* max-width: 75%; */
  }
`;
