// import StatSection from "./StatSection";
import styled from "styled-components";
import Image from "next/image";
import CountUp, { useCountUp } from "react-countup";
import { useState, useRef, useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";

const STATS = [
  {
    image: "/images/home/messaging-architecture.png",
    title: "Messaging Architecture",
    text: "Craft clear, adaptable messaging frameworks that communicate value to diverse stakeholders including investors, partners, and end-users.",
    prefix: "",
    suffix: "+",
    aosDelay: "100",
  },
  {
    image: "/images/home/customer-discovery.png",
    title: "Customer Discovery & Validation",
    text: "Design and execute structured outreach to validate assumptions, segment users, and refine product-market fit",
    prefix: "$",
    suffix: "M+",
    aosDelay: "300",
  },
  {
    image: "/images/home/customer-aggregation.png",
    title: "Customer Aggregation Strategy",
    text: "Develop scalable approaches to identify, engage, and retain high-value early adopters and strategic buyer groups.",
   prefix: "",
    suffix: "M+",
    aosDelay: "500",
  },
  {
    image: "/images/home/content-development.png",
    title: "Content Development",
    text: "Produce compelling collateral — from pitch decks to technical briefs — aligned with commercialization goals.",
   prefix: "",
    suffix: "+",
    aosDelay: "700",
  },
  {
    image: "/images/home/campaign-strategy.png",
    title: "Campaign Strategy & Management",
    text: "Plan and run targeted campaigns across digital, social, and traditional media, optimized for conversion and engagement.",
  prefix: "",
    suffix: "+",
    aosDelay: "700",
  },
  {
    image: "/images/home/regulatory.png",
    title: "Regulatory & Operational Strategy",
    text: "Supporting clients in regulated markets (e.g., life sciences, energy, aerospace) by linking technical development to critical compliance and commercialization milestones. We help ensure that regulatory, procurement, and manufacturing realities are embedded into your growth strategy—not bolted on after the fact.",
  prefix: "",
    suffix: "+",
    aosDelay: "700",
  },
  {
    image: "/images/home/web-digital.png",
    title: "Web & Digital Optimization",
    text: "Improve discoverability and credibility through optimized web content, SEO, and user experience enhancements.",
  prefix: "",
    suffix: "+",
    aosDelay: "700",
  },
  {
    image: "/images/home/thought-leadership.png",
    title: "Thought Leadership Positioning",
    text: "Build authority and visibility through speaking engagements, media contributions, and strategic PR.",
  prefix: "",
    suffix: "+",
    aosDelay: "700",
  },
  {
    image: "/images/home/funnel-design.png",
    title: "Funnel Design & Engagement Strategy",
    text: "Build authority and visibility through speaking engagements, media contributions, and strategic PR.",
  prefix: "",
    suffix: "+",
    aosDelay: "700",
  },
  {
    image: "/images/home/stakeholder-specific.png",
    title: "Stakeholder-Specific Collateral",
    text: "Develop customized materials for government reviewers, enterprise buyers, or strategic partners to drive aligned outcomes.",
  prefix: "",
    suffix: "+",
    aosDelay: "700",
  },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <>
      <Root ref={ref}>
        <div className="desktop_container">
          <h2 className="h2 mb-5 text-lightBlack text-center">
          Our marketing services include:</h2>

          <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-between">
            {STATS.map((s, ind) => {
              return (
                <Stat
                  inView={inView}
                  ind={ind}
                  key={ind}
                  image={s.image}
                  title={s.title}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  text={s.text}
                  aosDelay={s.aosDelay}
                />
              );
            })}
          </div>
        </div>
      </Root>
    </>
  );
};

export default StatsSection;

const Stat = ({
  ind,
  image,
  title,
  prefix,
  suffix,
  text,
  inView,
  aosDelay,
}) => {
  // const countUpRef = useRef(null);

  // const { pauseResume } = useCountUp({
  //   ref: countUpRef,
  //   end: parseInt(title.replace(/[^a-zA-Z0-9 ]/g, "")),
  //   prefix: prefix,
  //   suffix: suffix,
  //   delay: 1000,
  //   duration: 1.8,
  //   separator: ",",
  // });

  // useEffect(() => {
  //   if (inView && pauseResume) {
  //     pauseResume();
  //   }
  // }, [inView, pauseResume]);

  return (
    <div className="flex flex-col items-start" key={ind}>
      <div>
        <div className="img w-32 aspect-square relative  ">
          <Image src={image} layout="fill" />
        </div>
      </div>
      {/* <div className="title w-72 text-center" ref={countUpRef}></div> */}

     
      <div className="title">{title}</div>

      <div className="text text-lightBlack">{text}</div>
    </div>
  );
};

const Root = styled.section`
  background-color: var(--primaryLight2);
  padding: 4rem 0;

  .title {
    font-size: 1.7rem;
    line-height: 120%;
    color: var(--lightBlack);
    font-weight: 700
  }
  .title span {
    font-weight: 900;
    font-family: Gilroy;
  }
  .text {
    font-size: 1.3rem;
    font-weight: 500;
    margin-top:1rem
  }
  .desktop_container img{
  }

  @media screen and (min-width: 2000px) {
    .title {
      /* font-size: calc(26px + 2vw); */
    }
    .text {
      /* font-size: calc(15px + 0.7vw); */
    }
  }

  @media screen and (max-width: 1280px) {
    .title {
      font-size: 4rem;
    }
  }

  @media screen and (max-width: 1024px) {
    .title {
      /* font-size: calc(26px + 2vw); */
      font-size: 2.5rem;
    }
    .text {
      /* font-size: calc(15px + 0.7vw); */
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 767px) {
    .title {
      /* font-size: calc(26px + 2vw); */
      font-size: 2rem;
    }
    .text {
      /* font-size: calc(15px + 0.7vw); */
      font-size: 1.2rem;
    }
  }
`;
