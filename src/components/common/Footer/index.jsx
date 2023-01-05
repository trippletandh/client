import Logo from "../../../assets/img/Logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#212529]">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Layout */}
        <div className="flex flex-col md:flex-row md:pt-[50px]  md:pb-[140px] md:gap-[100px]">
          {/* Footer brand */}
          <div className="flex flex-col text-white mb-4">
            <img src={Logo} alt="" />
            <p className="font-normal text-lg leading-[17px] mt-2 ">
              Copyright © Travellian 2020 All rights reserved
            </p>
          </div>
          {/* Footer Navigation */}

          <div className="w-full grid md:grid-cols-2 gap-4 lg:grid-cols-3">
            {/* Menu */}
            <div className="text-white mb-4">
              <h3 className="font-medium text-2xl ">Menu</h3>
              <ul className="flex flex-col items-start gap-2 pt-2 text-lg">
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

            {/* Contact Info */}
            <div className="text-white mb-4">
              <h3 className="font-medium text-2xl  ">Contact Info</h3>
              <ul className="flex flex-col items-start gap-2 pt-2">
                <a className="text-lg" to="#">
                  +123 456 789
                </a>
                <a className="text-lg" to="#">
                  info@birthblessing.com
                </a>
                <a className="text-lg" to="#">
                  1245, Ho Chi Minh, VN
                </a>
              </ul>
            </div>
            {/* Social */}
            <div className="">
              <h3 className="text-2xl font-medium text-white mb-5">
                Follow us on
              </h3>
              <ul className="flex gap-7">
                <a href="#">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.9489 0.09375C18.8335 0.126667 21.4394 0.835611 23.7667 2.22058C26.0663 3.5779 27.9791 5.50247 29.3224 7.81024C30.6989 10.1516 31.4036 12.7733 31.4364 15.6754C31.3547 19.6463 30.1022 23.0377 27.6791 25.8499C25.256 28.662 22.1526 30.4017 18.9399 31.0687V19.9357H21.9772L22.6641 15.5607H18.0649V12.6952C18.0394 12.1011 18.2272 11.5176 18.5945 11.05C18.9623 10.5811 19.61 10.3347 20.5376 10.3107H23.3149V6.47829C23.2751 6.46547 22.8969 6.41477 22.1805 6.32619C21.3681 6.23113 20.551 6.18036 19.733 6.17409C17.8817 6.18264 16.4175 6.70487 15.3405 7.74081C14.2634 8.77645 13.7133 10.2748 13.6899 12.2359V15.5607H10.1899V19.9357H13.6899V31.0687C9.74526 30.4017 6.64181 28.662 4.21869 25.8499C1.79556 23.0377 0.543188 19.6462 0.461426 15.6754C0.494138 12.7731 1.1988 10.1514 2.5754 7.81024C3.9187 5.50247 5.83158 3.57791 8.13113 2.22058C10.4584 0.835877 13.0643 0.126933 15.9489 0.09375V0.09375Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width={33}
                    height={33}
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0002 17.0889C32.2402 7.92885 24.8802 0.488853 15.7602 0.608853C7.00018 0.728853 -0.0798169 7.96885 0.000183068 16.7289C0.0401831 23.0089 3.72018 28.4089 9.00018 31.0089C9.32018 31.1689 9.68018 30.9289 9.64018 30.5689C9.60018 29.5289 9.64018 28.4489 9.84018 27.5689C10.0402 26.6889 10.8402 23.3289 11.3602 21.1289C11.6002 20.0489 11.6402 18.9289 11.4402 17.8489C11.3602 17.4889 11.3202 17.0889 11.3202 16.6089C11.3202 14.2489 12.6802 12.4889 14.4002 12.4889C15.8402 12.4889 16.5602 13.5689 16.5602 14.8889C16.5602 16.3289 15.6402 18.5289 15.1602 20.5689C14.7602 22.2489 16.0002 23.6489 17.6802 23.6489C20.7202 23.6489 23.0402 20.4489 23.0402 15.8489C23.0402 11.7689 20.1202 8.92885 15.9202 8.92885C11.0802 8.92885 8.24018 12.5689 8.24018 16.3289C8.24018 17.8089 8.80018 19.3689 9.52018 20.2089C9.64018 20.3689 9.68018 20.5289 9.64018 20.6889C9.52018 21.2089 9.24018 22.3689 9.16018 22.6089C9.08018 22.9289 8.92018 22.9689 8.60018 22.8489C6.48018 21.8089 5.12018 18.6889 5.12018 16.2089C5.12018 10.8489 9.00018 5.92885 16.3602 5.92885C22.2402 5.92885 26.8402 10.1289 26.8402 15.7689C26.8402 21.6489 23.1602 26.3289 18.0002 26.3289C16.6402 26.3289 15.3602 25.7689 14.6002 25.0089C14.3602 24.7689 13.9602 24.8889 13.8802 25.2089C13.6002 26.2089 13.2002 27.8889 13.0402 28.4089C12.8002 29.3689 12.2802 30.4889 11.7202 31.4889C11.5602 31.7289 11.7202 32.0889 12.0002 32.1289C13.3202 32.4489 14.6802 32.6489 16.0802 32.6089C24.5602 32.5289 31.7602 25.4889 32.0002 17.0889V17.0889Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width={32}
                    height={33}
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3149 32.6083C16.209 32.6083 16.103 32.6083 15.9963 32.6078C13.488 32.6139 11.1704 32.5502 8.9165 32.413C6.8501 32.2873 4.96387 31.5731 3.46143 30.3481C2.01172 29.1659 1.02173 27.5675 0.519043 25.5978C0.081543 23.883 0.0583496 22.1996 0.0361328 20.5714C0.0200195 19.4032 0.00341797 18.019 0 16.6112C0.00341797 15.1977 0.0200195 13.8134 0.0361328 12.6452C0.0583496 11.0172 0.081543 9.33389 0.519043 7.61881C1.02173 5.64908 2.01172 4.05069 3.46143 2.86856C4.96387 1.64346 6.8501 0.929354 8.91675 0.803621C11.1707 0.666658 13.4888 0.602693 16.0024 0.608797C18.5115 0.603426 20.8284 0.666658 23.0823 0.803621C25.1487 0.929354 27.0349 1.64346 28.5373 2.86856C29.9873 4.05069 30.977 5.64908 31.4797 7.61881C31.9172 9.33365 31.9404 11.0172 31.9626 12.6452C31.9788 13.8134 31.9956 15.1977 31.9988 16.6054V16.6112C31.9956 18.019 31.9788 19.4032 31.9626 20.5714C31.9404 22.1994 31.9175 23.8827 31.4797 25.5978C30.977 27.5675 29.9873 29.1659 28.5373 30.3481C27.0349 31.5731 25.1487 32.2873 23.0823 32.413C20.9238 32.5443 18.7065 32.6083 16.3149 32.6083V32.6083ZM15.9963 30.1078C18.4639 30.1137 20.7295 30.0514 22.9304 29.9176C24.4929 29.8227 25.8477 29.3156 26.9575 28.4106C27.9834 27.5739 28.6899 26.4196 29.0574 24.9796C29.4216 23.5522 29.4426 22.0194 29.4629 20.5373C29.4788 19.3769 29.4954 18.0023 29.4988 16.6083C29.4954 15.214 29.4788 13.8398 29.4629 12.6794C29.4426 11.1972 29.4216 9.66446 29.0574 8.23673C28.6899 6.79678 27.9834 5.64249 26.9575 4.80582C25.8477 3.90103 24.4929 3.39395 22.9304 3.29898C20.7295 3.16495 18.4639 3.10318 16.0022 3.10855C13.5352 3.10269 11.2693 3.16495 9.06836 3.29898C7.50586 3.39395 6.15112 3.90103 5.04126 4.80582C4.01538 5.64249 3.30884 6.79678 2.94141 8.23673C2.57715 9.66446 2.55615 11.1969 2.53589 12.6794C2.52002 13.8407 2.50342 15.216 2.5 16.6112C2.50342 18.0004 2.52002 19.3759 2.53589 20.5373C2.55615 22.0194 2.57715 23.5522 2.94141 24.9796C3.30884 26.4196 4.01538 27.5739 5.04126 28.4106C6.15112 29.3153 7.50586 29.8224 9.06836 29.9174C11.2693 30.0514 13.5356 30.1139 15.9963 30.1078V30.1078ZM15.9368 24.4208C11.6291 24.4208 8.12427 20.9162 8.12427 16.6083C8.12427 12.3004 11.6291 8.79581 15.9368 8.79581C20.2446 8.79581 23.7493 12.3004 23.7493 16.6083C23.7493 20.9162 20.2446 24.4208 15.9368 24.4208V24.4208ZM15.9368 11.2958C13.0076 11.2958 10.6243 13.6791 10.6243 16.6083C10.6243 19.5375 13.0076 21.9208 15.9368 21.9208C18.8662 21.9208 21.2493 19.5375 21.2493 16.6083C21.2493 13.6791 18.8662 11.2958 15.9368 11.2958V11.2958ZM24.6243 6.29581C23.5889 6.29581 22.7493 7.13516 22.7493 8.17081C22.7493 9.20645 23.5889 10.0458 24.6243 10.0458C25.6599 10.0458 26.4993 9.20645 26.4993 8.17081C26.4993 7.13516 25.6599 6.29581 24.6243 6.29581Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width={32}
                    height={33}
                    viewBox="0 0 26 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.768 2.67201C24.808 3.08801 23.816 3.37601 22.76 3.50401C23.848 2.86401 24.68 1.84001 25.064 0.592008C24.04 1.20001 22.92 1.61601 21.736 1.87201C20.776 0.848008 19.4 0.208008 17.896 0.208008C14.984 0.208008 12.648 2.57601 12.648 5.45601C12.648 5.87201 12.68 6.25601 12.776 6.64001C8.42397 6.44801 4.58397 4.33601 1.99197 1.16801C0.135969 4.49601 2.21597 7.24801 3.59197 8.17601C2.75997 8.17601 1.92797 7.92001 1.22397 7.53601C1.22397 10.128 3.04797 12.272 5.41597 12.752C4.90397 12.912 3.75197 13.008 3.04797 12.848C3.71997 14.928 5.67197 16.464 7.94397 16.496C6.15197 17.904 3.52797 19.024 0.167969 18.672C2.50397 20.176 5.25597 21.04 8.23197 21.04C17.896 21.04 23.144 13.04 23.144 6.12801C23.144 5.90401 23.144 5.68001 23.112 5.45601C24.2 4.65601 25.096 3.72801 25.768 2.67201Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
