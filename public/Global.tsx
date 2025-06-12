import styled, { keyframes } from "styled-components";

export const HeroBgImage = styled.div`
  &::before {
    background: url("/images/hero-optimize.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    background-color: #11d5f6;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
`;

export const ParentRoot = styled.section`
  .hero_bottom {
    background-color: var(--primaryLight4);
    width: 100%;
    height: 20px;
    position: relative;
    opacity: 0.28;
  }
`;

export const animL = keyframes`
from{
  transform: translateX(-6px) scale(1);
}
to{
  transform: translateX(0px) scale(1.1);
}
`;

export const animR = keyframes`
from{
  transform: translateX(6px) scale(1);
}
to{
  transform: translateX(0px) scale(1.1);
}
`;