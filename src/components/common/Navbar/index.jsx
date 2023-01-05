import { Link } from "react-router-dom";
import Logo from "../../../assets/img/Logo.webp";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-white">
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
            <AiOutlineMenu className="md:hidden text-2xl text-black cursor-pointer" />
            <ul className="hidden md:flex items-center text-xl md:gap-8 lg:gap-20">
              <li className="hover:text-black transition-all">
                <Link to="/">Home </Link>
              </li>
              <li className="hover:text-black transition-all">
                <Link to="/products">Products</Link>
              </li>
              <li className="hover:text-black transition-all">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          {/* Button */}
          <div className="hidden md:flex gap-6 items-center text-white">
            <button className="text-gray-400 hover:text-black transition-all">
              Login
            </button>
            <button className="text-black bg-green-400 hover:bg-green-500 p-3 rounded-md  transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
