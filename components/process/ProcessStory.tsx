import Plus, { Gaps } from "components/Dots";
import React from "react";
import styled from "styled-components";

const Items = [
  {
    image: "/images/process/planjourney.svg",
    title: "1. Planning the Journey",
    subTitle:
      "In our first meeting, we define your vision for success. With the finish line in place, we discuss strategies, options, and milestones to manifest that vision into reality. ",
    // ratio: 0.99,
    type: "gap",
  },
  {
    image: "/images/process/defineaudience.svg",
    title: "2. Defining Your Audience",
    subTitle:
      "In order to create a persuasive presentation, we need to understand your audience. What motivates them to act? What is their background and experience with the concepts you want to convey?  ",
    // ratio: 0.69,
    type: "gap",
  },
  {
    image: "/images/process/research.svg",
    title: "3. Hands-on Research",
    subTitle:
      " Our team will comb through your company's marketing collateral and conduct a series of interviews to understand your company and its technology. ",
    // ratio: 0.94,
    type: "gap",
  },
  {
    image: "/images/process/craft.svg",
    title: "4. Crafting Your Story",
    subTitle:
      "Our team storyboards, refines, and crafts a cohesive narrative with supporting visuals that champion your company and innovation.",
    // ratio: 0.95,
    type: "gap",
  },
  {
    image: "/images/process/gift.svg",
    title: "5. Delivering Assets",
    subTitle:
      "We deliver your story in whatever format best suits your needs, from single page executive summaries to beautiful powerpoints with extended appendices.",
    // ratio: 0.87,
    type: "plus",
  },
  {
    image: "/images/process/coach.svg",
    title: "+ Coaching ",
    subTitle:
      "Need help prepping for your big pitch? We offer one-on-one coaching sessions to help ensure you shine. ",
    // ratio: 1.01,
    type: "plus",
  },
  {
    image: "/images/process/maintenance.svg",
    title: "+ Maintenance ",
    subTitle:
      "Companies grow and stories change. We are there to help ensure that your presentation doesn't fall into disrepair. Let us make sure that your deck is always stage-ready. ",
    // ratio: 1.02,
  },
];

function ProcessStory() {
  return (
    <Root className="md:p-10 p-5">
      <div className="desktop_container">
        {/* <h1 className="h1">
          Our Process is Your Story's <br /> Best Chance for Success.
        </h1> */}
        <div className="md:my-20 my-7 xl:px-20 lg:px-10">
          {Items.map((itm, ind) => {
            return (
              <div key={ind}>
                <div>
                  <div className="md:flex gap-10 md:my-0 my-10">
                    <div>
                      <div
                        className="img md:w-60 w-48 aspect-square relative flex flex-col items-center "
                        // style={{ aspectRatio: itm.ratio }}
                      >
                        <img className="" src={itm.image} alt="loading..." />
                        {itm.type === "gap" && <Gaps countGap={3} />}
                        {itm.type === "plus" && <Plus countPlus={1} />}
                      </div>
                    </div>
                    <div className="max-w-5xl">
                      <div className="title text-primaryLight1 md:my-0 my-3">
                        {itm.title}
                      </div>
                      <div className="p1 font-semibold xl:pr-20 text-lightBlack">
                        {itm.subTitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <Dots count={4} /> */}
              </div>
            );
          })}
        </div>
      </div>
    </Root>
  );
}

export default ProcessStory;

const Root = styled.section`
  /* .help_section_wrapper {
    display: flex;
    gap: 8rem;
    margin-top: 3rem;
  } */
  .title {
    font-weight: 800;
    color: var(--buttonBg);
    /* font-size: 3rem; */
  }
  .guaranty_wrapper {
    background-color: var(--yellowBase);
    padding: 2rem;
    margin-top: 5rem;
    border-radius: 2rem;
    .p1 {
      font-size: 1.1rem;
    }
    .img_div {
      aspect-ratio: 1;
      margin: 0 1.5rem;
    }
  }
  /* .dot {
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
  } */
`;
