import styled from "styled-components";
import Image from "next/image";
import { HiScale } from "react-icons/hi";
import Link from "next/link";
const HELPS = [
  {
    image: "/images/service/founder.svg",
    title: "Founders",
    text: "Raising Seed, Series A, or Series B capital.",
    // ratio: 0.72,
    aosDelay: "100",
  },
  {
    image: "/images/service/scientist.svg",
    title: "Scientists",
    text: "Securing Phase I through phase III SBIR/STTR non-dilutive funding.",
    // ratio: 0.72,
    aosDelay: "300",
  },
  {
    image: "/images/service/executive.svg",
    title: "Executives",
    text: "Rallying colleagues to their cause or ensuring everyone is telling the same brand story.",
    // ratio: 0.72,
    aosDelay: "500",
  },
  {
    image: "/images/service/partner.svg",
    title: "Partners",
    text: "Investment groups, accelerators, and incubators looking to give their startups an edge for demo days.",
    // ratio: 0.96,
    aosDelay: "700",
    scale: "scale(1.1)",
  },
];

const GetFund = () => {
  return (
    <>
      <Root>
        <div className="desktop_container">
          <h1 className="h1">Get Funded.</h1>
          <p className="p1 p1_width pb-5">
            Great stories are contagious. When properly crafted, presentations
            are powerful, persuasive tools that inspire their audience to adopt
            new ideas and advocate them to others. For an idea to become
            unstoppable, it must first be articulable. Highly technical
            professionals—like engineers, scientists, and developers—obscure
            their stories with tribal language known only to their peers.
          </p>
          <p className="p1 p1_width pb-10">
            At VentureCraft, we specialize in business storytelling. Our{" "}
            <span className="text-buttonBg">
              {" "}
              <Link href="/process">
                <a>industry-leading process </a>
              </Link>
            </span>{" "}
            unpacks the most technical, abstract concepts and translates them
            into engaging stories that resonate with audiences and compels them
            to act.
          </p>

          <h2 className="h2 p1_width">Who We Help:</h2>

          {/* <div className="help_section_wrapper flex md:flex-row flex-col 2xl:gap-20 xl:gap-12 gap-10"> */}
          <div className="help_section_wrapper grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between 2xl:gap-20 xl:gap-12 gap-10">
            {HELPS.map((s, ind) => {
              return (
                <div
                  className="flex flex-col items-center gap-1 text-center flex-1"
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
            <h2 className="h2 -mb-5">VentureCraft Guarantee</h2>
            <div className="flex sm:flex-row flex-col items-center">
              <div>
                <div
                  className="img_div aspect-square -my-5 -mx-10 w-56 relative"
                  // style={{ aspectRatio: "0.74" }}
                >
                  <Image src="/images/service/ribbon.svg" layout="fill" />
                </div>
              </div>
              <p className="p1 sm:p-5">
                By the end of our process, you and your team will be able to
                successfully explain to <strong>any audience</strong>—whether
                investors, shareholders, colleagues, or even your parents—what
                it is you <strong>actually do,</strong> why it matters, and why
                they should care.
              </p>
            </div>
          </div>
        </div>
      </Root>
    </>
  );
};

export default GetFund;

const Root = styled.section`
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
