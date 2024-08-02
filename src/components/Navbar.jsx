import React, { useState } from "react";
import { BiCameraMovie, BiMenuAltRight } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  return (
    <div>
      <nav className=" fixed w-full flex justify-between items-center text-white text-xl p-7 z-30">
        <div>
          <FaArrowLeftLong
            size={30}
            className=" cursor-pointer hidden lg:block"
          />
          <h1 className="lg:hidden">
            <span className="text-5xl text-red-600 font-bold ">N</span>etflix
          </h1>
        </div>
        <div className="hidden xl:block">
          <ul className="flex justify-between items-center gap-5">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">TV shows</li>
            <li className="cursor-pointer">
              <BiCameraMovie size={40} className="w-20 text-red-600" />
            </li>
            <li className="cursor-pointer">Movies</li>
            <li className="cursor-pointer">Recently Added</li>
          </ul>
        </div>
        <div className="">
          {menu === false ? (
            <BiMenuAltRight
              size={40}
              className="text-white cursor-pointer  "
              onClick={() => setMenu(true)}
            />
          ) : (
            <div className="w-96 h-full top-0 fixed z-50 right-0  bg-black/90">
              <div className="flex text-start justify-end p-6">
                <ImCancelCircle
                  size={40}
                  onClick={() => setMenu(false)}
                  className="text-end"
                />
              </div>
              <ul className="text-start px-5 " >
                <div className="flex gap-2 justify-between items-center bg-white rounded-2xl px-4">
                <input type="text" placeholder="enter Movie Name" className="outline-0 p-2 rounded-2xl" />
                <CiSearch size={25} className="text-black" />
                </div>
                <li className="cursor-pointer text-3xl  py-2 lg:py-3">Home</li>
                <li className="cursor-pointer text-3xl  py-2 lg:py-3">Drama</li>
               
                <li className="cursor-pointer text-3xl py-2 lg:py-3">Action</li>
                <li className="cursor-pointer text-3xl py-2 lg:py-3">Recently Added</li>
                <li className="cursor-pointer text-3xl py-2 lg:py-3">Profile</li>
                <li className="cursor-pointer  text-3xl py-2 lg:py-3">Log Out</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
