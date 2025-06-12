import styled from "styled-components";
import { HiPlus } from "react-icons/hi";

export const Dots = ({ countDot = 3 }) => {
  return (
    <>
      <Root className="flex gap-3 flex-col">
        {[...Array(countDot)].map((i, ind) => {
          return <div className="dot" key={ind}></div>;
        })}
      </Root>
    </>
  );
};

export const Gaps = ({ countGap = 3 }) => {
  return (
    <>
      <Root className="flex gap-3 flex-col">
        {[...Array(countGap)].map((i, ind) => {
          return <div className="gap" key={ind}></div>;
        })}
      </Root>
    </>
  );
};

const Plus = ({ countPlus = 1 }) => {
  return (
    <>
      <Root className="flex gap-3 flex-col">
        {[...Array(countPlus)].map((i, ind) => {
          return <HiPlus className="plus" key={ind} />;
        })}
      </Root>
    </>
  );
};

export default Plus;

const Root = styled.div`
  margin: 1rem 0;
  .dot {
    width: 12px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--lightBlack);
  }
  .gap {
    width: 12px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: unset;
  }
  .plus {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
