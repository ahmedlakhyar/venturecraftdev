import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

import styled from "styled-components";
function SideMenu() {
  const [isMenu, setIsMenu] = useState(false);

  const menuItems = [
    {
      title: "Home",
    },
    {
      title: "Course",
    },
    {
      title: "Blog",
    },
    {
      title: "Pages",
    },
    {
      title: "Contact",
    },
  ];

  return (
    <SideMenu1>
        <div className="flex">
            <div className="">
            <button className="menu-bar " onClick={() => setIsMenu(true)}>
                <div>
                <AiOutlineMenu className="text-black text-[32px] -mt-8" />
                </div>
            </button>
            </div>
        </div>

        <div className={`${isMenu ? "overlay" : ""}  `} onClick={() => setIsMenu(false)}>
            <div className={`${isMenu ? "menu-view" : "view_menu"} menu-bar bar`}>
                <div className="flex justify-between p-5">
                    <div className="" onClick={() => setIsMenu(false)}>
                        <AiOutlineCloseCircle className="text-[40px] text-black -mt-1 cursor-pointer" />
                    </div>
                </div>
                <div className="bar-menu">
                {menuItems.map((item, index) => (
                    <div className="m-2" key={index}>
                        <ul className="slider">
                            <li className="text-[24px] hover:underline">{item.title}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </SideMenu1>
  );
}

export default SideMenu;
const SideMenu1 = styled.div`
  .menu-bar {
    /* visibility: hidden; */
  }
  .view_menu {
    transition-duration: 1s;
  }

  .menu-bar {
    visibility: visible;
    padding: 10px;
    margin-top: 20px;
    margin-left: -30px;
  }

  .overlay{ 
    position: fixed;
    right: -10px;
   
    top: -1px;
    width: 100vw;
    height: 100%;
    background-color: rgba(0,0,0,0.25);
    transition-duration: 1s;
    box-shadow: -5px 0 20px -5px rgb(0 0 0 / 50%);
    z-index: 9999;
  }

  .bar {
    position: fixed;
    right: -340px;
    top: -20px;
    width: 320px;
    height: 100%;
    background: #fff none repeat scroll 0 0;
    overflow: hidden;
    box-shadow: -5px 0 20px -5px rgb(0 0 0 / 50%);

    z-index: 9999;
  }
  .bar.menu-view {
    right: 0;
    transition-duration: 0.5s;
  }

  .slider {
    display: flex;
    padding: 10px;
  }


  /* @media only screen and (max-width: 780px) {
    .menu-bar {
      visibility: visible;
      padding: 10px;
      margin-top: 20px;
      margin-left: -30px;
    }
    .bar {
      position: fixed;
      right: -340px;
      top: -20px;
      width: 320px;
      height: 100%;
      background: #fff none repeat scroll 0 0;
      overflow-y: scroll;
      box-shadow: -5px 0 20px -5px rgb(0 0 0 / 50%);

      z-index: 9999;
    }
    .bar.menu-view {
      right: 0;
      transition-duration: 1s;
    }

    .slider {
      display: flex;
      padding: 10px;
    }
  } */
`;
