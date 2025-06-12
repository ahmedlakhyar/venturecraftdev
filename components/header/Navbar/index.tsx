import Link from "next/link";
// import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { HiX, HiMenu } from "react-icons/hi";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import ChatPopup from "components/ChatPopup";

const LINKS = [
  {
    id: 1,
    label: "Services",
    url: "/services",
    transformOn: "translateY(50px)",
    transformOff: "translateY(0px)",
    transitionOn: "all 0.3s ease-in-out 0.4s",
    transitionOff: "all 0s ease-in-out 0s",
    children: [
      {
        id: "1-1",
        label: "SBIR & Grant Support",
        url: "/sbir-and-grant-support",
      },
      {
        id: "1-2",
        label: "Commercialization",
        url: "/commercialization",
      },
      {
        id: "1-3",
        label: "Marketing",
        url: "/marketing",
      },
      {
        id: "1-4",
        label: "Fundraising",
        url: "/fundraising",
      },
      
    ],
  },
  {
    id: 2,
    label: "Investor Pitches",
    url: "/investor-pitches",
    transformOn: "translateY(60px)",
    transformOff: "translateY(0px)",
    transitionOn: "all 0.3s ease-in-out 0.5s",
    transitionOff: "all 0s ease-in-out 0s",
  },
  {
    id: 3,
    label: "Partner",
    url: "/partner",
    transformOn: "translateY(70px)",
    transformOff: "translateY(0px)",
    transitionOn: "all 0.3s ease-in-out 0.6s",
    transitionOff: "all 0s ease-in-out 0s",
  },
  {
    id: 4,
    label: "Story",
    url: "/story",
    transformOn: "translateY(80px)",
    transformOff: "translateY(0px)",
    transitionOn: "all 0.3s ease-in-out 0.7s",
    transitionOff: "all 0s ease-in-out 0s",
  },
  {
    id: 5,
    label: "Blog",
    url: "#!",
    transformOn: "translateY(90px)",
    transformOff: "translateY(0px)",
    transitionOn: "all 0.3s ease-in-out 0.8s",
    transitionOff: "all 0s ease-in-out 0s",
  },
];

