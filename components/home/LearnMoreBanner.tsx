import { PrimaryButton } from "components/Button";
import { ButtonDark } from "../Button";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Popup from "components/Popup";




const LearnMoreBanner = () => {
  
  return (
    <>
      <Root>
        <div className="desktop_container">
          <div className="learn_more_banner flex lg:flex-row flex-col lg:items-start items-center bg-lightBlack md:mt-28 py-8 md:mb-28 lg:pb-3 my-10 md:px-12 px-6">
            <div className="flex flex-col flex-[0.6] pr-3">
              <p className="learn_more_title font-medium leading-normal text-whiteColor">
                <span>We bring the structure, insight, and strategy that complex technologies need to succeed beyond</span>{" "}
                <span className="text-yellowBase font-semibold">
                the lab—across public and private sectors,
                </span>{" "}
                <span>
                from concept to commercialization.
                </span>
              </p>
         
              
              <Link href="/investor-pitches">
                <a className="m-auto">
                <ButtonDark
                
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
                </a>
              </Link>
            </div>

            <div className="flex-[0.4]">
              <img
                className="learn_more_img"
                src="/images/learn-more-images.png"
              />
            </div>
          </div>
        </div>
      </Root>
    </>
  );
};

export default LearnMoreBanner;

const Root = styled.section`
  .learn_more_banner {
    border-radius: 2.5rem;
    .learn_more_title {
      font-size: 2.2rem;
    }
  }

  .button {
    background:#34b0ea
  }

  @media screen and (min-width: 2000px) {
    .learn_more_banner {
      .learn_more_title {
        /* font-size: calc(22px + 1.2vw); */
      }
      .learn_more_img {
        width: 95%;
        margin: auto;
        padding: 2rem;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .learn_more_banner {
      .learn_more_title {
        /* font-size: calc(22px + 1.2vw); */
        font-size: 1.8rem;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .learn_more_banner {
      border-radius: 10px;
      .learn_more_title {
        /* font-size: calc(22px + 1.2vw); */
        font-size: 1.4rem;
      }
    }
  }
`;
