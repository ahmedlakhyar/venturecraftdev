import styled from "styled-components";
import { PrimaryButton } from "components/Button";
import Image from "next/image";

const OurMission = () => {
  return (
    <>
      <Root>
        <div className="desktop_container">
          <h2 className="h2 text-lightBlack">Our Mission</h2>
          <p className="p1 p1_width pb-4">
          Every deep tech breakthrough begins with a question no one else could answer. But asking bold questions isn’t the same as building a business. The path from research to real-world impact is full of blind spots — regulatory gaps, investor expectations, untested markets.
          </p>
          <p className="p1 p1_width pb-2 mb-8">
          <strong>That’s where we come in:</strong> helping innovators craft the business case, the market entry plan, and the story that gets their science <strong className="text-buttonBg">out of the lab and into the world.</strong>
          </p>
          <p className="p1 p1_width">
            <b>
              
            </b>
          </p>
          <div className="p1_width">
            <div className="img_div md:w-72 w-52 relative">
              <Image src="/images/sign.png" layout="fill" />
            </div>
          </div>
          <p className="p1 p1_width pt-5">Shaun Sanders, J.D.</p>
          <p className="p1 p1_width">Managing Partner</p>
        </div>
        <div>
        </div>
      </Root>
    </>
  );
};

export default OurMission;

const Root = styled.div`
.desktop_container{
  margin-top:60px
}
  .h2 {
    font-weight: 800;
    margin: 1.7rem 0 1.2rem;
  }

  .p1{
    
  }

  .p1_width {
    width: 82%;
    margin-left: auto;
    margin-right: auto;
    font-weight: 400;
    color: var(--lightBlack);
  }

  .learn_more_banner {
    border-radius: 2.5rem;
  }
  .img_div {
    aspect-ratio: 4/1;
    margin-top: 1rem;
  }

  @media screen and (max-width: 767px) {
    .learn_more_banner {
      border-radius: 10px;
    }
  }
`;
