import { Link } from "react-router-dom";
import Logo from "../../../assets/img/Logo.webp";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import DropMenu from "./DropMenu";
import DataLink from "./DataLink";
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
              {DataLink.map((item) => {
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
          <div className="hidden md:flex gap-6">
            <button>
              <AiOutlineHeart className="text-2xl" />
            </button>
            <Link to="/login">
              <BiUser className="text-2xl" />
            </Link>
            <button className="group relative">
              <BsHandbag className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
