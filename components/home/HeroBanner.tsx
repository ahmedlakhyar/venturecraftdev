import Image from "next/image";
import { HeroBgImage } from "public/Global";
import styled from "styled-components";
import { ButtonDark } from "../Button";
import { TypeAnimation } from "react-type-animation";
import { ParentRoot } from "public/Global";
import { useRef, useEffect, useState } from "react";
import Popup from "components/Popup";

const HeroBanner = () => {
  const getHeight = useRef(null);
  const [height, setheight] = useState(0);
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true);
  };

  useEffect(() => {
    setTimeout(() => {
      let measureHeight = getHeight.current.clientHeight * 2 + 20;
      setheight(measureHeight);
    });
  }, [getHeight]);

  return (
    <>
      <ParentRoot>
        <Root className="master_div" height={height}>
          <HeroBgImage />
          <div className="content_wrapper desktop_container">
            <div>
              <h1 className="h1" ref={getHeight}>
                <TypeAnimation
                  sequence={[
                    "From R&D to ROI,", // Types 'One'
                    1000, // Waits 1s
                    // Waits 2s
                  ]}
                  wrapper="div"
                  cursor={false}
                  repeat={1}
                  // style={{ fontSize: "2em" }}
                />
                {/* <div className="h1-span"> */}

                <TypeAnimation
                  sequence={[
                    1200,
                    "Think Beyond the Lab.", // Types 'One'
                    1000, // Waits 1s
                    // Waits 2s
                  ]}
                  wrapper="div"
                  className="h1-span"
                  cursor={false}
                  repeat={1}
                  // style={{ fontSize: "2em" }}
                />

                {/* </div> */}
                {/* Be Understood. <br /> <span className="h1-span">Get Funded.</span> */}
              </h1>
            </div>
            <p className="p1 mt-5">
            We’re commercialization experts fluent in science, business, and venture capital. We craft persuasive business cases for critical audiences — from grant reviewers to private investors — and transform complex technologies into fundable, scalable ventures.
            </p>
            <div className="text-center">
              <ButtonDark
                openPopup={openPopup}
                text={
                  <>
                    <span className="lg:pr-12 md:pr-8 pr-10 galaxy_pr">
                    Results&nbsp;Start&nbsp;<span className="text-yellowBase ">Here&nbsp;</span>
                    Let's&nbsp;Talk.
                    </span>
                    <span className="fire_img galaxy_hide aspect-square ml-1 lg:w-20 w-16 inline-block absolute right-0 md:top-0 -top-1">
                      <Image src="/images/fire-3.gif" layout="fill" alt="loding..." />
                    </span>
                  </>
                  // <p>🔥</p>
                }
                fontSize="text-3xl"
              />
            </div>
          </div>
        </Root>
        <div className="hero_bottom"></div>
        <Popup open={popup} onClose={() => setPopup(false)} />
      </ParentRoot>
    </>
  );
};

export default HeroBanner;

const Root = styled.div<any>`
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;

  .content_wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12rem 0 3rem;

    .h1 {
      line-height: 120%;
      color: var(--lightBlack);
      min-height: ${(s) => s.height}px;
      .h1-span {
        color: var(--yellowBase);
      }
    }

    .p1 {
      color: var(--whiteColor);
      width: 70%;
      font-weight: 600;
    }
  }
  @media screen and (min-width: 2000px) {
    .content_wrapper {
      padding: 17rem 0 3rem;
    }
  }
  @media screen and (max-width: 1024px) {
    .content_wrapper .h1 {
      min-height: ${(s) => s.height - 14}px;
    }
  }

  @media screen and (max-width: 767px) {
    .content_wrapper {
      padding: 8rem 0 1.5rem 0;
      /* height: auto; */
    }
  }
`;
