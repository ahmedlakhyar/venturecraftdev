import React from "react";
import styled from "styled-components";

function MakeDifferent({ Items, heading }) {
  return (
    <div>
      <Root>
        <div className="desktop_container md:px-10 px-5 md:pt-20 md:pb-36 py-10">
          <h1 className="h1 md:mb-24 mb-10 text-whiteColor">{heading}</h1>
          <div className="make-different grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-5">
            {Items.map((itm: any, ind: number) => {
              return (
                <div key={ind}>
                  <div className="img md:ml-7 aspect-square relative w-56">
                    <img className="" src={itm.image} alt="loading" />
                  </div>
                  <div>
                    <div className="title text-whiteColor md:my-1 my-3">
                      {" "}
                      {itm.title}
                    </div>
                    <div className="p1 text-lightBlack">{itm.subTitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Root>
    </div>
  );
}

export default MakeDifferent;

const Root = styled.section`
  background: url("/images/process/make-different-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .desktop_container {
    width: 90%;
  }

  .title {
    font-weight: 700;
    /* font-size: 3rem; */
  }
  .p1 {
    font-weight: 600;
  }
`;
