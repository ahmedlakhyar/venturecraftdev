// import StatSection from "./StatSection";
import styled from "styled-components";
import Image from "next/image";
import CountUp, { useCountUp } from "react-countup";
import { useState, useRef, useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";

const STATS = [
  {
    image: "/images/home/business-model.png",
    title: "Business Model Architecture",
    text: "Clarifying the economic engine of your business through models tailored to your technology, sector, and risk profile. We facilitate decisions around licensing vs. direct sales, platform vs. product, and CAPEX vs. OPEX structures, backed by customer data and competitive context.",
    prefix: "",
    suffix: "+",
    aosDelay: "100",
  },
  {
    image: "/images/home/market-sizing.png",
    title: "Market Sizing & Segmentation",
    text: "Rigorous quantification of your total addressable market (TAM), serviceable segments, and obtainable share—with sensitivity to pricing constraints, channel complexity, and regulatory gatekeepers. We ensure your projections are credible, data-backed, and actionable.",
    prefix: "$",
    suffix: "M+",
    aosDelay: "300",
  },
  {
    image: "/images/home/customer-stakeholder.png",
    title: "Customer & Stakeholder Mapping",
    text: "Identifying key buyers, influencers, and adoption drivers across the ecosystem—not just the end-user. We conduct structured discovery, advisory panel development, and field engagement strategies to validate product-market fit and strategic positioning.",
   prefix: "",
    suffix: "M+",
    aosDelay: "500",
  },
  {
    image: "/images/home/competitive.png",
    title: "Competitive & Benchmarking Analysis",
    text: "Analyzing direct competitors, substitute solutions, and adjacent technologies with an emphasis on unmet needs, IP landscapes, and differentiation vectors. We provide not just who’s out there, but how to win.",
   prefix: "",
    suffix: "+",
    aosDelay: "700",
  },
  {
    image: "/images/home/go-to.png",
    title: "Go-to-Market Planning",
    text: "Roadmapping the sequence and structure of product launch, market entry, and scale-up. This includes partnership strategy, sales channels, pilot design, customer onboarding frameworks, and early traction planning.",
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
    image: "/images/home/milestone-planning.png",
    title: "Revenue Modeling & Milestone Planning",
    text: "Building detailed, phased commercialization roadmaps that include near-term revenue opportunities, scale milestones, and capital requirements. Our models align business objectives with technical timelines and investor expectations.",
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
          Our commercialization strategy services include:</h2>

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
