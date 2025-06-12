import styled from "styled-components";
import Image from "next/image";
import { HiScale } from "react-icons/hi";
import Link from "next/link";

const StoryDescription = () => {
  return (
    <>
      <Root>
        <div className="desktop_container">
          <p className="p1 p1_width pb-5">For emerging technologies, marketing isn’t just a matter of visibility — it’s a matter of comprehension. In sectors where complexity is high and trust is hard-earned, messaging must do more than inform. It must persuade, validate, and bridge the gap between innovation and adoption.
          </p>
          <p className="p1 p1_width pb-5">We design marketing systems that do exactly that. Our work is rooted in decades of experience helping scientific and technical ventures articulate their value with clarity and conviction. Whether the goal is to educate a new market, position a platform for acquisition, or activate high-value enterprise leads, we combine strategy, storytelling, and signal-driven optimization to generate meaningful traction.
          </p>
          <p className="p1 p1_width pb-5">Our marketing team brings together deep experience across digital and legacy media. We have driven hundreds of millions of users and customers to new products and services through data-informed campaigns that align tightly with commercialization goals. From early-stage market validation to mature go-to-market campaigns, we structure each engagement around performance and credibility — ensuring that what you say reinforces what you can deliver.
          </p>
          <p className="p1 p1_width pb-5">Rather than treating marketing as a surface-layer activity, we embed it into the foundation of your business strategy. This includes defining positioning frameworks, constructing full-funnel engagement strategies, producing technically literate content, and building the analytics infrastructure necessary to iterate with confidence. Whether your stakeholders are engineers, procurement officers, regulators, or venture investors, we help you meet them where they are — and move them toward action.
          </p>
          <p className="p1 p1_width pb-5">Marketing in the deep tech world is not about volume. It is about precision, alignment, and trust. We help our clients build that trust with every message, every asset, and every campaign.
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
