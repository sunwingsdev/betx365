import React, { useEffect, useRef, useState } from "react";
import betxLogo from "../../assets/Logo.svg";
import betxLargeLogo from "../../assets/LoginImage.avif";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoReload } from "react-icons/io5";
import { HiOutlineArrowRightStartOnRectangle } from "react-icons/hi2";
import { CiDollar } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
// import gameLogo from "../../assets/entrance.svg";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [myAccountOpen, setMyAccountOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);
  const modalRefTwo = useRef(null);
  const accountRef = useRef(null);
  const settingRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [amounts, setAmounts] = useState([
    50, 100, 200, 500, 1000, 2000, 5000, 3000,
  ]);
  const [selectedAmounts, setSelectedAmounts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedAmounts, setEditedAmounts] = useState([...amounts]);
  const [error, setError] = useState("");
  const [showSecondButton, setShowSecondButton] = useState(false);
  const [showSecondButtonTwo, setShowSecondButtonTwo] = useState(false);
  const [showSecondButtonThree, setShowSecondButtonThree] = useState(false);
  const [showSecondButtonFour, setShowSecondButtonFour] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    console.log("Input Value:", value);
  };

  const handleSelect = (amount) => {
    setError(""); // Reset error message
    if (selectedAmounts.includes(amount)) {
      // Already selected, so remove it
      setSelectedAmounts(selectedAmounts.filter((item) => item !== amount));
    } else {
      if (selectedAmounts.length < 6) {
        setSelectedAmounts([...selectedAmounts, amount]);
      } else {
        setError("You can select up to 6 amounts only!");
      }
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    console.log("Editing Mode ON. Current Amounts:", editedAmounts);
  };

  const handleSave = () => {
    setAmounts([...editedAmounts]);
    setIsEditing(false);
    console.log("Final Saved Amounts:", editedAmounts);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedAmounts([...amounts]); // Reset edited amounts
    console.log("Edit Canceled. Reverting to Original Amounts:", amounts);
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
  useEffect(() => {
    const handleClickOutsideTwo = (event) => {
      if (
        modalRefTwo.current &&
        !modalRefTwo.current.contains(event.target) &&
        settingRef.current &&
        !settingRef.current.contains(event.target) // My Setting button e click hole ignore korbe
      ) {
        setSettingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideTwo);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideTwo);
    };
  }, []);

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const buttons = [
    {
      label: "Home",
      icon: "M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z",
      bgColor: "",
      link: "/",
    },
    {
      label: "In-play",
      icon: "M12 8v4l3 3m5-10a9 9 0 11-6.627-2.628M5.25 5.25l1.5 1.5M18.75 5.25l-1.5 1.5",
      bgColor: "",
      link: "/inplay",
    },
    {
      label: "Sports",
      icon: "M8 12h8m-4 0V8m8-5H4a1 1 0 00-1 1v2a3 3 0 003 3h1a4 4 0 008 0h1a3 3 0 003-3V4a1 1 0 00-1-1zM8 21h8m-8-3h8m-6 0v-3m4 3v-3",
      bgColor: "",
      link: "/sports",
    },
    {
      label: "MultiMarket",
      icon: "M18 3V5H17V11L19 14V16H13V23H11V16H5V14L7 11V5H6V3H18ZM9 5V11.6056L7.4037 14H16.5963L15 11.6056V5H9Z",
      bgColor: "",
      link: "/multimarket",
    },
    // login Page design
    // {
    //   label: "Account",
    //   icon: "M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H5z",
    //   bgColor: "",
    //   link: "/login",
    // },
    {
      label: "Account",
      icon: "M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H5z",
      bgColor: "",
      link: "/myaccountphone",
    },
  ];

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "In-Play", link: "/inplay" },
    { label: "Multi Markets", link: "/multimarket" },
    { label: "Cricket", link: "/cricket" },
    { label: "Soccer", link: "/soccer" },
    { label: "Tennis", link: "/tennis" },
    { label: "Result", link: "/result" },
    { label: "Casino", link: "/casino" },
    { label: "Women's Premier League", link: "/womenleague" },
  ];
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

  const location = useLocation();

  const handelLogin = (e) => {
    console.log("Username:", username);
    console.log("Password:", password);
  };
  const handelChange = (e) => {
    setSearchText(e.target.value);
    console.log("Search Input:", e.target.value);
  };
  const navigate = useNavigate();
  return (
    <div className="relative">
      {/* top header */}
      <div className="bg-customBlack py-3 px-2   flex flex-row gap-2 items-center justify-center lg:justify-between">
        <div className="lg:flex hidden flex-row items-center gap-2">
          <img
            src={betxLogo}
            alt=""
            className="w-full max-w-[100px] lg:max-w-[150px]"
          />
          <div className="relative hidden   lg:flex">
            <input
              type="search"
              value={searchText}
              onChange={handelChange}
              name=""
              id=""
              className="w-full h-min pl-6   rounded-md placeholder:text-xs"
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
      {/* menu header */}
      <div className="bg-commonYellowColor whitespace-nowrap   flex-row  items-center  hidden lg:flex md:hidden justify-between px-6 ">
        <div>
          <ul className="flex flex-row items-center  text-xs ">
            {menuItems.map((item, index) => (
              <li
                className={`border-customBlack border-r text-customBlack border-opacity-20 font-bold 
            ${
              location.pathname === item.link
                ? "bg-headingHoverColor"
                : "hover:bg-headingHoverColor"
            }`}
              >
                <Link
                  to={item.link}
                  key={index}
                  className="py-2 px-2 block"
                  // login page design
                  // onClick={(event) => {
                  //   if (index === 6 || index === 7) {
                  //     event.preventDefault();
                  //     setOpenModal(true);
                  //   }
                  // }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row text-customBlack items-center gap-2   ">
          <h3 className="text-xs font-medium">Time Zone:</h3>
          <p className="text-sm font-semibold">GMT+6:0</p>

          <div
            className="relative cursor-pointer text-left"
            // login page design
            // onClick={() => setOpenModal(true)}
            onClick={() => setIsChecked(!isChecked)}
          >
            <button
              className={`hover:underline px-8 border-t-2 border-topGreenBorder  py-1 text-textYellowColor font-medium text-sm ${
                isChecked
                  ? "bg-topGreenBorder !text-customBlack"
                  : "bg-oneClickBetColor"
              }`}
            >
              One Click Bet
            </button>
            {/* Checkbox */}
            <div
              className={`w-4 h-4 absolute top-2 left-2 cursor-pointer rounded-sm border border-sliderButtonLightGray border-opacity-50 flex items-center justify-center ${
                isChecked ? "bg-tableGreenText" : "bg-black"
              }`}
            >
              {isChecked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="w-4 h-4"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>

          <div
            ref={settingRef}
            className="relative cursor-pointer"
            onClick={() => setSettingOpen((prev) => !prev)}
          >
            <p className="hover:underline font-semibold text-sm">Setting</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute w-4 h-auto top-1 left-full"
            >
              <path d="M12 1c-.6 0-1 .4-1 1v1.1c-.7.2-1.3.5-1.9.8l-.8-.8c-.4-.4-1-.4-1.4 0l-2 2c-.4.4-.4 1 0 1.4l.8.8c-.3.6-.6 1.2-.8 1.9H3c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h1.1c.2.7.5 1.3.8 1.9l-.8.8c-.4.4-.4 1 0 1.4l2 2c.4.4 1 .4 1.4 0l.8-.8c.6.3 1.2.6 1.9.8V22c0 .6.4 1 1 1h3c.6 0 1-.4 1-1v-1.1c.7-.2 1.3-.5 1.9-.8l.8.8c.4.4 1 .4 1.4 0l2-2c.4-.4.4-1 0-1.4l-.8-.8c.3-.6.6-1.2.8-1.9H22c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1h-1.1c-.2-.7-.5-1.3-.8-1.9l.8-.8c.4-.4.4-1 0-1.4l-2-2c-.4-.4-1-.4-1.4 0l-.8.8c-.6-.3-1.2-.6-1.9-.8V2c0-.6-.4-1-1-1h-3zm1.5 6a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
            </svg>
          </div>
        </div>

        {openModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center lg:w-full   h-full bg-customBlack bg-opacity-50 "
            // onClick={(e) =>{
            //   if (e.target === e.currentTarget)
            //     {setOpenModal(false);

            //   }
            // }
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setOpenModal(false); // Modal বন্ধ হবে যদি বাহিরের জায়গায় ক্লিক করা হয়
              }
            }}
          >
            <div className="relative flex flex-row ">
              <button
                className="absolute top-2 right-2 bg-signUpColor p-1"
                onClick={() => setOpenModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-auto"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <img src={betxLargeLogo} alt="" />
              <div className="bg-customWhite py-28 px-10  flex flex-col space-y-2">
                <h3 className="text-customBlack text-xl font-semibold">
                  Please Login to continue
                </h3>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-sliderButtonMediumGray border w-full shadow-2xl px-2 rounded-md py-1 placeholder:font-medium placeholder:text-sm"
                  placeholder="User Id"
                />
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  className="border-sliderButtonMediumGray w-full placeholder:text-sm placeholder:font-medium rounded-md border py-1 px-2 shadow-2xl"
                />
                <div className="relative">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border-sliderButtonMediumGray border shadow-2xl w-full px-2 rounded-md placeholder:text-sm py-1 placeholder:font-medium"
                    placeholder="Validation Code"
                  />
                  <p className="text-lg text-customBlack font-bold absolute top-0 right-2">
                    {" "}
                    5225
                  </p>
                </div>

                <div className="relative">
                  <button className="bg-loginColor py-1  rounded-md   w-full font-bold">
                    Login
                  </button>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 absolute right-16  top-1/2 transform -translate-y-1/2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {settingOpen && (
        <div
          className={` lg:absolute lg:top-[105px] fixed inset-0   lg:inset-auto  top-0 lg:bg-transparent bg-customBlack bg-opacity-50 lg:right-0  flex  lg:justify-end z-50 `}
          ref={modalRefTwo}
        >
          <div
            className="bg-settingModalColor lg:px-2 text-sm lg:h-auto w-full  h-[400px] lg:overflow-y-hidden overflow-y-scroll   shadow-lg lg:w-80 "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-white sticky top-0  z-50 border-b border-customBlack lg:hidden bg-inPlayTabColor    flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2 px-2">
                <IoSettingsSharp className="w-5 h-auto stroke-2" />
                <p>setting</p>
              </div>
              <div
                className="py-3 px-2 border-l border-textYellowColor"
                onClick={() => setSettingOpen(false)}
              >
                <RxCross2 />
              </div>
            </div>
            <h3 className="lg:hidden py-1 bg-inPlayTabColor px-2 text-customWhite w-full">
              Stake
            </h3>

            <div className="grid grid-cols-3 px-2 lg:px-0 items-center gap-2 py-2 border-b border-inPlayTabColor">
              <h2 className=" font-medium ">Default Stake</h2>
              <input
                type="number"
                name=""
                id=""
                value={inputValue}
                onChange={handleInputChange}
                className="border py-1 lg:py-0 px-2 border-inPlayTabColor border-t-4 rounded-md"
              />
            </div>
            <div className="py-2 lg:border-b px-2 lg:px-0 font-medium border-inPlayTabColor ">
              <h2 className=" font-medium ">
                {" "}
                <span className="lg:hidden">Quick</span> Stakes
              </h2>
              {/* Amount Show Section */}
              {!isEditing && (
                <div className="flex flex-col  lg:flex-row lg:items-center gap-2 ">
                  <div className="grid grid-cols-4 gap-2">
                    {amounts.map((amount, index) => (
                      <button
                        key={index}
                        className={`px-4 py-1 flex items-center justify-center  rounded-[4px] border  border-inPlayTabColor text-black text-xs font-bold ${
                          selectedAmounts.includes(amount)
                            ? "lg:bg-oneClickBetColor bg-commonYellowColor text-customBlack lg:text-textYellowColor"
                            : "bg-customWhite"
                        }`}
                        onClick={() => handleSelect(amount)}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleEdit}
                    className=" w-full lg:w-auto lg:px-3 py-2  lg:py-6 flex gap-[2px] flex-row items-center justify-center lg:justify-normal border font-medium border-inPlayTabColor  text-black bg-customWhite rounded"
                  >
                    Edit <span className="lg:hidden">Stakes</span>
                    <MdEdit />
                  </button>
                </div>
                // {error && <p className="text-red-500 mt-2">{error}</p>}
              )}

              {/* Edit Amount Section */}
              {isEditing && (
                <div className="  flex flex-col lg:flex-row  lg:items-center gap-2 ">
                  <div className="grid grid-cols-4 gap-2">
                    {editedAmounts.map((amt, index) => (
                      <input
                        key={index}
                        type="number"
                        value={amt}
                        onChange={(e) => {
                          const newAmounts = [...editedAmounts];
                          newAmounts[index] = parseInt(e.target.value) || 0;
                          setEditedAmounts(newAmounts);
                        }}
                        className="px-[4px] py-1 border border-t-2 border-inPlayTabColor rounded-[4px] text-black text-xs font-bold"
                      />
                    ))}
                  </div>
                  <div className="flex gap-2 ">
                    <button
                      onClick={handleSave}
                      className=" w-full lg:w-auto lg:px-5 py-2 lg:py-6 flex gap-[2px] flex-row items-center justify-center lg:justify-normal border border-inPlayTabColor  lg:text-black text-textYellowColor font-bold bg-oneClickBetColor lg:bg-commonYellowColor rounded"
                    >
                      OK
                    </button>
                    {/* <button
                          onClick={handleCancel}
                          className="p-2 bg-red-500 text-white rounded"
                        >
                          Cancel
                        </button> */}
                  </div>
                </div>
              )}
            </div>
            <div className="py-2 lg:border-b border-inPlayTabColor ">
              <h3 className="font-medium py-1 px-2 lg:px-0 lg:text-customBlack text-customWhite  lg:bg-transparent  bg-inPlayTabColor">
                Odds
              </h3>
              <div className="flex flex-row items-center py-1 lg:py-0 px-2 lg:px-0 gap-2 relative">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="hidden lg:block"
                />
                <p className="font-medium">Highlight when odds change</p>

                {/* 1st Button (By default visible) */}
                {!showSecondButton && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-tableGreenText pr-1 pl-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButton(true)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}

                {/* 2nd Button (Visible after clicking 1st button) */}
                {showSecondButton && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-sliderButtonMediumGray pl-1 pr-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButton(false)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}
              </div>
            </div>
            <div className="py-2 lg:border-b border-inPlayTabColor">
              <h3 className="font-medium py-1 px-2 lg:px-0 lg:text-customBlack text-customWhite  lg:bg-transparent  bg-inPlayTabColor">
                Fancy Bet
              </h3>

              <div className="flex flex-row items-center py-1 lg:py-0 px-2 lg:px-0 gap-2 relative">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="hidden lg:block"
                />
                <p className="font-medium">Accept any odds</p>

                {/* 1st Button (By default visible) */}
                {!showSecondButtonTwo && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-tableGreenText pr-1 pl-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButtonTwo(true)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}

                {/* 2nd Button (Visible after clicking 1st button) */}
                {showSecondButtonTwo && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-sliderButtonMediumGray pl-1 pr-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButtonTwo(false)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}
              </div>
            </div>
            <div className="py-2 lg:border-b border-inPlayTabColor">
              <h3 className="font-medium py-1 px-2 lg:px-0 lg:text-customBlack text-customWhite  lg:bg-transparent  bg-inPlayTabColor">
                SportsBook
              </h3>
              <div className="flex flex-row items-center py-1 lg:py-0 px-2 lg:px-0 gap-2 relative">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="hidden lg:block"
                />
                <p className="font-medium">Accept any odds</p>

                {/* 1st Button (By default visible) */}
                {!showSecondButtonThree && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-tableGreenText pr-1 pl-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButtonThree(true)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}

                {/* 2nd Button (Visible after clicking 1st button) */}
                {showSecondButtonThree && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-sliderButtonMediumGray pl-1 pr-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButtonThree(false)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}
              </div>
            </div>
            <div className="py-2 lg:border-b border-inPlayTabColor">
              <h3 className="font-medium py-1 px-2 lg:px-0 lg:text-customBlack text-customWhite  lg:bg-transparent  bg-inPlayTabColor">
                Binary
              </h3>
              <div className="flex flex-row items-center py-1 lg:py-0 px-2 lg:px-0 gap-2 relative">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="hidden lg:block"
                />
                <p className="font-medium">Accept any odds</p>

                {/* 1st Button (By default visible) */}
                {!showSecondButtonFour && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-tableGreenText pr-1 pl-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButtonFour(true)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}

                {/* 2nd Button (Visible after clicking 1st button) */}
                {showSecondButtonFour && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-sliderButtonMediumGray pl-1 pr-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButtonFour(false)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}
              </div>
            </div>

            <div className="py-4 px-2 lg:px-2 flex flex-row w-full lg:w-auto lg:justify-center gap-2">
              <button
                className="px-8 w-full lg:w-auto border border-inPlayTabColor bg-customWhite font-bold  rounded-sm"
                onClick={() => setSettingOpen(false)}
              >
                Cancel
              </button>
              <button className="px-8 w-full lg:w-auto py-2 bg-oneClickBetColor text-textYellowColor rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {/* bottom navbar for small screen */}
      <div className="fixed bottom-0 w-full z-50  lg:hidden">
        <div className="grid grid-cols-5   justify-items-center bg-footer-gradient text-customWhite text-xs  whitespace-nowrap font-medium">
          {buttons.map((btn, index) => (
            <Link
              to={btn.link}
              className={`px-1 py-1 ${
                location.pathname === btn.link
                  ? "bg-footer-gradient-active"
                  : "hover:bg-footer-gradient-active"
              }`}
            >
              <button key={index} className=" flex flex-col items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="white"
                  className="w-5 h-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={btn.icon}
                  />
                </svg>
                {btn.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
