import { Link } from "react-router-dom";
import Logo from "../../../assets/img/Logo.webp";
import { BiUser } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";
import DropMenu from "./DropMenu";
import MyLink from "./MyLink";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="bg-white relative">
      {/* Containier */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Layout */}
        <div className="flex justify-between items-center py-4 ">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          {/* Navbar */}
          <div className="text-gray-500">
            {/* Drop Menu */}
            <DropMenu />
            {/* Menu Web */}
            <nav className="hidden lg:flex items-center text-xl md:gap-8 lg:gap-20">
              {MyLink.map((item) => {
                return (
                  <NavLink
                    key={item.title}
                    className="hover:text-black transition duration-500 hover:border-b-2 hover:border-black"
                    to={item.to}
                    title={item.title}
                  />
                );
              })}
            </nav>
          </div>
          {/* Button */}
          <div className="hidden md:flex gap-9">
            <Link to="/login">
              <BiUser className="text-3xl text-[#212529]" />
            </Link>
            <div className="">
              <button className="relative">
                <BsCartPlus className="text-3xl text-[#212529]" />
              </button>
              <span className="absolute  top-5 sm:right-[7px]  lg:right-[8px] xl:right-[125px] bg-[#212529] text-white w-5 h-5 text-center rounded-full">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
