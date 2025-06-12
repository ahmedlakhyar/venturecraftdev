import styled from "styled-components";
import Image from "next/image";
import Slider from "react-slick";
import { useRef, useEffect, useState } from "react";

const CLIENTS = [
  {
    id: 1,
    image: "/images/home/testimonial/alexis-ohanian.jpeg",
    title: "Alexis Ohanian",
    subTitle: "Partner @ Y-Combinator",
    text: `"VentureCraft’s managing partner, Shaun, is an innovative problem solver who would often arrive at solutions none of us had even considered. Furthermore, a number of the projects he did were as analytical as they were artistic. That obsessive attention to detail as both an artist and researcher undoubtedly sets him apart from most."`,
  },
  {
    id: 2,
    image: "/images/home/testimonial/Andris-Merkulovs.jpeg",
    title: "Andris Merkulovs",
    subTitle: "CEO @ Monetizr",
    text: `"Shaun and his team provided a VERY hands-on and detailed review of our seed fundraising deck. Our pitch review session was like a mentorship one on one. Literally on the same day after making pitch deck adjustments, we closed an angel investor. 5 days later, we signed a SAFE note for $25k. And 3 more in the following week. Shaun's feedback really made an impact!"`,
  },

  {
    id: 3,
    image: "/images/home/testimonial/peter-kassel.jpeg",
    title: "Peter Kassel",
    subTitle: "CEO @ HealthySole",
    text: `"Working with VentureCraft was an absolute pleasure! Within 30 minutes of speaking together, we pinpointed weak spots in my current company presentation and bounced ideas back and forth about how best to get things right. Working with Shaun was smooth and productive. He was always prepared and delivered items on time. Working with Shaun was a breath of fresh air. I am using the materials we developed together today and believe my company and our prospects are better for it."`,
  },

  {
    id: 4,
    image: "/images/home/testimonial/veronica-fil.jpeg",
    title: "Veronica Fil",
    subTitle: "CEO @ Grounded Foods",
    text: `"Shaun provided me with ongoing support and advice while I prepared for our company's next investment round. His deep experience in preparing startups for success—and funding—is clearly evident, and was a huge asset in helping us along the way."`,
  },
  {
    id: 5,
    image: "/images/home/testimonial/john-halsema.jpeg",
    title: "John Halsema",
    subTitle: "COO & CTO @ ARES Security Corporation",
    text: `"Shaun provided excellent advice for our commercialization plan. His insights into how to put together a successful plan for our business and rapid understanding of our technology and business process greatly contributed to a plan upgrade that I'm quite confident will lead to successfully winning our project."`,
  },
  {
    id: 6,
    image: "/images/home/testimonial/Carlton-Osborne.jpeg",
    title: "Carlton Osborne",
    subTitle: "CEO @ AnimalBiome",
    text: `"Often pitch feedback is either too high level or so focused on each slide that the overall point is lost. Shaun was able to provide useful feedback and guide the rest of the reviewers to provide equally useful feedback. Highly recommend!!!"`,
  },
  {
    id: 7,
    image: "/images/home/testimonial/Garret-Grajek.jpeg",
    title: "Garret Grajek",
    subTitle: "CEO @ YouAttest",
    text: `"Shaun is fantastic! Simply put. He is the rare professional who is both a subject matter expert (in advising on emerging companies) - and easy to work with. His "we're in this together" manner makes taking his constructive criticism easy to take and very effective."`,
  },
  {
    id: 8,
    image: "/images/home/testimonial/Jonas-Bordo.jpeg",
    title: "Jonas Bordo",
    subTitle: "CEO @ Dwellsy",
    text: `"I went to VentureCraft as we were evolving our enterprise fundraising presentation to reflect progress made at Dwellsy. With his thoughtful guidance, we were able to improve communication of our value proposition to investors and VentureCraft’s team became valued contributors in our successful funding. They are exceptionally skilled at taking technical concepts and figuring out how to convey them in ways that resonate with audiences. If you are in need of upgrading your pitch materials, I highly recommend speaking to VentureCraft."`,
  },
  {
    id: 9,
    image: "/images/home/testimonial/Heidi-Kershaw.jpeg",
    title: "Heidi Kershaw",
    subTitle: "CEO @ Square in the Eye",
    text: `"VentureCraft brings experience and technical expertise into every mentoring conversation. Their speciality is guiding the storytelling process to make a startup interesting to investors. Their team is uniquely savvy in humanizing structured conversations so they are comfortable and productive - they are also great at making the science-y details more consumable. I appreciate their feedback (always!) and they are a joy to work with!"`,
  },
  {
    id: 10,
    image: "/images/home/testimonial/Kevin-Rosenthal.jpeg",
    title: "Kevin Rosenthal",
    subTitle: "M.S., CEO @ ArchGuard",
    text: `"I worked with VentureCraft on revising and finalizing a pitch presentation. They are extremely approachable, detail-oriented, and genuinely care about helping their clients as much as possible. I'm grateful for having worked with VentureCraft and look forward to collaborating with them on future work!"`,
  },
  {
    id: 11,
    image: "/images/home/testimonial/Shekhar-Gupta.jpeg",
    title: "Shekhar Gupta",
    subTitle: "CEO @ MyAniML",
    text: `"VentureCraft has been very helpful in not only deck preparation but helping me in the skill sets needed to talk with an investor. They are always available to answer any questions and are a valuable member of my advisor group. VentureCraft’s managing partner, Shaun, is very knowledgeable in all aspects of business growth and investments."`,
  },
  {
    id: 12,
    image: "/images/home/testimonial/Rolan-Reichel.webp",
    title: "Rolan Reichel",
    subTitle: "CEO @ Arrow Ai",
    text: `"Shaun is professional, focused and helpful. His deep understanding of the start up community shines through in every way."`,
  },
  {
    id: 13,
    image: "/images/home/testimonial/ajay-jotwani.jpeg",
    title: "Ajay Jotwani",
    subTitle: "CEO @ i2Chain",
    text: `"Shaun, your feedback and mentorship greatly appreciated. I strongly recommend you to the startup founders that want to make their pitch more impactful and their proposition more meaningful."`,
  },
  {
    id: 14,
    image: "/images/home/testimonial/Chase-Palmieri.jpeg",
    title: "Chase Palmieri",
    subTitle: "CEO @ Credder",
    text: `"Shaun and his team have been an enormous asset throughout Credder's recent fundraise, providing actionable feedback and insights that have already proven to be valuable as we continue our financing. He and his team are truly on the side of founders and entrepreneurs, helping them hone their skills so that they can acquire the necessary resources and get back to building their business. I'm sure I'm just one of many very appreciative founders to have had the opportunity to learn from Shaun's expertise."`,
  },
  {
    id: 15,
    image: "/images/home/testimonial/Tanya-Miramontes.jpeg",
    title: "Tanya Miramontes",
    subTitle: "CFO @ Reality Smash",
    text: `"Shaun was so wonderful to work with and really helped us refine and improve our investor Pitch Deck. He listened to us and communicated his feedback to us in a smart, friendly and professional manner. We appreciate the consideration and care he put into helping us grow and level up our presentation and storytelling skills. There were so many resources that he provided also where we were able to pull ideas from."`,
  },
  {
    id: 16,
    image: "/images/home/testimonial/Vadim-Asadov.jpeg",
    title: "Vadim Asadov",
    subTitle: "CEO @ Lipolysis Robotics",
    text: `"I had a very intensive acceleration process where Shaun played one of the most valuable roles. As the results of multiple conversations and demos for Shaun and his colleagues, LRI’s presentation was not only improved, but revised at a very deep strategic level. Even after 20 years in startups it was an exceptional case of real experts and mentors engagement."`,
  },
  {
    id: 17,
    image: "/images/home/testimonial/James-Gallagher.jpeg",
    title: "James Gallagher",
    subTitle: "CEO @ BestLegalChoice",
    text: `"As a startup founder and career entrepreneur having an ally in Shaun is instrumental. He provides a unique set of values as a J.D. and marketing expert. His advice has enabled us to effectively identify our language market fit for our pitch as well as help us to get clarity on how we ought to share our story arch so that it is appealing to the masses. If you're a startup founder or entrepreneur you will greatly benefit from strategizing with Shaun and his team. Keep up the awesome work!"`,
  },
  {
    id: 18,
    image: "/images/home/testimonial/Dave-Smith.jpeg",
    title: "Dave Smith",
    subTitle: "CEO @ SAFE Steps",
    text: `"Shaun is a true professional and leader with outstanding communication skills as we worked to optimize the pitch deck for SAFE Steps. Shaun's direction and constructive criticism have been invaluable as we navigate a journey to successful outcomes for our company. It's a profound pleasure to be able to collaborate with a person having tremendous insights and empathy as Shaun. He is an absolute asset helping others achieve their goals."`,
  },
  {
    id: 19,
    image: "/images/home/testimonial/Max-Orozco.png",
    title: "Max Orozco",
    subTitle: "Head of Product @ Lumeum",
    text: `"As entrepreneurs, honing in on our messaging to stakeholders is critical. Particularly when addressing the concerns of an industry like healthcare. Shaun was instrumental to our team to frame our product and clearly articulate our value. Shaun met with us on several occasions across numerous iterations of our pitch deck and gave actionable input to improve our presentation."`,
  },
  {
    id: 20,
    image: "/images/home/testimonial/slowa-solovyov.jpg",
    title: "Dr. Slowa Solovyov",
    subTitle: "Brookhaven Technology Group",
    text: `"VentureCraft consulted with our company, Brookhaven Technology Group, on successfully developing a Phase II SBIR commercialization plan. His insight on presenting a convincing business case and identifying business risks was invaluable. Shaun helped us with drafting the industry support letters and integrating them into the business plan narrative. Overall, we had a very positive experience working with Shaun."`,
  },
  {
    id: 21,
    image: "/images/home/testimonial/lisa-avila.jpg",
    title: "Lisa Avila",
    subTitle: "CEO, Kitware, Inc.",
    text: `"Shaun's targeted customer discovery and competitor analysis helped us sharpen the commercialization strategy for our DOE Phase II SBIR proposal, and his editorial insights strengthened the clarity and focus of the final commercialization plan. He was responsive, insightful, and easy to work with—a partner who delivered exactly what we needed, when we needed it."`,
  },
  {
    id: 22,
    image: "/images/home/testimonial/daina-andries.jfif",
    title: "Daina Andries",
    subTitle: "Co-Founder Epidaurus.",
    text: `"Shaun helped our team at Epidaurus Health navigate our early fundraising and go-to-market journey. He brings a dynamic combination of strategic clarity, legal acumen, and emotional intelligence to the table. In addition to helping sharpen our early investor narrative, Shaun also collaborated with us on a pricing strategy oriented toward long-term alignment with our first customers, anchored in insights gained through thoughtful relationship-building and nuanced listening. Shaun understands both the head and heart of startup leadership, and we’re deeply grateful for his support!"`,
  },
];

