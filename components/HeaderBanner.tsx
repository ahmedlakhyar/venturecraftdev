import { HeroBgImage, ParentRoot } from "public/Global";
import styled from "styled-components";

const HeaderBanner = ({heading}) => {
  return (
    <>
      <ParentRoot>
        <Root className="banner_height">
          <HeroBgImage />
          <div className="relative content_wrapper desktop_container">
            <h1 className="h1 text-yellowBase">
              {heading}
            </h1>
          </div>
        </Root>
        <div className="hero_bottom"></div>
      </ParentRoot>
    </>
  );
};

export default HeaderBanner;

const Root = styled.section`
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;

  .content_wrapper {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
