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
    image: "/images/story/tim.png",
    title: "Tim Raines",
    subTitle:
      "CEO and founder of Rare Innovation, a consulting firm for new ventures that focuses on market approach strategies, product development strategies, and IP assessment.",
    ratio: 1,
  },
  {
    id: 3,
    image: "/images/story/ben.png",
    title: "Ben Bickerstaff",
    subTitle:
      "Serial entrepreneur and founder of Bennovative Strategies, a consultancy that helps technology startups forge their own path to market.",
    ratio: 1,
  },
  {
    id: 4,
    image: "/images/story/emilie.jpeg",
    title: "Dr. Emilie Clemmens",
    // subTitle:
    //   "Owner of Artemis Editing, a grant review specialist, educator, and former lab scientist with deep experience in biomedical research grant applications.",
      subTitle:
      "Principal and founder of Artemis Editing, a grant review specialist, educator, and former lab scientist scientist and engineer with deep experience in grant applications for federal R&D funding.",
    ratio: 1,
  },
];

const SyndicateBanner = () => {
  return (
    <>
      <Root>
        <div
          className="desktop_container syndicate_wrapper lg:p-10 md:p-10 md:pb-16 py-10 px-5"
          
        >
          <h2 className="h2 text-whiteColor">What is TABA, and Why It Matters</h2>
          <p className="p1 text-whiteColor md:pl-14 md:mt-5 mt-1">
          Many agencies offer additional, non-dilutive funding under the Technical and Business Assistance (TABA) program—designed to help SBIR recipients strengthen their commercialization strategy. TABA funds are separate from your R&D budget and can be used to engage external experts like us to support market analysis, IP strategy, regulatory planning, and investor outreach.
 </p>
          <p className="p1 text-whiteColor md:pl-14 md:mt-5 mt-1">
          By identifying us as your TABA provider in your proposal, you may be eligible for $6,500 (Phase I) or $50,000 (Phase II) in supplemental funding—unlocking our support at no cost to you. We can help you structure your TABA request and ensure it aligns with agency expectations.</p>

          <p className="p1 text-whiteColor md:pl-14 md:mt-5 mt-1">
         <a href="/contact" className="text-yellowBase">Contact us</a> to learn how TABA funding can extend your capabilities and give your commercialization plan a competitive edge.
 </p>
         
          

          
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
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    margin: 3rem auto 0;
  }

  @media screen and (max-width: 767px) {
    margin: 3rem 0;

    .syndicate_wrapper {
      border-radius: 10px;
    }
  }
`;
