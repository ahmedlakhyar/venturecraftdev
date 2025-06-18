import Link from "next/link";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const LINKS = [
  {
    id: 1,
    label: "Services",
    url: "/services",
  },
  /*{
    id: 2,
    label: "Investor Pitches",
    url: "/investor-pitches",
  },*/
  {
    id: 3,
    label: "Partner",
    url: "/partner",
  },
  {
    id: 4,
    label: "Story",
    url: "/story",
  },
  {
    id: 5,
    label: "Blog",
    url: "#!",
  },
  {
    id: 6,
    label: "Contact",
    url: "/contact",
  },
];

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <div className="desktop_container">
          <div className="footer_menu px-10 md:px-0">
            <div className="flex xl:gap-20 lg:gap-14 md:gap-10 gap-10 md:flex-row flex-col justify-center flex-wrap md:mb-20 mb-10">
              {LINKS.map((i, ind) => {
                return (
                  <div
                    key={ind}
                    className="text-whiteColor lg:text-3xl md:text-2xl text-xl"
                  >
                    <Link href={i.url}>
                      <a className="link">{i.label}</a>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center sm:mb-0 mb-5">
              <div className="footer_line"></div>
              <img
                src="/images/footer-logo.png"
                className="md:w-24 mt-4 w-16"
              />
            </div>

            <div className="flex gap-2 md:flex-row flex-col">
              <div className="icons_div flex-1 flex gap-10 md:flex-row flex-col items-start">
                <div className="flex gap-10">
                  <div>
                    <Link href="https://www.linkedin.com/company/venturecraft-inc">
                      <a target="_blank">
                        <BsLinkedin className="icon" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.youtube.com/@venturecraftinc">
                      <a target="_blank">
                        <BsYoutube className="icon" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href=" https://www.instagram.com/venturecrafinc">
                      <a target="_blank">
                        <BsInstagram className="icon" />
                      </a>
                    </Link>
                  </div>
                </div>
                {/* <div className="flex gap-10">
                  <span className="text">Terms</span>
                  <span className="text">Privacy</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </FooterWrapper>
    </>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: var(--lightBlack);
  padding: 5rem 0;

  .footer_line {
    width: 100%;
    height: 2px;
    background-color: var(--whiteColor);
  }

  .footer_menu {
    display: flex;
    flex-direction: column;
    .link {
      font-size: 1.5rem;
    }
    .icons_div {
      .icon {
        color: var(--whiteColor);
        font-size: 2.5rem;
        opacity: 0.9;
      }
      .text {
        font-size: 1.6rem;
        color: var(--whiteColor);
        opacity: 0.9;
      }
    }
  }

  @media screen and (min-width: 2000px) {
    .footer_menu {
      .link {
        /* font-size: calc(16px + 0.7vw); */
      }
      .icons_div {
        .icon {
          /* font-size: calc(24px + 1vw); */
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .footer_menu {
      .link {
        /* font-size: calc(16px + 0.7vw); */
        font-size: 1.2rem;
      }
      .icons_div {
        .icon {
          /* font-size: calc(24px + 1vw); */
          font-size: 1.8rem;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 3rem 0;
    .footer_menu {
      .link {
        /* font-size: calc(16px + 0.7vw); */
        /* font-size: 1.15rem; */
      }
      .icons_div {
        .icon {
          /* font-size: calc(24px + 1vw); */
          font-size: 1.6rem;
        }
      }
    }
  }
`;
