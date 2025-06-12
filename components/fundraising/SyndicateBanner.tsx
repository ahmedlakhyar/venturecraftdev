import styled from "styled-components";
import Image from "next/image";


const SyndicateBanner = () => {
  return (
    <>
      <Root>
        <div
          className="desktop_container syndicate_wrapper lg:p-10 md:p-10 md:pb-16 py-10 px-5"
          
        >
          <p className="p1 text-whiteColor md:pl-14 mt-1">
          We also serve as trusted fundraising advisors for multiple accelerator programs and act as venture scouts for select investment firms and family offices. When you work with us, you gain more than materials—you gain the strategic insight and ecosystem access that investors respect.
         </p>
        
          <p className="p1 text-whiteColor md:pl-14 md:mt-5 mt-1">If you’re preparing to raise capital, we’ll make sure you’re ready for the room—and positioned to lead it. <a href="/contact" className="text-yellowBase">Contact us</a> to start the conversation. </p>
         
          
          
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
