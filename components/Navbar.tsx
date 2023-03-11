import Router from "next/router";
import React, { useCallback, useState } from "react";
import NavbarItem from "./NavbarItem";
import { BsSearch, BsBell } from "react-icons/bs";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((show) => !show);
  }, []);
  return (
    <nav className="w-full fixed z-40">
      <div
        className="
     
        px-7 sm:px-9 md:px-11 py-6
      flex
      flex-row
      items-center
      transition
      duration-500
      bg-black
      bg-opacity-90
      "
      >
        <img
          onClick={() => Router.push("/")}
          className="w-24   cursor-pointer"
          src="/images/logo.png"
          alt="netflix logo"
        />
        <div className=" flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Brows by language" />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div className="flex items-center flex-row gap-2 cursor-pointer relative">
            <div
              onClick={toggleAccountMenu}
              className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden"
            >
              <img src="/images/default-blue.png" alt="userImage" />
            </div>
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
