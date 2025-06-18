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
          Securing non-dilutive funding can be a pivotal milestone for deep tech ventures—but navigating SBIR/STTR programs is complex. We help clients position their science for maximum competitive advantage across all phases of the process. Whether you’re targeting a Phase I submission or preparing for Phase II/III follow-on funding, we guide you through technical alignment, reviewer expectations, and commercialization strategy development.
         </p>
          <p className="p1 p1_width pb-5">
          We have deep experience supporting applicants across all major SBIR/STTR agencies—including NIH, DOE, NSF, DoD, NASA, and others. As a TABA-eligible vendor, we’re approved to provide post-award commercialization assistance through agencies like NIH and DOE. Our services include competitive landscape research, customer discovery design, regulatory pathway analysis, and full-scale commercialization planning—ensuring your proposal doesn’t just meet the bar, but stands out.
          </p>
          <p className="p1 p1_width pb-5">
          Need help navigating your next SBIR submission or maximizing a current award?<strong> Get in touch with us to learn how we can support your application—and accelerate your path to market.</strong>
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
