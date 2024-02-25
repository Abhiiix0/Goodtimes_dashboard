import React from "react";
import { useEffect } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Headroom from "react-headroom";
const Navbar = () => {
  const [hides, sethides] = useState(true);

  // useEffect(() => {
  //   window.addEventListener("scroll", stickNavbar);
  //   return () => window.removeEventListener("scroll", stickNavbar);
  // }, []);

  // const stickNavbar = () => {
  //   if (window !== undefined) {
  //     let windowHeight = window.scrollY;
  //     // window height changed for the demo
  //     windowHeight > 25 ? setStickyClass(true) : setStickyClass(false);
  //   }
  // };

  const disableScroll = () => {
    // Get the current page scroll position
    // if any scroll is attempted,
    // set this to the previous value
    // console.log("fun");
    if (hides === true) {
      let scrollTop = document.documentElement.scrollTop;
      let scrollLeft = document.documentElement.scrollLeft;
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
        // console.log("stop");
      };
    } else {
      window.onscroll = function () {
        // window.scrollTo(scrollLeft, scrollTop);
        // console.log("stop");
      };
    }
  };

  return (
    <>
      <section className="relative">
        <header
          // style={{ display: stickyclass ? "none" : "" }}
          className=" hidden text-center lg:flex items-center justify-end pr-5 h-7 text-[12px] border-b-2 border-gray-300"
        >
          <ul className="flex items-center tracking-wider justify-between w-fit ">
            <li className=" px-3">Track Order</li>
            <li className=" border-l-2  px-3">Store Locator</li>
            <li className=" border-l-2 border-r-2 px-3">
              {" "}
              <NavLink to="/contact">Contact Us</NavLink>{" "}
            </li>
            <li className="  px-3">Login</li>
          </ul>
        </header>
        <Headroom>
          <nav
            // style={{ position: "fixed", top: stickyclass ? "0px" : "28[" }}
            // style={{ position: stickyclass ? "fixed" : " " }}
            className="  bg-white h-[70px] z-50  shadow-md lg:shadow-[0] lg:border-b-2 border-gray-300 lg:h-[94px] w-full flex items-center justify-between px-2 lg:px-8"
          >
            <div className=" flex justify-between items-center w-full">
              <span className="flex items-center gap-1">
                <span
                  className=" block lg:hidden cursor-pointer "
                  onClick={() => {
                    sethides(!hides);
                    disableScroll();
                  }}
                >
                  <MenuIcon id="menu" />
                </span>
                <NavLink to="/">
                  <img
                    src={require("../img/powerlook.png")}
                    className=" h-[42px] w-[200px] hidden lg:block"
                    alt=""
                  />
                  <img
                    src={require("../img/powerlook-short.png")}
                    className=" h-[30px] w-fit block lg:hidden"
                    alt=""
                  />
                </NavLink>
              </span>

              <ul className=" flex  items-center gap-2 mr-5 lg:mr-0 lg:gap-5">
                <li className=" hidden lg:block">
                  <NavLink
                    to="/store"
                    className=" text-sm font-medium text-gray-600 transition-all duration-100 ease-linear border-orange-400 pb-2 w-fit px-1 hover:border-b-2"
                  >
                    T-SHIRTS
                  </NavLink>
                </li>
                <li className=" hidden lg:block">
                  <a
                    href="#"
                    className=" text-sm font-medium text-gray-600 transition-all duration-100 ease-linear border-orange-400 pb-2 w-fit px-1 hover:border-b-2"
                  >
                    SHIRTS
                  </a>
                </li>
                <li className=" hidden lg:block">
                  <a
                    href="#"
                    className=" text-sm font-medium text-gray-600 transition-all duration-100 ease-linear border-orange-400 pb-2 w-fit px-1 hover:border-b-2"
                  >
                    BOTTOMS
                  </a>
                </li>
                <li className=" hidden lg:block">
                  <a
                    href="#"
                    className=" text-sm font-medium text-gray-600 transition-all duration-100 ease-linear border-orange-400 pb-2 w-fit px-1 hover:border-b-2"
                  >
                    JACKETS
                  </a>
                </li>
                <li>
                  <div className=" bg-slate-100 border h-[44px] w-60  items-center px-4 gap-3 rounded-md hidden lg:flex">
                    <SearchOutlinedIcon className=" text-black" />
                    <input
                      type="text"
                      placeholder="Search for products"
                      className=" bg-transparent outline-0 "
                    />
                  </div>
                </li>
                <li>
                  <a href="#" className=" h-[25px] w-[30px]">
                    <FavoriteBorderOutlinedIcon id="heart" />
                  </a>
                </li>
                <li>
                  <a href="#" className="  ">
                    <ShoppingBagOutlinedIcon id="bag" />
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="bg-white absolute z-50 left-0 top-0 h-full w-80 lg:hidden"
              style={{ display: hides ? "none" : "" }}
            >
              <div className=" px-4 flex bg-white justify-between items-center mt-3 ">
                <p className=" tracking-wider text-sm font-semibold text-gray-600">
                  Store
                </p>
                <button
                  onClick={() => {
                    sethides(!hides);
                    disableScroll();
                  }}
                  className=" bg-slate-100 shadow  rounded h-9 w-9"
                >
                  {" "}
                  <ClearIcon />
                </button>
              </div>
              <ul className="bg-white h-[230px]">
                <li className="px-4 border-b-[2px] font-semibold text-[16px] py-4">
                  <NavLink to="/store">T-shirt</NavLink>
                </li>
                <li className="px-4 border-b-[2px] font-semibold text-[16px] py-4">
                  <a href="#">Shirts</a>
                </li>
                <li className="px-4 border-b-[2px] font-semibold text-[16px] py-4">
                  <a href="#">Bottoms</a>
                </li>
                <li className="px-4 border-b-[2px] font-semibold text-[16px] py-4">
                  <a href="#">Jackets</a>
                </li>
              </ul>
              <ul className=" bg-slate-200 h-[calc(100vh_-_280px)]">
                <li className="px-4 font-normal text-[16px] py-4">
                  <a href="#">Login</a>
                </li>
                <li className="px-4 font-normal text-[16px] py-4">
                  <a href="#">Track Order</a>
                </li>
                <li className=" px-4 font-normal text-[16px] py-4">
                  <a href="#">Store Locator</a>
                </li>
                <li className="px-4 font-normal text-[16px] py-4">
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </Headroom>
      </section>
    </>
  );
};

export default Navbar;
