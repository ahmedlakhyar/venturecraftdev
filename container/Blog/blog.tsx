import BlogCard from "components/blogs/blogCard";
import CategoriesList from "components/blogs/categoriesList";
import React from "react";
import { AiOutlineClockCircle, AiOutlineShareAlt } from "react-icons/ai";
import styled from "styled-components";

const data = [
  {
    id: 1,
    name: "Renter Tips and  Basics",
    img: "./images/list1.jpg",
    brand_name: "Brian Kidder",
    title: "How to Handle a Problematic Landlord",
    time: "4 minute read",
    date: "October 21, 2022",
  },
  {
    id: 2,
    name: "How to find an apartment",
    img: "./images/list1.jpg",
    brand_name: "Brian Kidder",
    title: "How To Rent With An Eviction On Your Record",
    time: "4 minute read",
    date: "October 21, 2022",
  },
  {
    id: 3,
    name: "How to find an apartment",
    img: "./images/list1.jpg",
    brand_name: "Brian Kidder",
    title: "11 Questions To Ask When Viewing an Apartment",
    time: "4 minute read",
    date: "October 21, 2022",
  },
  {
    id: 4,
    name: "Rental Market Updates",
    img: "./images/list1.jpg",
    brand_name: "Brian Kidder",
    title: "The Complete Guide to Single-Family Rentals",
    time: "4 minute read",
    date: "October 21, 2022",
  },
];

function Blogs() {
  return (
    <>
      <Root>
        <div className="main_section">
          <section>
            <div className="right_section">
              <div className="right_">
                <div className="logo_name  pb-6">
                  <span className="R_">R</span>
                  <span className="">—</span>
                  <span className="label">RENTAL MARKET UPDATES</span>
                </div>
                <a>The Complete 2022 Guide to Rental Prices in the US</a>
                <img src="./images/blog-img.jpg" alt="loding..." />
                <div>
                  <div className="span_section">
                    <span>by</span>
                    <span>jonas borda</span>-
                    <span>august&nbsp;&nbsp;3, 2022</span>-
                    <span className="flex gap-1 items-center">
                      <AiOutlineShareAlt className="icon" />2 shares
                    </span>
                    -
                    <span className="flex gap-1 items-center">
                      <AiOutlineClockCircle className="icon" />2 minutes read
                    </span>
                  </div>
                  <div className="title_text">
                    Median Asking Rent Prices Decline by 0.7% from August to
                    September Rent Still Up a <br /> Staggering 27% Since…
                  </div>
                  <button>READ MORE</button>
                </div>
              </div>
              <div className="left_">
                <div>
                  {data.map((i) => {
                    return (
                      <div key={i.id}>
                        <div className="card_section">
                          <div className="right_side">
                            <div className="card_title">
                              <span className="R_"> {i.id} </span>
                              <span>—</span>
                              <span className="label">{i.name}</span>
                            </div>
                            <div className="hero-title"> {i.title}</div>
                            <div className="small_section">
                              <span>by &nbsp;&nbsp;{i.brand_name} </span> &nbsp;
                              &nbsp; &nbsp;- &nbsp;
                              <div className="flex items-center gap-1 flex-wrap">
                                <div className="">{i.date}</div>&nbsp;&nbsp;
                                -&nbsp;&nbsp;
                                <div className="flex items-center gap-1 ">
                                  <AiOutlineClockCircle className="icon" />
                                  {i.time}
                                </div>
                              </div>
                            </div>
                          </div>
                          <img src="./images/list1.jpg" alt="loding.." />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Root>
      <Section>
        <div className="flex_div">
          <div className="right_">
            <BlogCard />
          </div>
          <div className="left_">
            <CategoriesList />
          </div>
        </div>
      </Section>
    </>
  );
}

export default Blogs;

const Root = styled.div`
  background: linear-gradient(45deg, #5d5194, #150429);
  .main_section {
    max-width: 1200px;
    margin: auto;
    width: 90%;
  }
  section {
    color: white;
    .right_section{
      display: flex;
      gap: 1rem;
      padding: 3rem 0px;
      @media (max-width: 1024px) {
        flex-direction: column;
      }
    }
    .right_ {
      width: 70%;
      @media (max-width: 1024px) {
        width: 100%;
      }
      .logo_name {
        display: flex;
        align-items: center;
        gap: 10px;
        .R_ {
          background-color: black;
          padding: 0px 1rem;
          font-size: 3rem;
          font-weight: bold;
        }
        .label {
          font-size: small;
        }
      }
      a {
        font-size: 3rem;
        line-height: 1;
        color: white;
        font-weight: 600;
        @media (max-width: 1024px) {
          font-size: 2rem;
          line-height: 1.2;
        }
      }
      img {
        padding: 20px 0px;
      }
      .span_section {
        font-size: 0.625rem;
        font-weight: 500;
        letter-spacing: 0px;
        text-transform: uppercase;
        display: flex;
        gap: 1rem;
        align-items: center;
        @media (max-width: 1024px) {
          flex-wrap: wrap;
        }
        .icon {
          font-size: 15px;
        }
      }
      .title_text {
        margin-top: 1.5rem;
        font-size: 1.25rem;
      }
      button {
        background-color: #5b59c2;
        padding: 10px 30px;
        margin: 60px 0px 0px 0px;
        border-radius: 100px;
        font-size: small;
        @media (max-width: 1024px) {
          margin: 60px 0px 60px 0px;
        }
      }
    }
    .left_ {
      width: 30%;
      background-color: #150429;
      @media (max-width: 1024px) {
        width: 100%;
      }

      .card_section {
        display: flex;
        gap: 10px;
        padding: 30px 20px 0px 20px;
        img {
          width: 100px;
          height: 100px;
        }
        @media (max-width: 1024px) {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .right_side {
        .card_title {
          display: flex;
          align-items: center;
          gap: 5px;
          text-transform: uppercase;
          @media (max-width: 1024px) {
            flex-wrap: wrap;
          }
          .R_ {
            background-color: black;
            padding: 0px 10px;
            font-size: 1rem;
            font-weight: bold;
          }
          .label {
            font-size: small;
          }
        }
        .hero-title {
          font-weight: 600;
          margin: 10px 0px;
        }
        .small_section {
          text-transform: uppercase;
          font-size: 10px;
          @media (max-width: 1024px) {
            display: flex;
            flex-wrap: wrap;
          }
        }
      }
    }
  }
`;

const Section = styled.div`
  max-width: 1200px;
  margin: auto;
  .flex_div {
    display: flex;
    gap: 1rem;
    margin: 60px 0px;
    @media (max-width: 1024px) {
        flex-direction: column;
      }
    .right_ {
      width: 68%;
      margin: auto;
      @media (max-width: 1024px) {
        width: 90%;
        margin: auto;
      }
    }
    .left_ {
      width: 30%;
      position: sticky;
      bottom: 0px;
      /* margin-top: auto; */
      flex: 0 0 auto;
      @media (max-width: 1024px) {
        position: unset;
        width: 90%;
        margin: auto;
      }
    }
  }
`;
