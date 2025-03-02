import React, { useEffect, useRef, useState } from 'react';
import betxLogo from "../../assets/betxlogoNew.png";
import { CiDollar } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { HiOutlineArrowRightStartOnRectangle } from "react-icons/hi2";
import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const TopHeader = ({ settingOpen, setSettingOpen }) => {
    const events = ["React Meetup", "JS Conference", "CSS Workshop", "Next.js Summit"];
     const profileInformation = [
        { id: 1, name: "My Profile", path: "/myaccount#1" },
        { id: 2, name: "Balance Overview", path: "/myaccount#2" },
        { id: 3, name: "Account Statement", path: "/myaccount#3" },
        { id: 4, name: "My Bets", path: "/myaccount#4-1" },
        { id: 5, name: "Bets History", path: "/myaccount#4-2" },
        { id: 6, name: "Profit Loss", path: "/myaccount#4-3" },
        { id: 7, name: "Activity Log", path: "/myaccount#5" },
        { id: 8, name: "Check Sport Wise Result", path: "/result" },
        { id: 9, name: "Balance Transfer", path: "/balancetransfer" },
      ];
    
    const [searchText, setSearchText] = useState("");
        const [myAccountOpen, setMyAccountOpen] = useState(false);
        
          const accountRef = useRef(null);
            const modalRef = useRef(null);


    const handelChange = (e) => {
        setSearchText(e.target.value);
        console.log("Search Input:", e.target.value);
      };
      const handleLogout = () => {
        console.log("Logout clicked");
      };
      useEffect(() => {
          const handleClickOutside = (event) => {
            if (
              modalRef.current &&
              !modalRef.current.contains(event.target) &&
              accountRef.current &&
              !accountRef.current.contains(event.target) // My Account button e click hole ignore korbe
            ) {
              setMyAccountOpen(false);
            }
          };
      
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, []);
      const filteredEvents = events.filter((event) =>
        event.toLowerCase().includes(searchText.toLowerCase())
      );
      const navigate = useNavigate();
    return (
        <div className="bg-topHeaderColor py-3 px-2   flex flex-row gap-2 items-center justify-center lg:justify-between ">
        <div className="lg:flex hidden flex-row items-center gap-2">
          <img
            src={betxLogo}
            alt=""
            className="w-full max-w-[100px] lg:max-w-[150px]"
          />
          <div className="relative hidden lg:flex flex-col gap-2">
      {/* Search Input */}
      <div className="relative">
        <input
          type="search"
          value={searchText}
          onChange={handelChange}
          className="w-full h-min pl-6 pr-8 rounded-md placeholder:text-xs border border-gray-300"
          placeholder="Search Events"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-auto absolute top-1 left-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 3 10.5a7.5 7.5 0 0 0 13.65 6.15z"
          />
        </svg>

        {/* Cross Icon */}
        
      </div>

      {/* No Events Found Message */}
      {searchText && filteredEvents.length === 0 && (
        <p className="text-xs absolute  left-0 w-full   mt-6  bg-customWhite px-2 py-1 rounded-b-md text-customBlack">No events found matching...</p>
      )}
    </div>
        </div>
        {/* login page design */}
        {/* <div className=" hidden lg:flex  flex-row   gap-2 items-center ">
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Username"
              className=" h-min  rounded-md pl-2 w-full   placeholder:text-xs"
              onClick={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="relative  gap-2  ">
            <input
              type={showPassword ? "text" : "password"}
              name=""
              id=""
              placeholder="Password"
              className="h-min rounded-md w-full pl-2 placeholder:text-xs"
              onClick={(e) => setPassword(e.target.value)}
            />
            <button
              className="absolute top-1 right-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-auto "
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-auto "
                >
                  <path d="M17.94 17.94A9 9 0 0 1 12 20c-7 0-11-8-11-8a18.36 18.36 0 0 1 3.8-4.6" />
                  <path d="M9.88 9.88A3 3 0 0 1 12 9c1.66 0 3 1.34 3 3 0 .6-.18 1.16-.5 1.62" />
                  <path d="M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>

          <div className="relative  ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Validation"
              className="h-min w-full rounded-md pl-2 placeholder:text-xs"
            />
            <h3 className="text-customBlack absolute top-0 right-2 font-bold">
              6956
            </h3>
          </div>

          <div className="flex flex-row gap-1 ">
            <button
              className="bg-loginRedColor text-customWhite px-4 py-1 h-min rounded-md font-bold text-sm "
              onClick={handelLogin}
            >
              Login
            </button>

            <button className="bg-signUpColor text-customWhite px-3 py-1 whitespace-nowrap h-min rounded-md font-bold text-sm ">
              Sign Up
            </button>
          </div>
        </div>
        <div className="lg:hidden  flex flex-row gap-2">
          <button className="bg-signUpColor text-customWhite px-3 py-1 whitespace-nowrap h-min rounded-sm font-bold text-sm ">
            Sign Up
          </button>

          <div className="relative">
            <Link className="" to="/login">
              <button
                className="bg-loginRedColor text-customWhite px-8 py-1 h-min rounded-sm font-bold text-sm "
                onClick={handelLogin}
              >
                Login
              </button>
              <span className="absolute top-0 left-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-7 h-auto "
                >
                  <path
                    fillRule="evenodd"
                    d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div> */}
        <div className="flex flex-row items-center justify-center  gap-1 lg:gap-2 relative">
          <div className="lg:hidden flex flex-row   text-customWhite bg-signUpColor  rounded-[4px]  p-1  items-center ">
            <span>
              <CiDollar className="w-5 h-auto stroke-1" />
            </span>

            <h3 className="text-xs text-textYellowColor">Bet</h3>
          </div>
          <div className="flex flex-row items-center font-medium rounded-[4px]  bg-signUpColor lg:bg-none whitespace-nowrap text-[10px] lg:text-xs lg:border border-sliderButtonMediumGray text-textYellowColor  lg:text-customWhite relative">
            <div className="flex flex-row items-center lg:py-1 hover:underline cursor-pointer  px-2   gap-2">
              <h3 className="">
                Main <span className="font-bold "> PBU 0.00</span>
              </h3>
              <p className="">
                {" "}
                Exposure <span className="font-bold ">0.00</span>
              </p>
              <button className="text-[10px] border  px-3 rounded-md border-sliderButtonMediumGray">
                +4
              </button>
            </div>
            <span className="border-l py-[6px] lg:py-1 px-1 text-customWhite lg:text-sliderButtonMediumGray border-customBlack lg:border-sliderButtonMediumGray">
              <IoReload className="w-4 h-auto stroke-2" />
            </span>
          </div>
          <span
            className="text-customWhite bg-signUpColor  rounded-[4px] p-1 lg:hidden"
            onClick={() => setSettingOpen((prev) => !prev)}
          >
            <IoSettingsSharp className="w-5 h-auto stroke-2" />
          </span>
          <div
            ref={accountRef}
            className="lg:flex hidden text-customWhite py-[5px] rounded-md font-medium text-xs flex-row items-center gap-1 border px-2 border-sliderButtonMediumGray cursor-pointer "
            onClick={() => setMyAccountOpen((prev) => !prev)}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-4 h-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H5z"
                />
              </svg>
            </span>
            <h3 className="hover:underline">My Account</h3>
          </div>
          {myAccountOpen && (
            <div
              className="absolute top-full left-1/2 w-[200px] bg-customWhite shadow-lg rounded-sm pb-2 font-medium mt-2 z-50"
              ref={modalRef}
            >
              <div
                className=" text-customBlack"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="hover:bg-sliderButtonMediumGray hover:text-customWhite border-b border-customBlack ">
                  <div className="px-2 flex flex-row justify-between items-center text-sm">
                    <h3 className="   ">userDemo11</h3>
                    <p className="text-[10px] border-l border-customBlack px-1">
                      GMT+6:0
                    </p>
                  </div>
                </div>
                {profileInformation.map((item, index) => (
                  <div className=" border-b border-sliderButtonMediumGray">
                    <button
                      key={item.id}
                      className="block w-full   px-2 text-left text-sm hover:text-customWhite hover:bg-sliderButtonMediumGray "
                      onClick={() => navigate(item.path)}
                    >
                      {item.name}
                    </button>
                  </div>
                ))}
                <div className="px-2 relative ">
                  <button
                    className="bg-logoutBlueColor text-customWhite text-sm  w-full font-bold rounded-md"
                    onClick={handleLogout}
                  >
                    LOGOUT
                  </button>
                  <span className="absolute top-[5px] text-sm text-customWhite right-1/3 translate-x-full   ">
                    <HiOutlineArrowRightStartOnRectangle className="w-4 h-auto stroke-[2]" />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default TopHeader;