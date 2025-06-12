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
          Access to capital is a critical inflection point for deep tech ventures—but raising it requires more than a good idea. Investors need conviction. Strategic partners need clarity. And your internal team needs a roadmap that connects technical progress to commercial traction. We help you build all three.
          </p>
          <p className="p1 p1_width pb-5">
          Our fundraising support begins by assessing your current readiness: business model strength, team composition, regulatory risk, intellectual property position, traction metrics, and capital strategy. From there, we work with you to fill gaps, refine your pitch, and prepare materials that communicate both opportunity and execution capability.
          </p>
          <p className="p1 p1_width pb-5">
          We provide support across multiple capital sources, including institutional venture capital, family offices, corporate investors, government-backed programs, and early-stage accelerators. Our team has advised companies through pre-seed formation, Series A scaling, and even strategic exits, giving us the insight to align funding strategy with long-term enterprise value.
          </p>
          <p className="p1 p1_width pb-5">
          Our investor readiness services include:
          </p>
          <p className="p1 p1_width">
          - Investment narrative and data room preparation.
          </p>
          <p className="p1 p1_width">
          - Pitch deck creation and refinement.
          </p>
          <p className="p1 p1_width">
          - Financial modeling and capital planning.
          </p>
          <p className="p1 p1_width">
          - Market validation and risk positioning.
          </p>
          <p className="p1 p1_width">
          - Investor pipeline development and outreach strategy.
          </p>
          <p className="p1 p1_width">
          - Coaching for founder presentations and Q&A.
          </p>
          <p className="p1 p1_width">
          - Strategic preparation for accelerators and demo days.
          </p>
         
          
         
        </div>
      </Root>
    </>
  );
};

export default StoryDescription;

const Root = styled.section`
.desktop_container{
  margin-top:60px
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
