import styled from "styled-components";
import Image from "next/image";
import { HiScale } from "react-icons/hi";
import Link from "next/link";
const HELPS = [
  {
    image: "/images/accelerators.png",
    title: "Accelerators & Incubators",
    text: "We deliver commercialization workshops, mentorship, and investor readiness programs tailored to deep tech ventures.",
    // ratio: 0.72,
    aosDelay: "100",
  },
  {
    image: "/images/venture.png",
    title: "Venture Firms & Family Offices",
    text: "We help assess technical risk, commercial strategy, and team strength—supporting diligence, dealflow, and founder coaching.",
    // ratio: 0.72,
    aosDelay: "300",
  },
  {
    image: "/images/research1.png",
    title: "Research Institutions & Tech Transfer Offices",
    text: "We assist spinouts and licensing candidates with market validation, business modeling, and investor engagement strategies.",
    // ratio: 0.72,
    aosDelay: "500",
  },
  {
    image: "/images/economic.png",
    title: "Economic Development & Government Programs",
    text: "We contribute as subject-matter experts in commercialization planning, SBIR/STTR support, and innovation policy initiatives.",
    // ratio: 0.96,
    aosDelay: "700",
    scale: "scale(1.1)",
  },
  {
    image: "/images/innovation.png",
    title: "Corporate Innovation Teams",
    text: "We support scouting, venture readiness, and partnership structuring to align startup pipelines with strategic objectives.",
    // ratio: 0.96,
    aosDelay: "700",
    scale: "scale(1.1)",
  },
];

const WhoWePartnerWith = () => {
  return (
    <>
      <Root>
        <div className="desktop_container">
          
         

          <h2 className="h2">Who we partner with:</h2>

          {/* <div className="help_section_wrapper flex md:flex-row flex-col 2xl:gap-20 xl:gap-12 gap-10"> */}
          <div className="help_section_wrapper grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between 2xl:gap-20 xl:gap-12 gap-10">
            {HELPS.map((s, ind) => {
              return (
                <div
                  className="flex flex-col gap-1 flex-1"
                  key={ind}
                >
                  <div
                    className="img 2xl:w-72 w-60 -mb-5 aspect-square relative"
                    style={{ transform: s.scale }}
                  >
                    <Image src={s.image} layout="fill" />
                  </div>
                  <div className="title">{s.title}</div>
                  <div className="p1">{s.text}</div>
                </div>
              );
            })}
          </div>
          

          <div className="guaranty_wrapper lg:mx-20 md:mx-10 px-10 pt-4 pb-4">
            <h2 className="h2 text-center">If you're building a stronger innovation pipeline, we’d be glad to support it. Get in touch to explore how we can work together.</h2>
            
          </div>
          
        </div>
      </Root>
    </>
  );
};

export default WhoWePartnerWith;

const Root = styled.section`
  .h1 {
    font-weight: 800;
    margin: 2.5rem 0;
  }

  .p1 {
    color: var(--lightBlack);


  }

  .h2 {
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
    font-size: 2rem;
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
