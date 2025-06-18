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
          <div className="learn_more_banner flex lg:flex-row flex-col lg:items-center items-center bg-lightBlack md:mt-28 py-8 md:mb-28 lg:pb-3 my-10 md:px-12 px-6">
            <div className="flex flex-col flex-[0.6] pr-3">
              <p className="learn_more_title font-bold leading-normal text-whiteColor mb-3">
              What is TABA, and Why It Matters 
              </p>
              <p className="p1 text-whiteColor mb-5">Many agencies offer additional, non-dilutive funding under the Technical and Business Assistance (TABA) program—designed to help SBIR recipients strengthen their commercialization strategy. TABA funds are separate from your R&D budget and can be used to engage external experts like us to support market analysis, IP strategy, regulatory planning, and investor outreach.

</p>
              <p className="p1 text-whiteColor mb-5">
              By identifying us as your TABA provider in your proposal, you may be eligible for $6,500 (Phase I) or $50,000 (Phase II) in supplemental funding—unlocking our support at no cost to you. We can help you structure your TABA request and ensure it aligns with agency expectations.  </p>
              <p className="p1 text-whiteColor">Contact us to learn how TABA funding can extend your capabilities and give your commercialization plan a competitive edge.

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
                src="/images/taba1.png"
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

