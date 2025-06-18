import { PrimaryButton } from "components/Button";
import { ButtonDark } from "../Button";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Popup from "components/Popup";




const SyndicateBanner = () => {
  
  return (
    <>
      <Root>
        <div className="desktop_container">
          <div className="learn_more_banner flex lg:flex-row flex-col lg:items-start items-center bg-lightBlack md:mt-28 py-8 md:mb-28 lg:pb-3 my-10 md:px-12 px-6">
            <div className="flex flex-col flex-[0.6] pr-3">
              <p className="learn_more_title font-bold leading-normal text-whiteColor mb-3">
                Commercialization is not a single deliverable—it is a system of decisions, validated assumptions, and execution frameworks. 
              </p>
              <p className="p1 text-whiteColor mb-5">
              We work alongside your team to define that system and prepare it for scrutiny by strategic partners, boards, and capital providers.
              </p>
              <p className="p1 text-whiteColor mb-5">
              <strong className="text-yellowBase">The result:</strong> a clear path from innovation to market traction and enterprise value.

If you need strategic clarity on how your technology becomes a business—this is where it begins.
              </p>
              <p className="p1 text-whiteColor">
              Contact us to shape your commercialization roadmap with a team that’s been there before.
              </p>
         
              
              <Link href="/contact">
                <a className="m-auto">
                <ButtonDark
                
                text={
                  <>
                    <span className="galaxy_pr">
                    Contact&nbsp;us&nbsp;
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
                src="/images/execution-frameworks.png"
              />
            </div>
          </div>
        </div>
      </Root>
    </>
  );
};

export default SyndicateBanner;

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

