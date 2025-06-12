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

const ChatPopupModal = ({ onClose }) => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "20593606",
    formId: "ef086a2b-b7ad-4af4-95f4-e5b446b06c28",
    target: "#hubspot_chat_form",
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
      <Paper className="modal lg:min-h-[91vh] md:min-h-[56rem] min-h-[35rem]" variants={modal}>
        <HiOutlineX className="popup-cross-icon" onClick={onClose} />
        <Root>
          <div className="">
            <div className="popup_download_banner flex md:flex-row flex-col lg:items-start items-center bg-whiteColor md:pt-5 md:pb-3 pt-8 pb-3">
              <div className="flex flex-col md:pr-10 flex-1">
                <h4 className="h4 leading-normal text-lightBlack">We'd love to collaborate!</h4>
                <p className="p2 text-lightBlack">Interested in discussing your fundraising or commercialization needs? Let's chat!</p>
              </div>
            </div>
          </div>
        </Root>
        <div id="hubspot_chat_form"></div>
      </Paper>
    </BackDrop>
  );
};

export default ChatPopupModal;

const Root = styled.div`
  /* width: 90%; */
  padding: 0 2rem;
  margin: auto;
  .h4 {
    font-weight: 700;
  }
  .p2 {
    margin-top: 5px;
    margin-bottom: 1rem;
    font-weight: 400;
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
  /* padding: 1rem 2rem; */
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
  #hubspot_chat_form {
    max-height: 80vh;
    overflow-y: auto;
    padding: 0 2rem;
    @media screen and (max-width: 1024px) {
      max-height: 75vh;
    }
    @media screen and (max-width: 767px) {
      max-height: 50vh;
      padding: 0 1.2rem;
    }
  }
  @media screen and (max-width: 767px) {
    .popup-cross-icon {
      /* font-size: calc(20px + 1.5vw); */
      font-size: 1.7rem;
    }
  }
`;
