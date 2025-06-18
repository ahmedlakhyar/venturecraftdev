import styled from "styled-components";
import Image from "next/image";
import { PrimaryButton } from "components/Button";
import { HiScale } from "react-icons/hi";
import Link from "next/link";
const HELPS = [
  {
    image: "/images/service/grant-1.png",
    title: "SBIR & Grant Support",
    text: "We have deep experience supporting applicants across all major SBIR/STTR agencies—including NIH, DOE, NSF, DoD, NASA, and others.",
    // ratio: 0.72,
    aosDelay: "100",
    link: "/sbir-and-grant-support",
  },
  {
    image: "/images/service/communication.png",
    title: "Commercialization",
    text: "Our firm delivers structured, phase-appropriate commercialization strategy for deep tech ventures across sectors.",
    // ratio: 0.72,
    aosDelay: "300",
    link: "/commercialization",
  },
  {
    image: "/images/service/marketing.png",
    title: "Marketing",
    text: "For emerging technologies, marketing isn’t just a matter of visibility — it’s a matter of comprehension.",
    // ratio: 0.72,
    aosDelay: "500",
    link: "/marketing",
  },
  {
    image: "/images/service/funding-platform.png",
    title: "Fundraising",
    text: "Access to capital is a critical inflection point for deep tech ventures—but raising it requires more than a good idea. Investors need conviction. Strategic partners need clarity.",
    // ratio: 0.96,
    aosDelay: "700",
    scale: "scale(1.1)",
    link: "/fundraising",
  },
  
];

const ServicesHome = () => {
  return (
    <>
      <Root>
        <div className="desktop_container">
        <h1 className="h1">Services</h1>
          <p className="p1 p1_width pb-5">
          We provide end-to-end commercialization support for science-driven ventures—spanning grant strategy, market validation, messaging, and investor readiness. Whether you’re pursuing SBIR/STTR funding, refining your business model, or preparing for a venture raise, our services are designed to meet you at your current stage and move you decisively toward scale. Backed by over two decades of experience, we help deep tech teams navigate complexity with clarity and purpose—from early-stage concept to exit.
          </p>
          <p className="p1 p1_width pb-5">
          Explore our core service areas below to learn more about how we tailor our expertise to your specific commercialization needs. 
          </p>
          
        


          {/* <div className="help_section_wrapper flex md:flex-row flex-col 2xl:gap-20 xl:gap-12 gap-10"> */}
         

       


          {/* <div className="help_section_wrapper flex md:flex-row flex-col 2xl:gap-20 xl:gap-12 gap-10"> */}
          <div className="mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HELPS.map((s, ind) => {
              return (
                <div
                  className="flex flex-col justify-between bg-white border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition h-full"
                  key={ind}
                >
                  <div>
                  <div className="h-1 w-6 mx-auto mb-2"></div>
                  
                    <img src={s.image} className="mx-auto mb-4 w-32"  />
                  <div className="title">{s.title}</div>
                  <div className="p1 text-lightBlack">{s.text}</div>
                  </div>
                  <div>
                  <Link href={s.link}>
                <a className="m-auto">
                <PrimaryButton
                
                text={
                  <>
                    <span className="lg md pr galaxy_pr">
                    <span className="text-yellowBase ">Read More</span>
                    
                    </span>
                    
                  </>
                  // <p>🔥</p>
                }
                fontSize="text-3xl"
              />
                </a>
              </Link>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
          

        
          
        </div>
      </Root>
    </>
  );
};

export default ServicesHome;

const Root = styled.section`
.desktop_container{
  margin-top: 60px
}
  .h1 {
    font-weight: 800;
    margin: 2.5rem 0;
  }

  .p1 {
    color: var(--lightBlack);
    font-size:1.7rem;
    font-weight:600


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
    font-size:2rem;
    margin-top:10px;
    margin-bottom:10px
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

  .bg-orange-500{
    background: #34b0ea
  }

  .button{
    padding: 1rem 2rem !important;
    font-size: 1.5rem;
    margin: 0 auto;
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
