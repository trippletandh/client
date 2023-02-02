import "./Profile.css";
import { Link } from "react-router-dom";
import EditIcon from "../../components/common/icons/EditIcon";
import MyOrders from "./MyOrders";
import SearchIcon from "../../components/common/icons/SearchIcon";

function Profile({ user }) {
  return (
    <div className="max-w-screen-xl mx-auto mt-4 p-4">
      <h1 className="mb-8 text-center text-3xl text-gray-700">
        Hello {user.name}
      </h1>
      <div className="lg:flex p-4 bg-gray-50 rounded-lg">
        <div className="lg:w-[40%] flex flex-row-reverse justify-between lg:block">
          <div className="lg:hidden flex items-center">
            <button className="px-2 flex gap-1">
              <EditIcon />
              <span>Edit Profile</span>
            </button>
          </div>
          <div className="lg:flex-col">
            <button className="pr-2">
              <img
                src={user.image}
                alt="user face"
                className="rounded-lg"
                height={80}
                width={80}
              />
            </button>
            <div className="mt-2" />
            <span className="name mt-3">{user.name}</span>
            <br />
            <span className="number">
              📧 : <span className="font-bold text-base">{user.email}</span>
            </span>
          </div>

          <div className="hidden lg:block mt-2 py-2 text-lg">
            <div className="">
              <button className="mt-1 mb-2">
                <Link
                  to="/profile"
                  className="pl-1 pr-10 lg:pr-44 py-2 rounded-md hover:pl-2 hover:bg-green-700/70 hover:text-white transition-all"
                >
                  My Orders
                </Link>
              </button>
              <br />
              <button>
                <Link
                  to="/"
                  className="pl-1 pr-10 lg:pr-44 py-2 rounded-md hover:pl-2 hover:bg-green-700/70 hover:text-white transition-all"
                >
                  My Profile
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* My Orders */}
        <div className="w-full rounded-md bg-white mt-2 lg:mt-0">
          <div className="p-2">
            <div className="flex items-center gap-2 p-2 rounded-t-md">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search your recent orders or products"
                className="w-full p-1 rounded"
              />
            </div>
            <div className="pb-2">
              <MyOrders />
              <MyOrders />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
