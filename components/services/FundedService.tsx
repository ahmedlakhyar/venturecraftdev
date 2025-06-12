import Image from "next/image";
import styled from "styled-components";

const SERVICES = [
  {
    image: "/images/service/glove-deck.svg",
    text: "Full pitch deck development with beautiful infographics tied together with a cohesive, investable narrative.",
    // ratio: 0.93,
  },
  {
    image: "/images/service/stopwatch.svg",
    text: "One-on-One pitch coaching to help prepare for an upcoming meeting or event.",
    // ratio: 1.02,
  },
  {
    image: "/images/service/door.svg",
    text: "Direct introductions or outreach campaigns to investors.",
    // ratio: 1.06,
  },
];

const FundedService = () => {
  return (
    <>
      <Root>
        <div className="desktop_container funded_services">
          <h2 className="h2 text-whiteColor text-center">
            What our <span className="text-yellowBase">Get Funded</span>{" "}
            services include:
          </h2>
          <div className="three_services flex md:flex-row flex-col md:mt-20 mt-14 xl:gap-20 md:gap-8 gap-10">
            {SERVICES.map((s, ind) => {
              return (
                <div
                  key={ind}
                  className="flex flex-col items-center gap-8 text-center flex-1"
                >
                  <div
                    className="img 2xl:w-96 aspect-square xl:w-56 lg:w-48 md:w-36 w-48 relative"
                    // style={{ aspectRatio: s.ratio }}
                  >
                    <Image src={s.image} layout="fill" />
                  </div>
                  <div className="p1">{s.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Root>
    </>
  );
};

export default FundedService;

const Root = styled.section`
  margin-top: 5rem;

  .desktop_container {
    width: 90%;
  }

  .h2, .h2 span {
    font-weight: 600;
    font-family: Gilroy;
  }

  .funded_services {
    background-color: var(--lightBlack);
    padding: 5rem 4rem 6rem;
    border-radius: 2rem;

    .p1 {
      color: var(--whiteColor);
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1024px) {
    .funded_services {
      padding: 3rem 1rem 4rem;
    }
  }

  @media screen and (max-width: 767px) {
    .funded_services {
      border-radius: 10px;
    }
  }
`;
