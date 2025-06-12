import { ButtonDark } from "components/Button";
import styled from "styled-components";
import Image from "next/image";
import { animL, animR } from "public/Global";
import { useState } from "react";
import Popup from "components/Popup";

const DownloadBanner = ({ bannerText }) => {
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true);
  };
  return (
    <>
      <Root>
        <div className="desktop_container">
          <div className="download_banner flex lg:flex-row flex-col lg:items-start items-center bg-primaryLight2 py-12 my-10 md:mt-36 mt-10 md:px-12 sm:px-5 ">
            <div className="flex flex-col md:pr-10 flex-1">
              <h2 className="h2 px-2 leading-normal text-lightBlack">
                Download our free formula for telling stories that raise
                capital.
              </h2>
              <ButtonDark
                openPopup={openPopup}
                text={bannerText}
                fontSize="text-3xl"
              />
            </div>
            <div className="download_banner_img xl:w-[500px] w-[400px] max-w-full lg:-mr-20">
              {/* <div className=""> */}
              <img src="/images/cards.png" className="w-full lg:-mt-36" />
              {/* </div> */}
            </div>
          </div>
        </div>
        <Popup open={popup} onClose={() => setPopup(false)} />
      </Root>
    </>
  );
};

export default DownloadBanner;

const Root = styled.section`
  .h2 {
    font-size: 4rem;
  }
  .download_banner {
    border-radius: 2.5rem;
    margin-bottom: 10rem;
    margin-top: 12rem;

    .animL {
      animation: ${animL} 0.4s infinite alternate;
      margin-right: 4px;
    }
    .animR {
      animation: ${animR} 0.4s infinite alternate;
      margin-left: 4px;
    }
  }
  @media screen and (min-width: 3000px) {
    .download_banner_img {
      width: 700px;
    }
  }
  @media screen and (min-width: 2000px) {
    .h2 {
      /* font-size: calc(26px + 2vw); */
    }
  }
  @media screen and (max-width: 1280px) {
    .h2 {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 1024px) {
    .h2 {
      /* font-size: calc(26px + 2vw); */
      font-size: 2.3rem;
    }
  }
  @media screen and (max-width: 767px) {
    .desktop_container {
      width: 100%;
    }
    .download_banner {
      border-radius: 0px;
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    .h2 {
      /* font-size: calc(26px + 2vw); */
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 359px) {
    /* .animL,
    .animR {
      display: none;
    } */
  }
`;
