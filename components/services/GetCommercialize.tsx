import styled from "styled-components";
import Image from "next/image";
import { ButtonDark } from "components/Button";
import { animL, animR } from "public/Global";
import ChatPopup from "components/ChatPopup";
import { useState } from "react";

const STRATEGIES = [
  {
    id: 1,
    image: "/images/service/bullhorn.svg",
    title: "Marketing Strategies",
    subTitle:
      "Developing value propositions, customer archetypes, and scalable growth strategies.",
    // ratio: 1.08,
    // width: "130px",
  },
  {
    id: 2,
    image: "/images/service/fingerprint.svg",
    title: "Branding Strategies",
    subTitle:
      "Creating a brand, logo, or messaging that aligns your audience with your mission.",
    // ratio: 0.92,
    // width: "130px",
  },
  {
    id: 3,
    image: "/images/service/fundingstrat.svg",
    title: "Funding Strategies",
    subTitle:
      "Identifying which funding sources to target, such as investors, funds, or non-dilutive grants.",
    // ratio: 0.58,
    // width: "130px",
  },
  {
    id: 4,
    image: "/images/service/magnifying.svg",
    title: "Customer Discovery",
    subTitle:
      "Aggregating customers into marketing campaigns to gather data and identify potential partners.",
    // ratio: 0.72,
    // width: "130px",
  },
];

const GetCommercialize = () => {
  const [chatPopup, setChatPopup] = useState(false);

  const openChatPopup = () => {
    setChatPopup(true);
  };

  return (
    <>
      <Root>
        <div className="desktop_container md:py-20 pt-10 pb-6">
          <h1 className="h1 text-whiteColor">Get Commercialized.</h1>
          <p className="my-5 p1 text-lightBlack md:pl-10">
            Not yet ready to raise capital? We drive concepts and companies from
            0 to 1. <br /> Our{" "}
            <span className="text-yellowBase">Get Commercialized</span> services
            include:
          </p>

          <div className="strategies_wrapper sm:max-w-[75%] md:mt-[5rem] mt-[2rem] mx-auto flex md:gap-20 gap-10 md:pr-10">
            {STRATEGIES.map((s, ind) => {
              return (
                <div
                  key={ind}
                  className="flex md:flex-row flex-col md:gap-20 gap-10 items-center"
                >
                  <div>
                    <div
                      className="img aspect-square relative w-[200px]"
                      // style={{ aspectRatio: s.ratio}}
                    >
                      <Image src={s.image} layout="fill" />
                    </div>
                  </div>

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
          <div className="text-center md:mt-20 mt-12">
            <ButtonDark
              openChatPopup={openChatPopup}
              text={
                <>
                  <span className="animL galaxy_hide"> 👉 </span> Speak to a
                  Commercialization Professional{" "}
                  <span className="animR galaxy_hide"> 👈 </span>
                </>
              }
              fontSize="text-[2rem]"
            />
          </div>
        </div>
        <ChatPopup open={chatPopup} onClose={() => setChatPopup(false)} />
      </Root>
    </>
  );
};

export default GetCommercialize;

const Root = styled.section`
  background: url("/images/service/commercialized-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

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
