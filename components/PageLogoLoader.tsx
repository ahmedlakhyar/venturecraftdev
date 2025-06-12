import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

export default function PageLogoLoader({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let tm = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 1000 * 3);

    return () => {
      if (tm) clearTimeout(tm);
    };
  }, [onFinish]);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  if (!show) {
    return <></>;
  }

  return (
    <Root className="fixed top-0 left-0 w-full h-full flex gap-4 items-center justify-center bg-primaryLight1 z-20">
      <span className="loader__element"></span>
      <span className="loader__element"></span>
      <span className="loader__element"></span>

      {/* <Anim>
        <img src="/images/venturecraft-logo.svg" className="h-14" />
      </Anim> */}
    </Root>
  );
}

const anim1 = keyframes`
from{
  opacity: 0.1;
  transform: scale(1);
}
to{
  opacity: 1;
  transform:  scale(1.1);
}
`;

const Anim = styled.div`
  animation: ${anim1} 0.8s infinite alternate cubic-bezier(0.76, 0, 0.24, 1);
`;
const Root = styled.div`
  .loader__element {
    border-radius: 100%;
    border: 5px solid #fff;
    margin: calc(var(--size) * 2);
  }

  .loader__element:nth-child(1) {
    animation: preloader 0.6s ease-in-out alternate infinite;
  }
  .loader__element:nth-child(2) {
    animation: preloader 0.6s ease-in-out alternate 0.2s infinite;
  }

  .loader__element:nth-child(3) {
    animation: preloader 0.6s ease-in-out alternate 0.4s infinite;
  }

  @keyframes preloader {
    100% {
      transform: scale(2);
    }
  }
`;
