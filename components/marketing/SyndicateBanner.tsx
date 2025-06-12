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
          If your technology deserves to be understood, funded, and adopted — your marketing should be designed to make that inevitable. <a href="/contact" className="text-yellowBase">Contact us</a> to discuss how we can help you build the communications infrastructure to match your ambition.
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
