import styled from "styled-components";
import Image from "next/image";

const AgencyLeadership = () => {
  return (
    <>
      <Root>
        <div className="desktop_container lg:px-20 md:pt-20 pt-8">
          <h2 className="h2 md:mb-20 mb-10">
          Our approach is grounded in cross-disciplinary fluency. We understand regulatory hurdles, capital markets, deep tech timelines, and customer psychology—and we bring that understanding to bear in every engagement. We are operators and strategists, designers and analysts, scientists and storytellers. That’s what effective commercialization requires.
          </h2>

          <div className="leadership_wrapper flex md:flex-row flex-col-reverse items-center justify-between md:gap-20 gap-7">
            <div className="left md:w-3/5">
              <h4 className="md:mb-16 mb-5 h4 text-buttonBg">
              Our Founder
              </h4>
              <p className="p1 md:mb-10 mb-6 text-lightBlack">
              Shaun Sanders is a nationally recognized commercialization strategist and a global speaker on venture capital and deep tech investment. With a career spanning over two decades, Shaun has advised hundreds of innovation-driven organizations, helping them turn scientific breakthroughs into scalable businesses.
              </p>
              <p className="p1 md:mb-10 mb-6 text-lightBlack">
              His experience bridges technical disciplines and capital markets. He has served as legal counsel, startup COO, brand strategist, and cybersecurity lead, working across sectors and growth stages. As an Adjunct Professor of Business Law at the University of Southern California, Shaun also contributes to the next generation of legal and venture professionals. He previously led one of the nation’s highest-performing SBDC-funded startup accelerators, where he developed programs and methodologies still in use by top-tier entrepreneurial ecosystems today.
              </p>
              <p className="p1 text-lightBlack">
              Shaun is widely regarded for his ability to translate highly technical concepts into investor-ready narratives. He has trained startup teams, advised federal programs, and spoken on global stages about the future of science-based innovation and capital formation. His leadership reflects both operational depth and a clear understanding of how to create commercial outcomes from complex ideas.
              </p>
            </div>
            <div className="right flex flex-col gap-5 items-center justify-center">
              <div>
                <div className="img xl:w-96 lg:w-72 md:w-56 w-56 relative aspect-square">
                  <Image src="/images/story/manager.png" layout="fill" />
                </div>
              </div>
              <div>
                <h5 className="title text-lightBlack">Shaun Sanders, J.D.</h5>
                <p className="sub_title text-lightBlack">Managing Partner</p>
              </div>
            </div>
          </div>
        </div>
      </Root>
    </>
  );
};

export default AgencyLeadership;

const Root = styled.section`
  /* .h2 {
    line-height: 120%;
  } */
  .p1 {
    font-weight: 600;
  }
  .h4 {
    font-weight: 700;
    font-size: 3rem;
  }
  .title {
    /* font-size: 3rem; */
    font-weight: 700;
  }
  .sub_title {
    font-size: 2.5rem;
    font-weight: 500;
    font-style: italic;
    opacity: 0.9;
  }
  @media screen and (min-width: 1281px) and (max-width: 1440px) {
    .title {
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 1024px) {
    .title {
      font-size: 1.4rem;
    }
    .sub_title {
      /* font-size: calc(20px + 1.5vw); */
      font-size: 1.45rem;
    }
    .h4 {
      /* font-size: calc(20px + 2vw); */
      font-size: 1.9rem;
    }
  }
  @media screen and (max-width: 767px) {
    .title {
      font-size: 1.3rem;
    }
    .sub_title {
      /* font-size: calc(20px + 1.5vw); */
      font-size: 1.25rem;
    }
    .h4 {
      /* font-size: calc(20px + 2vw); */
      font-size: 1.6rem;
    }
  }
`;
