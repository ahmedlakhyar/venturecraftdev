// import StatSection from "./StatSection";
import styled from "styled-components";
import Image from "next/image";
import CountUp, { useCountUp } from "react-countup";
import { useState, useRef, useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";

const STATS = [
  {
    image: "/images/pitches.png",
    title: "1,000+",
    text: "Companies",
    prefix: "",
    suffix: "+",
    aosDelay: "100",
  },
  {
    image: "/images/capital.png",
    title: "$400M+",
    text: "Capital Raised",
    prefix: "$",
    suffix: "M+",
    aosDelay: "300",
  },
  {
    image: "/images/views.png",
    title: "600M+",
    text: "Customers Reached",
    prefix: "",
    suffix: "M+",
    aosDelay: "500",
  },
  {
    image: "/images/industries.png",
    title: "20+",
    text: "Industries",
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
          <h2 className="h2 mb-5 text-lightBlack">
          Join hundreds of companies who’ve chosen us to guide their commercialization and fundraising journeys.
          </h2>

          <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 justify-between">
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
    <div className="flex flex-col items-center" key={ind}>
      <div>
        <div className="img w-64 aspect-square relative  ">
          <Image src={image} layout="fill" />
        </div>
      </div>
      {/* <div className="title w-72 text-center" ref={countUpRef}></div> */}

      <div className="title text-center">
        {" "}
        {inView && (
          <CountUp
            prefix={prefix}
            suffix={suffix}
            end={parseInt(title.replace(/[^a-zA-Z0-9 ]/g, ""))}
            duration={2}
            separator=","
          />
        )}
      </div>

      <div className="text text-lightBlack">{text}</div>
    </div>
  );
};

const Root = styled.section`
  background-color: var(--primaryLight2);
  padding: 4rem 0;

  .title {
    font-size: 4.5rem;
    line-height: 120%;
    color: var(--lightBlack);
  }
  .title span {
    font-weight: 900;
    font-family: Gilroy;
  }
  .text {
    font-size: 1.7rem;
    font-weight: 700;
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
