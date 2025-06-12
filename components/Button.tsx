import styled from "styled-components";

export const ButtonDark = ({ text, fontSize, openPopup, openChatPopup}: {text: any, fontSize: string, openPopup?: () => void, openChatPopup?: () => void}) => {
  return (
    <Root className="btn">
      <button
        onClick={openPopup || openChatPopup}
        className={`bg-lightBlack button relative text-whiteColor flex gap-1.5 items-center m-auto ${fontSize}`}
      >
        {text}
      </button>
    </Root>
  );
};

export const PrimaryButton = ({ text, fontSize, openChatPopup}: {text: any, fontSize: string, openChatPopup?: () => void}) => {
  return (
    <Root className="btn primary_btn">
      <button
      onClick={openChatPopup}
        className={`bg-buttonBg button flex items-center text-whiteColor ${fontSize}`}
      >
        {text}
      </button>
    </Root>
  );
};

const Root = styled.div`
  margin: 2rem auto;

  .button {
    outline: none;
    border: none;
    font-weight: 500;
    padding: 1.2rem 1.7rem;
    border-radius: 5rem;
    transition: 0.4s;

    &:hover {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
      transition: 0.4s;
      letter-spacing: 0.5px;
    }
  }

  &.primary_btn {
    .button {
      padding: 1.2rem 2.6rem;
      &:hover {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
        transition: 0.4s;
        letter-spacing: 0.5px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .button {
      padding: 0.8rem 1rem;
      /* min-height: 3rem; */
    }

    &.primary_btn {
      .button {
        padding: 0.8rem 1.5rem;
        /* min-height: 3rem; */
      }
    }
  }
  @media screen and (max-width: 430px) {
    .galaxy_hide {
      /* display: none; */
    }
    .galaxy_pr {
      /* padding-right: 0; */
    }
  }
`;