export default function Navbar() {
  const [closeNav, setCloseNav] = useState(false);
  const router = useRouter();

  const sidebarRef = useRef(null);
  const menuRef = useRef(null);

  const [isScroll, setScroll] = useState(false);
  const [chatPopup, setChatPopup] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        !sidebarRef.current?.contains(e.target) &&
        !menuRef.current?.contains(e.target)
      ) {
        setCloseNav(false);
        // document.body.style.overflow = "auto";
      }
    });
  }, [sidebarRef, menuRef]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 40) {
        setScroll(!isScroll);
      } else {
        setScroll(isScroll);
      }
    });
  }, []);

  const openChatPopup = () => {
    setChatPopup(true);
    setCloseNav(false);
  };

  const closeNavbar = () => {
    setCloseNav(false);
    // document.body.style.overflow = "auto";
  };

  const openNavbar = () => {
    setCloseNav(true);
    // document.body.style.overflow = "hidden";
  };

  return (
    <>
      <NavbarWrapper
        className={`${closeNav ? "" : "active"} ${isScroll ? "scroll" : ""}`}
      >
        <div className="nav_container px-[5%]">
          {isScroll ? (
            <div className="logo">
              <Link href="/">
                <a>
                  <div className="img_div lg:w-[25rem] md:w-[22rem] sm:w-[19] w-[17rem] -ml-6  relative">
                    <Image src="/images/scroll-logo.svg" layout="fill" />
                  </div>
                </a>
              </Link>
            </div>
          ) : (
            <div className="logo">
              <Link href="/">
                <a>
                  <div className="img_div lg:w-[25rem] md:w-[22rem] sm:w-[19] w-[17rem] -ml-6  relative">
                    <Image src="/images/venturecraft-logo.svg" layout="fill" />
                  </div>
                </a>
              </Link>
            </div>
          )}

          {/* <div className="logo">
            <Link href="/">
              <a>
                <div className="img_div lg:w-[25rem] md:w-[22rem] sm:w-[19] w-[17rem] -ml-6  relative">
                  <Image src="/images/venturecraft-logo.svg" layout="fill" />
                </div>
              </a>
            </Link>
          </div> */}

          <div className="flex py-10 items-center gap-8 desktop_nav">
            {LINKS.map((i, ind) => {
              return (
                <div key={ind} className="relative group">
      <Link href={i.url}>
        <a
          className={`hover_effect transition-all ${
            router.pathname === i.url
              ? "text-yellowBase"
              : "text-whiteColor"
          }`}
        >
          <div className="text-2xl desktop_menu">{i.label}</div>
          {i.children && (
  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
  </svg>
)}
          
        </a>
      </Link>

      {i.children && (
        <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg z-20 hidden group-hover:block min-w-max">
          {i.children.map((sub, subInd) => (
            <Link href={sub.url} key={subInd}>
              <a className="block drop2 text-2xl px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm whitespace-nowrap">
                {sub.label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
              );
            })}
            <div className="menu_btn text-2xl desktop_menu">
              <a onClick={openChatPopup}>Let's Chat</a>
            </div>
          </div>
          {/* <div className="open_icon_wrapper" ref={menuRef}>
            <div className="open_icon">
              <HiMenu onClick={openNavbar} />
            </div>
            <div className="close_icon">
              <HiX onClick={closeNavbar} />
            </div>
          </div> */}
        </div>

        <div
          className="flex py-10 items-center flex-col gap-10 mobile_nav"
          ref={sidebarRef}
        >
          {LINKS.map((i, ind) => {
            return (
              <div key={ind} className="relative group">
              <Link href={i.url} key={ind}>
                <a
                  className={`hover_effect transition-all ${
                    router.pathname === i.url
                      ? "text-yellowBase"
                      : "text-whiteColor"
                  }`}
                >
                  <div
                    className={`mobile_menu`}
                    // style={{
                    //   transform: closeNav ? i.transformOff : i.transformOn,
                    //   opacity: closeNav ? 1 : 0,
                    //   transition: closeNav ? i.transitionOn : i.transitionOff,
                    // }}
                  >
                    {i.label}
                    {i.children && (
  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
  </svg>
)}
                  </div>
                </a>
              </Link>
              {i.children && (
        <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg z-20 hidden group-hover:block min-w-max">
          {i.children.map((sub, subInd) => (
            <Link href={sub.url} key={subInd}>
              <a className="block drop2 text-2xl px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm whitespace-nowrap">
                {sub.label}
              </a>
            </Link>
          ))}
        </div>
      )}
             </div> 
            );
          })}
          <div className="menu_btn">
            <a onClick={openChatPopup}>Let's Chat</a>
          </div>
          {/* <div className="close_icon_wrapper sm:right-[40px] right-[25px] md:py-10 py-9">
            <HiX className="close_icon" onClick={closeNavbar} />
          </div> */}
        </div>
        <div className="open_icon_wrapper" ref={menuRef}>
          <div className="open_icon">
            <HiMenu onClick={openNavbar} />
          </div>
          <div className="close_icon">
            <HiX onClick={closeNavbar} />
          </div>
        </div>
        <ChatPopup open={chatPopup} onClose={() => setChatPopup(false)} />
      </NavbarWrapper>
    </>
  );
}

const NavbarWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;

  .drop2{
    font-size: 1.3rem;
    padding-top: 10px;
    padding-bottom: 10px
  }

  .drop2:hover{
    background: #fcec52;
    color:#323e48;
    pa
  }

  .nav_container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    margin: auto;
    z-index: -1;
    transition: 0.4s ease-in-out;
    .hover_effect {
      position: relative;
      display: flex; 
      align-items: center;
      column-gap: 9px;
      &:hover {
        color: var(--yellowBase);
        transition: 0.1s ease-in-out;
      }
    }
    .hover_effect::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -5px;
      height: 2px;
      width: 0%;
      transition: 0.4s;
      background-color: var(--yellowBase);
    }
    .hover_effect:hover::after {
      width: 100%;
      transition: 0.4s;
    }
  }

  .img_div {
    aspect-ratio: 6.7;
  }
  .menu_btn {
    background-color: var(--yellowBase);
    padding: 8px 18px;
    font-weight: 500;
    border-radius: 15px;
    cursor: pointer;
    border-color: var(--yellowBase);
    color: var(--lightBlack);
    box-shadow: 0 0 40px 40px var(--yellowBase) inset, 0 0 0 0 var(--yellowBase);
    transition: all 150ms ease-in-out;
    font-weight: 700;

    &:hover {
      box-shadow: 0 0 10px 0 var(--yellowBase) inset,
        0 0 10px 4px var(--yellowBase);
    }
  }

  .mobile_nav {
    background-color: var(--lightBlack);
    /* background: linear-gradient(118deg, #00d4f5 12.27%, #00bff0 57.45%); */
    width: 360px;
    transition: 0.4s;
    position: fixed;
    right: 0;
    top: 0;
    padding-top: 80px;
    height: 100vh;
    z-index: -1;
    /* .close_icon_wrapper {
      position: absolute;
      top: 0px;
      .close_icon {
        font-size: 2.5rem;
        color: #fff;
        cursor: pointer;
      }
    } */
    .mobile_menu {
      /* transform: translateY(0px); */
      /* opacity: 1; */
      /* transition: 1s ease-in-out; */
      display: flex
      ;
          align-items: center;
          column-gap: 10px;
    }
  }

  .open_icon_wrapper {
    position: fixed;
    top: 0px;
    right: 5%;
    height: 9rem;
    transition: 0.4s ease-in-out;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* display: none; */
    z-index: 5;
    .open_icon {
      font-size: 3rem;
      color: var(--lightBlack);
      cursor: pointer;
      /* display: none; */
      height: 0;
      width: 0;
      transform: scale(0);
      transition: 0s;
    }
    .close_icon {
      font-size: 2.5rem;
      color: #fff;
      cursor: pointer;
      /* display: block; */
      height: auto;
      width: auto;
      transform: scale(1);
      transition: 0.4s;
    }
  }

  &.active {
    .mobile_nav {
      right: -460px;
      transition: 0.4s;
      .mobile_menu {
        /* transform: translateY(100px); */
        /* opacity: 0; */
        /* transition: 1s ease-in-out; */
      }
    }
    .open_icon_wrapper {
      /* right: 0; */
      .open_icon {
        /* display: block; */
        height: auto;
        width: auto;
        transform: scale(1);
        transition: 0.4s;
      }
      .close_icon {
        /* display: none; */
        height: 0;
        width: 0;
        transform: scale(0);
        transition: 0s;
      }
    }
  }

  &.scroll {
    .nav_container {
      background: linear-gradient(118deg, #00d4f5 12.27%, #00bff0 57.45%);
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
      height: 6rem;
      transition: 0.4s ease-in-out;
      /* z-index: -1; */
    }
    .open_icon_wrapper {
      height: 6rem;
      transition: 0.4s ease-in-out;
    }
  }

  @media screen and (min-width: 2000px) {
    .desktop_nav {
      gap: calc(15px + 1.5vw);
      .desktop_menu {
        /* font-size: calc(16px + 0.7vw); */
      }
    }
    .nav_container .logo .img_div {
      width: calc(20rem + 8vw);
    }
    .nav_container {
      height: 12rem;
    }
    &.scroll {
      .nav_container {
        height: 8rem;
      }
    }
  }

  @media screen and (min-width: 3000px) {
    .nav_container {
      height: 15rem;
    }
    &.scroll {
      .nav_container {
        height: 12rem;
      }
    }
  }

  @media screen and (min-width: 1025px) {
    .mobile_nav {
      display: none;
    }
    .open_icon_wrapper {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    .desktop_nav {
      display: none;
    }
    .open_icon_wrapper {
      display: flex;
    }
    .open_icon_wrapper {
      .open_icon,
      .close_icon {
        /* font-size: calc(25px + 1.2vw); */
        font-size: 2.3rem;
      }
    }
    .mobile_nav .mobile_menu {
      /* font-size: calc(16px + 0.7vw); */
      font-size: 1.2rem;
    }
    .drop2{
      font-size: 1.2rem
    }
    .nav_container {
      height: 7rem;
    }
    .open_icon_wrapper {
      height: 7rem;
    }
    &.scroll {
      .nav_container {
        height: 5rem;
      }
      .open_icon_wrapper {
        height: 5rem;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .nav_container {
      height: 5.5rem;
    }
    .open_icon_wrapper {
      height: 5.5rem;
      .open_icon,
      .close_icon {
        /* font-size: calc(25px + 1.2vw); */
        font-size: 2rem;
      }
    }
    &.scroll {
      .nav_container {
        height: 4rem;
      }
      .open_icon_wrapper {
        height: 4rem;
      }
    }
    .mobile_nav .mobile_menu {
      /* font-size: calc(16px + 0.7vw); */
      /* font-size: 1.15rem; */
    }
  }
  @media screen and (max-width: 450px) {
    .mobile_nav {
      width: 100%;
    }
  }
  @media screen and (max-width: 359px) {
    .mobile_nav {
      width: 100%;
    }
    .nav_container .logo .img_div {
      width: 14rem;
    }
  }
`;