const OurClients = () => {
  // const heightGet = useRef(null);
  // const [heightSet, setHeightSet] = useState(0);

  // useEffect(() => {
  //   let height = heightGet.current.clientHeight + 44;
  //   setHeightSet(height);
  // }, [heightGet]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    // adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          // dots: false,
        },
      },
    ],
  };

  return (
    <>
      <Root>
        <div className="desktop_container md:px-0 px-8">
          <h2 className="h2 text-center text-whiteColor">
            Our Clients are <span className="text-yellowBase">Crushing it</span>
          </h2>
          <div className="card_wrapper">
            <div className="card_wrapper_height">
              <Slider {...settings}>
                {CLIENTS.map((s, ind) => {
                  return (
                    <div key={ind}>
                      <div className="card mx-[10px]">
                        <div className="flex items-center gap-5 md:flex-row flex-col">
                          <div className="client_img w-28 aspect-square relative">
                            <Image src={s.image} layout="fill" />
                          </div>
                          <div className="md:w-auto w-full">
                            <div className="title font-semibold text-whiteColor">{s.title}</div>
                            <div className="sub_title font-normal text-yellowBase">{s.subTitle}</div>
                          </div>
                        </div>
                        <div className="p1 leading-normal font-normal text-whiteColor mt-5">{s.text}</div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </Root>
    </>
  );
};

export default OurClients;

const Root = styled.section`
  background: url("/images/home/clients-testimonials.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 4rem 0;

  .slick-prev:before,
  .slick-next:before {
    font-size: 2rem;
  }
  .slick-next {
    right: -22px;
  }
  .slick-prev {
    left: -35px;
  }
  .slick-dots li button:before {
    font-size: 2.2rem;
  }

  .desktop_container {
    width: 90%;
  }
  .title {
    font-size: 2.2rem;
  }
  .sub_title {
    font-size: 2rem;
  }

  .card_wrapper {
    padding: 3rem 0 8rem;
    .card {
      background-color: var(--lightBlack);
      border-radius: 2rem;
      padding: 4rem;
      height: 100%;

      .client_img {
        border-radius: 10rem;
        overflow: hidden;
      }
    }

    /* .slick-track {
      display: flex !important;
    } */

    /* .slick-slide {
      height: inherit !important;
    } */

    /* .slick-slide > div,
    .slick-slide > div > div {
      height: 100%;
    } */

    .slick-dots {
      bottom: -100px;

      @media screen and (max-width: 500px) {
        display: flex !important;
        overflow: hidden;
        gap: 10px;
      }
    }
    .slick-dots li {
      margin: 0 14px;
    }
    .slick-dots li button:before {
      color: var(--whiteColor);
      opacity: 1;
    }
    .slick-dots li.slick-active button:before {
      color: lightgray;
    }
  }

  @media screen and (min-width: 2000px) {
    .title {
      /* font-size: calc(20px + 1vw); */
    }
    .sub_title {
      /* font-size: calc(18px + 1vw); */
    }
    .slick-dots li button:before {
      /* font-size: calc(15px + 0.7vw); */
    }
    .card_wrapper .slick-dots li {
      margin: 0 25px;
    }
    .slick-prev:before,
    .slick-next:before {
      /* font-size: calc(20px + 1vw); */
    }
    .slick-next {
      right: -45px;
    }
    .slick-prev {
      left: -70px;
    }
    .card_wrapper .card .client_img {
      width: calc(5rem + 3vw);
    }
  }
  @media screen and (max-width: 1024px) {
    .desktop_container {
      width: 90%;
    }
    .card_wrapper .card {
      padding: 2rem;
    }
    .title {
      /* font-size: calc(20px + 1vw); */
      font-size: 1.8rem;
    }
    .sub_title {
      /* font-size: calc(18px + 1vw); */
      font-size: 1.5rem;
    }
    .slick-dots li button:before {
      /* font-size: calc(15px + 0.7vw); */
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 820px) {
    .card_wrapper .slick-dots li {
      margin: 0 7px;
    }
    .card_wrapper .slick-dots li button:before {
      /* font-size: calc(12px + 0.7vw); */
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 3rem 0 5rem;
    .card_wrapper .slick-dots li button:before {
      /* font-size: calc(12px + 0.7vw); */
      font-size: 0.8rem;
    }
    .card_wrapper .slick-dots li {
      margin: 0;
    }
    .title {
      /* font-size: calc(20px + 1vw); */
      font-size: 1.5rem;
    }
    .sub_title {
      /* font-size: calc(18px + 1vw); */
      font-size: 1.3rem;
    }
    .desktop_container {
      width: 100%;
      .card_wrapper {
        padding: 3rem 0 1rem;
        .card {
          border-radius: 10px;
          padding: 2rem 1.5rem 2rem;
          margin: 0rem;
          height: 100%;
        }
        .slick-dots {
          bottom: -70px;
        }
      }
    }
  }
`;
