import styled from "styled-components";
import Image from "next/image";
import { HiScale } from "react-icons/hi";
import Link from "next/link";

const StoryDescription = () => {
  return (
    <>
      <Root>
        <div className="desktop_container">
          <p className="p1 p1_width pb-5">
          Commercialization is the discipline of turning technical innovation into sustained market success. For science-driven companies, this requires far more than pitching or promotional activity—it demands a deliberate, data-informed approach to markets, customers, operations, and value creation. We help you build and operationalize that approach.
          </p>
          <p className="p1 p1_width pb-5">
          Our firm delivers structured, phase-appropriate commercialization strategy for deep tech ventures across sectors. Whether you're launching a new product line, scaling a platform technology, or transitioning from research to revenue, we bring decades of experience to help guide your team through each inflection point.
          </p>
        </div>
      </Root>
    </>
  );
};

export default StoryDescription;

const Root = styled.section`
.desktop_container{
  margin: 5rem auto
}
  .h1 {
    font-weight: 800;
    margin: 2.5rem 0;
  }

  .p1 {
    color: var(--lightBlack);
    font-weight: 600;
  }

  .h2.p1_width {
    color: var(--buttonBg);
  }
  .h2 {
    color: var(--lightBlack);
  }

  .p1_width {
    width: 75%;
    margin: auto;
  }
  .help_section_wrapper {
    margin-top: 3rem;
  }
  .title {
    /* font-size: 3rem; */
    font-weight: 700;
    line-height: 120%;
    color: var(--buttonBg);
  }
  .sub_title {
    font-weight: 600;
  }
  .guaranty_wrapper {
    background-color: var(--yellowBase);
    /* padding: 2rem 2rem 1rem; */
    margin-top: 5rem;
    border-radius: 2rem;
  }

  @media screen and (min-width: 2000px) {
    .guaranty_wrapper .img_div {
      width: calc(8rem + 10rem);
    }
  }

  @media screen and (max-width: 767px) {
    .p1_width {
      width: 95%;
    }
    .guaranty_wrapper {
      border-radius: 10px;
    }
  }
`;
