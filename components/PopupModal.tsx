import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";
import styled from "styled-components";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    scale: 0.6,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.68, -0.6, 0.32, 1.6] },
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.68, -0.6, 0.32, 1.6] },
  },
};

const PopupModal = ({ onClose }) => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "20593606",
    formId: "3ba84b45-5632-4b03-9bf4-134b1c253770",
    target: "#hubspot_form",
  });

  // console.log("HS........", loaded, error, formCreated);

  return (
    <BackDrop
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={(e: any) => {
        if (e.target.id === "backdrop") {
          if (onClose) onClose();
        }
      }}
      id="backdrop"
    >
      <Paper className="modal lg:min-h-[70vh] min-h-[35rem]" variants={modal}>
        <HiOutlineX className="popup-cross-icon" onClick={onClose} />
        <Root>
          <div className="">
            <div className="popup_download_banner flex md:flex-row flex-col lg:items-start items-center bg-whiteColor md:pt-5 md:pb-3 pt-8 pb-3">
              <div className="flex flex-col md:pr-10 flex-1">
                <h3 className="h3 leading-normal text-lightBlack">
                  Download our Investor Presentation Formula for{" "}
                  <span className="text-[#edd819]">FREE.</span>
                </h3>
              </div>
              <div>
                <div className="popup_download_banner_img 2xl:w-[450px] xl:w-[320px] md:w-[250px] w-[200px] max-w-full 2xl:-mr-30 xl:-mr-5 pr-8 md:block hidden">
                  <img
                    src="/images/cards.png"
                    className="w-full 2xl:-mt-28 md:-mt-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </Root>
        <div id="hubspot_form"></div>
      </Paper>
    </BackDrop>
  );
};

export default PopupModal;

const Root = styled.div`
  width: 90%;
  margin: auto;
  .h3,
  .h3 span {
    font-weight: 800;
    font-family: Gilroy;
  }
  .popup_download_banner {
    border-radius: 1rem;
  }
`;

const BackDrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Paper = styled(motion.div)`
  max-width: 90%;
  width: 60rem;
  /* min-height: 73vh; */
  margin: auto;
  /* padding: 4rem 4rem; */
  border-radius: 1rem;
  background: #fff;
  position: relative;
  text-align: center;
  /* background-color: var(--lightBlack); */
  @media screen and (max-width: 767px) {
    border-radius: 5px;
  }

  .popup-cross-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
    border: 2px solid var(--lightBlack);
    border-radius: 50%;
    padding: 2px;
    transition: 0.2s;
    opacity: 0.7;
    &:hover {
      padding: 5px;
      transition: 0.2s;
      opacity: 1;
    }
  }

  #hubspot_form {
    padding: 0rem 2rem 1rem;
    width: 80%;
    margin: auto;
  }

  @media screen and (max-width: 1024px) {
    .h3,
    .h3 span {
      /* font-size: calc(18px + 1vw); */
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 767px) {
    .h3,
    .h3 span {
      /* font-size: calc(18px + 1vw); */
      font-size: 1.45rem;
    }
    .h3 {
      padding-top: 10px;
    }
    .popup-cross-icon {
      /* font-size: calc(20px + 1.5vw); */
      font-size: 1.7rem;
    }
    #hubspot_form {
      width: 95%;
      padding: 0rem 1rem 1rem;
      padding-bottom: 10px;
    }
  }
`;
