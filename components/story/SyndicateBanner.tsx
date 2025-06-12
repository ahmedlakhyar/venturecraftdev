import styled from "styled-components";
import Image from "next/image";

const STRATEGIES = [
  {
    id: 1,
    image: "/images/story/earle.png",
    title: "Earle Hager",
    subTitle:
      "Managing Partner of The Neutrino Donut, a consultancy focused on the management and commercialization of science. Thought leader with an understanding of commercialization processes from early-stage technologies through the development of business models and execution.",
    ratio: 1,
  },
  {
    id: 2,
    image: "/images/story/earle.png",
    title: "Ahmed Zobi",
    subTitle:
      "Managing Partner of ArkaNova Partners and founder of Syntr Health Technologies, a medtech company behind the FDA-cleared SyntrFuge System. Biomedical engineer and SBIR-funded entrepreneur with expertise in microfluidics, biomechanics, and federal funding strategy. Recognized by Forbes for his leadership in advancing early-stage medical technologies.",
    ratio: 1,
  },
  {
    id: 3,
    image: "/images/story/tim.png",
    title: "Tim Raines",
    subTitle:
      'CEO and founder of Rare Innovation, a consulting firm for new ventures offering full service Business Development strategy and execution with a focus on market approach strategies and Go-to-Market partnerships. Tim is the author of Amazon #1 New Release, "The Handbook for Commercializing Alien Technologies".',
    ratio: 1,
  },
  {
    id: 4,
    image: "/images/story/ben.png",
    title: "Ben Bickerstaff",
    subTitle:
      "Techstars-backed entrepreneur and founder of Catalyzing Concepts, a consulting firm guiding startups, non-profits, and R&D teams through funding and commercialization. Creator of GrantMatch and CEO of SIPP, Ben brings deep expertise in federal funding strategy and has supported over 200 innovation projects across agencies like DOE, DOD, NIH, and USDA.",
    ratio: 1,
  },
  {
    id: 5,
    image: "/images/story/emilie.jpeg",
    title: "Dr. Emilie Clemmens",
    // subTitle:
    //   "Owner of Artemis Editing, a grant review specialist, educator, and former lab scientist with deep experience in biomedical research grant applications.",
      subTitle:
      "Principal and founder of Artemis Editing, a grant review specialist, educator, and former lab scientist scientist and engineer with deep experience in grant applications for federal R&D funding.",
    ratio: 1,
  },
  {
    id: 6,
    image: "/images/story/emilie.jpeg",
    title: "Christopher J. Allen, P.E.",
    subTitle:
      "Licensed professional engineer and Managing Member of CJA Systems, a consultancy specializing in innovation commercialization. Brings over 20 years of cross-sector experience—from Fortune 500s to startups—spanning aerospace, energy, and consumer goods, with expertise in R&D, project management, and go-to-market strategy.",
    ratio: 1,
  },
  {
    id: 7,
    image: "/images/story/emilie.jpeg",
    title: "BreAnn Brown",
    subTitle:
      "CEO and Founder of Orange Canyon Consulting, a consulting firm that specializes in helping early stage companies commercialize new technologies through the development of business plans, commercialization plans and funding strategies.",
    ratio: 1,
  },
  {
    id: 8,
    image: "/images/story/emilie.jpeg",
    title: "Adam Bates",
    subTitle:
      "Specialist in commercializing advanced energy, medical, and ICT technologies, with a strong track record of guiding innovations to market across both U.S. and Asian regions.",
    ratio: 1,
  },
  {
    id: 9,
    image: "/images/story/emilie.jpeg",
    title: "Len Denton",
    subTitle:
      "Founder of Boost Innovation Group, a consultancy supporting high-tech startups and university research through SBIR/STTR and DOE Energywerx programs. Global technology commercialization strategist with 30+ years of executive leadership at companies like GE and MCI. Has led innovation programs across six countries and worked with over 1,500 emerging technologies and ventures.",
    ratio: 1,
  },
];

const SyndicateBanner = () => {
  return (
    <>
      <Root>
        <div
          className="desktop_container syndicate_wrapper lg:p-28 md:p-10 md:pb-16 py-10 px-5 lg:pr-56"
          
        >
          <h2 className="h2 text-whiteColor">The Syndicate</h2>
          <p className="p1 text-whiteColor md:pl-14 md:mt-5 mt-1">
          Our team consists of experienced operators, researchers, analysts, and sector specialists who collectively bring decades of commercialization experience to each engagement. We support clients across disciplines with professionals who have executed at the highest levels of industry, government, academia, and capital markets.
          </p>
          <p className="p1 text-whiteColor md:pl-14 md:mt-5 mt-1">
          In addition to our core team, we are a founding member of The Commercialization Syndicate, an extensive network of collaborators and subject matter experts. This includes former tech transfer officers, regulatory strategists, IP attorneys, manufacturing advisors, clinical development leads, and senior executives with experience in global expansion and M&A.
          </p>
          <p className="p1 text-whiteColor md:pl-14 md:mt-5 mt-1">
          Our structure enables us to assemble bespoke teams tailored to the specific demands of each engagement. Whether you're commercializing a new therapeutic, scaling dual-use hardware, or navigating a complex regulatory environment, we are equipped to deliver the expertise and support that drives success.
          </p>
          <h2 className="h2 md:mb-20 mb-10 md:pl-14 md:mt-5 mt-1">
          Our approach is grounded in cross-disciplinary fluency. We understand regulatory hurdles, capital markets, deep tech timelines, and customer psychology—and we bring that understanding to bear in every engagement. We are operators and strategists, designers and analysts, scientists and storytellers. That’s what effective commercialization requires.
          </h2>
          

          <div className="strategies_wrapper flex flex-wrap items-start">
            {STRATEGIES.map((s, ind) => {
              return (
                <div key={ind} className="w-full md:w-1/2 gap-10 p-7">
                  <div>
                    <div
                      className="img w-48 relative"
                      style={{ aspectRatio: s.ratio }}
                    >
                      <img src={s.image} className="w-full rounded-[2.7rem]" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="title text-yellowBase font-semibold">
                      {s.title}
                    </div>
                    <div className="p1 text-whiteColor font-medium">
                      {s.subTitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Root>
    </>
  );
};

export default SyndicateBanner;

const Root = styled.section`
  margin: 5rem 0;

  .desktop_container{
    width: 90%;
  }

  h2{
    font-size:2rem;
    color:#FFF
  }
  .syndicate_wrapper {
    background-color: var(--lightBlack);
    border-radius: 2rem;
  }
  .strategies_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 3rem auto 0;
  }

  @media screen and (max-width: 767px) {
    margin: 3rem 0;

    .syndicate_wrapper {
      border-radius: 10px;
    }
  }
`;
