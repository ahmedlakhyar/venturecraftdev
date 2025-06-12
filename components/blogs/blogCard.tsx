import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import styled from "styled-components";
const DATA = [
  {
    id: 1,
    name: "Renter Tips and  Basics",
    img: "./images/list1.jpg",
    brand_name: "Brian Kidder",
    title: "How to Handle a Problematic Landlord",
    desc: "Whether you’re new to the apartment lifestyle or a seasoned tenant, life in a multifamily property isn’t always…",
    date: "October 21, 2022",
  },
  {
    id: 2,
    name: "How to find an apartment",
    img: "./images/list1.jpg",
    brand_name: "Brian Kidder",
    title: "How To Rent With An Eviction On Your Record",
    desc: "Whether you’re new to the apartment lifestyle or a seasoned tenant, life in a multifamily property isn’t always…",
    date: "October 21, 2022",
  },
  {
    id: 3,
    name: "How to find an apartment",
    img: "./images/list1.jpg",
    brand_name: "Brian Kidder",
    title: "11 Questions To Ask When Viewing an Apartment",
    desc: "Whether you’re new to the apartment lifestyle or a seasoned tenant, life in a multifamily property isn’t always…",
    date: "October 21, 2022",
  },
  {
    id: 4,
    name: "Rental Market Updates",
    img: "./images/list1.jpg",
    brand_name: "Brian Kidder",
    title: "The Complete Guide to Single-Family Rentals",
    desc: "Whether you’re new to the apartment lifestyle or a seasoned tenant, life in a multifamily property isn’t always…",
    date: "October 21, 2022",
  },
  {
    id: 5,
    name: "Renter Tips and  Basics",
    img: "./images/list1.jpg",
    brand_name: "Brian Kidder",
    title: "How to Handle a Problematic Landlord",
    desc: "Whether you’re new to the apartment lifestyle or a seasoned tenant, life in a multifamily property isn’t always…",
    date: "October 21, 2022",
  },
  {
    id: 6,
    name: "How to find an apartment",
    img: "./images/list1.jpg",
    brand_name: "Brian Kidder",
    title: "How To Rent With An Eviction On Your Record",
    desc: "Whether you’re new to the apartment lifestyle or a seasoned tenant, life in a multifamily property isn’t always…",
    date: "October 21, 2022",
  },
];

function BlogCard() {
  return (
    <Root>
      <div className="md:grid-cols-2 md:grid  gap-4">
        {DATA.map((i, ind) => {
          return (
            <div key={ind} className="">
              <div className="card_title">
                <span className="R_"> {i.id} </span>
                <span>—</span>
                <span className="label">{i.name}</span>
              </div>

              <div className="container">
                <img src="./images/list1.jpg" alt="Avatar" className="image" />
                <div className="middle">
                  <div className="text">
                    <div className="my-16">READ MORE</div>
                    <div className="flex items-center gap-1"><AiOutlineClockCircle/>4 MINUTE READ</div>
                  </div>
                </div>
              </div>

              <span className="font-semibold text-2xl"> {i.title} </span>
              <div className="flex items-center gap-2 my-4 uppercase text-[12px] font-semibold">
                <span className="text-gray-400 ">by</span><div className="font-bold">{i.brand_name}</div> -
                <span className="text-gray-400 ">{i.date}</span>
              </div>
              <div className="text-sm mb-8">{i.desc}</div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center">
        <button className="flex items-center gap-2">
          LOAD MORE
          <BsChevronDown />
        </button>
      </div>
    </Root>
  );
}

export default BlogCard;

const Root = styled.div`
  .card_title {
    display: flex;
    align-items: center;
    gap: 5px;
    text-transform: uppercase;
    .R_ {
      background-color: black;
      color: white;
      padding: 0px 10px;
      font-size: 1rem;
      font-weight: bold;
    }
    .label {
      font-size: small;
    }
  }

  button {
    background-color: #5b59c2;
    padding: 10px 40px;
    margin: 60px 0px 0px 0px;
    border-radius: 100px;
    font-size: small;
    color: white;
  }
  
  .container {
    position: relative;
  }
  img {
    width: 400px;
    padding: 20px 0px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .image {
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
  }
  
  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .container:hover .image {
    opacity: 0.8;
  }
  
  .container:hover .middle {
    opacity: 1;
  }
  
  .text {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: small;
    padding: 16px 32px;
  }
`;
