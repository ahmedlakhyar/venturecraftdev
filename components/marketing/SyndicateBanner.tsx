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
            <div className="flex flex-col flex-[0.8] pr-3">
              <p className="learn_more_title leading-normal text-whiteColor mb-3">
              If your technology deserves to be understood, funded, and adopted — your marketing should be designed to make that inevitable. Contact us to discuss how we can help you build the communications infrastructure to match your ambition.   </p>
            
         
              
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

            <div className="flex-[0.2]">
              <img
                className="learn_more_img"
                src="/images/marketing2.png"
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


    .learn_more_banner img{
      max-width: 230px
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

