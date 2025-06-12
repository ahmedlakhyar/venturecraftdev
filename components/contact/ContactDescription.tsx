import styled from "styled-components";
import Image from "next/image";
import { HiScale } from "react-icons/hi";
import Link from "next/link";

const ContactDescription = () => {
  return (
    <>
      <Root>
        
        <div className="desktop_container">
        <h1 className="h1 md:mb-20 mb-10">
          The first chapter of your story <br />
          begins with contacting us
        </h1>
          <p className="p1 p1_width pb-5">
          If you're building something transformative, we want to hear about it.<br/>
          
          </p>
          <p className="p1 p1_width pb-5">
          Whether you're preparing to bring a technology to market, seeking commercialization support for a grant, or looking for a strategic partner to guide your fundraising or growth, our team is ready to help. We work with founders, researchers, investors, and institutions committed to advancing innovation with real-world impact.
          </p>
          
         
        </div>
        
      </Root>
    </>
  );
};

export default ContactDescription;

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
