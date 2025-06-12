import React from "react";
import styled from "styled-components";

const List = [
  "dwellsy news",
  "dwellsy newsroom",
  "renter tips and basics",
  "moving out",
  "money management",
  "apartment living",
  "great places to rent",
  "for owners $ property managers",
  "diy",
  "covid 19",
];
function CategoriesList() {
  return (
    <Root>
      <div>
        <div className="underline text-gray-400 my-8">Categories</div>
        {List.map((i, ind) => {
          return <div key={ind}><div  className="list">{i}</div><hr/></div>;
        })}
      </div>
    </Root>
  );
}

export default CategoriesList;
const Root = styled.div`
font-size: small;
font-weight: 600;
  text-transform: uppercase;
  .list{
    margin: 15px 0px;
  }
`;
