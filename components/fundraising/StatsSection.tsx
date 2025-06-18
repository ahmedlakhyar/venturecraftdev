// import StatSection from "./StatSection";
import styled from "styled-components";
import Image from "next/image";
import CountUp, { useCountUp } from "react-countup";
import { useState, useRef, useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";

const STATS = [
  {
    image: "/images/Investment-narrative.png",
    title: "Investment narrative and data room preparation",
    text: "",
    prefix: "",
    suffix: "+",
    aosDelay: "100",
  },
  {
    image: "/images/pitch1.png",
    title: "Pitch deck creation and refinement",
    text: "",
    prefix: "$",
    suffix: "M+",
    aosDelay: "300",
  },
  {
    image: "/images/financial-modeling.png",
    title: "Financial modeling and capital planning",
    text: "",
   prefix: "",
    suffix: "M+",
    aosDelay: "500",
  },
  {
    image: "/images/market-validation.png",
    title: "Market validation and risk positioning",
    text: "",
   prefix: "",
    suffix: "+",
    aosDelay: "700",
  },
  {
    image: "/images/investor-pipeline.png",
    title: "Investor pipeline development and outreach strategy",
    text: "",
  prefix: "",
    suffix: "+",
    aosDelay: "700",
  },
  {
    image: "/images/founder-presentations.png",
    title: "Coaching for founder presentations and Q&A",
    text: "",
  prefix: "",
    suffix: "+",
    aosDelay: "700",
  },
  {
    image: "/images/strategic-preparation.png",
    title: "Strategic preparation for accelerators and demo days",
    text: "",
  prefix: "",
    suffix: "+",
    aosDelay: "700",
  },
  {
    image: "/images/home/milestone-planning.png",
    title: "Revenue Modeling & Milestone Planning",
    text: "",
  prefix: "",
    suffix: "+",
    aosDelay: "700",
  },
  {
    image: "/images/home/milestone-planning.png",
    title: "Revenue Modeling & Milestone Planning",
    text: "",
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
          Our investor readiness services include:</h2>

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
    font-size: 1.7rem !important;
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
    /*  font-size: 4rem; */
    }
  }

  @media screen and (max-width: 1024px) {
    .title {
      /* font-size: calc(26px + 2vw); */
      /* font-size: 2.5rem; */
    }
    .text {
      /* font-size: calc(15px + 0.7vw); */
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 767px) {
    .title {
      /* font-size: calc(26px + 2vw); */
      font-size: 1.3rem !important;
    }
    .text {
      /* font-size: calc(15px + 0.7vw); */
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }
`;