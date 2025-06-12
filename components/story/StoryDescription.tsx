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
          We built this firm to close a persistent gap—between groundbreaking science and the systems that bring it to market. Again and again, we saw promising technologies stall not because of technical failure, but because teams lacked the strategy, structure, and storytelling to align with the right funding, partners, or pathways to scale.
          </p>
          <p className="p1 p1_width pb-5">
          What began as a focused effort to help startups refine their business cases has since evolved into a full-lifecycle commercialization practice. Today, we support a wide range of innovation teams—from first-time founders to university spinouts, enterprise R&D groups, and SBIR-funded researchers. Across hundreds of engagements, we’ve helped clients raise capital, win grants, secure partnerships, and navigate the long arc from discovery to exit.
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
