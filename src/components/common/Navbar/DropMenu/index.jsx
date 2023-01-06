import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import DataLink from "../DataLink";
import NavLink from "../NavLink";

const DropMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Drop Menu */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <AiOutlineClose className="md:hidden text-2xl text-black cursor-pointer" />
        ) : (
          <AiOutlineMenu className="md:hidden text-2xl text-black cursor-pointer" />
        )}
      </button>
      {/* Menu Mobile */}
      <div
        className={`absolute top-20 left-0 bg-white w-full h-screen sm:h-[400px] transition duration-500 md:hidden 
        ${open ? "left-0" : "left-[-100%]"}`}
      >
        <p className="text-center pt-6 text-2xl text-black font-bold">Menu</p>
        <nav className="flex flex-col" onClick={() => setOpen(false)}>
          {DataLink.map((item) => {
            return (
              <NavLink
                key={item.title}
                className="hover:text-black transition duration-500 hover:bg-gray-100 p-4"
                to={item.to}
                title={item.title}
              />
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default DropMenu;
