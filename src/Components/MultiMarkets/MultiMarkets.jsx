import React, { useCallback, useEffect, useState } from "react";
import banner1 from "../../assets/Banner1.avif";
import banner2 from "../../assets/Banner2.avif";
import banner3 from "../../assets/Banner3.avif";
import banner4 from "../../assets/Banner4.avif";
import banner5 from "../../assets/Banner5.avif";
import banner7 from "../../assets/Banner7.avif";
import banner8 from "../../assets/Banner8.avif";
import banner9 from "../../assets/Banner9.avif";
import banner10 from "../../assets/Banner10.avif";
import banner11 from "../../assets/Banner11.avif";
import banner12 from "../../assets/Banner12.avif";
import banner13 from "../../assets/Banner13.avif";
import banner14 from "../../assets/Banner14.avif";
import banner15 from "../../assets/Banner15.avif";
import banner16 from "../../assets/Banner16.avif";
import banner17 from "../../assets/Banner17.avif";
import banner18 from "../../assets/Banner18.avif";
import banner19 from "../../assets/Banner19.avif";
import banner20 from "../../assets/Banner20.avif";
import PLogo from "../../assets/download.svg";
import BLogo from "../../assets/download (2).svg";
import FLogo from "../../assets/download (3).svg";
import { RiPushpin2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Marquee from "../Marquee/Marquee";
import { IoReload } from "react-icons/io5";

const MultiMarkets = () => {
  const tabData = {
    Cricket: [
      "Virtual IPL 2024",
      "Virtual SA 2024",
      "Virtual PSL 2024",
      "Rani Suryamukhi Devi T20",
      "CSA Provincial One-Day..",
      "ICC Champions Trophy",
      "CSA Provincial One-Day..",
      "Women_s Premier League",
      "ICC Cricket World ..",
      "One Day Internationals",
    ],
    Soccer: [
      "ARGENTINA Primera Division",
      "BELGIUM Jupiler Pro League",
      "ENGLAND Premier League",
      "TURKEY Super Lig",
      "NETHERLANDS Eredivisie",
      "ITALY Serie B",
      "KUWAIT Premier League",
      "SPAIN LaLiga",
      "ISRAEL Ligat haAl",
      "POLAND Ekstraklasa",
    ],
    Tennis: [
      "WTA - SINGLES: DOHA ...",
      "ATP - SINGLES MARSEILLE...",
      "ATP - SINGLES DELRAY...",
      "ATP - SINGLES BUENOS...",
      "CHALLENGER WOMEN...",
      "ATP - SINGLES Rio...",
    ],
  };
  const banners = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner7,
    banner8,
    banner9,
    banner10,
    banner11,
    banner12,
    banner13,
    banner14,
    banner15,
    banner16,
    banner17,
    banner18,
    banner19,
    banner20,
  ];
  const cricketData = [
    [
      {
        id: 1,
        teams: "Women's Premier League",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 3.39,
          team2: 2.3,
          team3: 5.16,
          team4: 3.59,
        },
      },
      {
        id: 2,
        teams: "ICC Champions Trophy",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 9.1,
          team2: 5.8,
        },
      },
      {
        id: 3,
        teams: "Titans Women v Garden Route...",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 4,
        teams: "Border v Northern Cape",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 5,
        teams: "Perth Scorchers SRL T20 v Brisbane...",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 6,
        teams: "Delhi Royals v Gujarat Samp..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 7,
        teams: "North West Dragons v Knights",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.54,
          team2: 1.55,
          team3: 2.8,
          team4: 2.86,
        },
      },
      {
        id: 8,
        teams: "Western Province v Lions",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.04,
          team2: 2.16,
          team3: 1.87,
          team4: 1.95,
        },
      },
      {
        id: 9,
        teams: "Durban Super Giants SRL T20 v Pretoria..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 10,
        teams: "Mumbai Indians Women v Delhi..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.04,
          team2: 2.06,
          team3: 1.94,
          team4: 1.95,
        },
      },
      {
        id: 11,
        teams: "Quetta Gladiators SRL T20 v Multan..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 12,
        teams: "Joburg Super Kings SRL T20 v Mi Cape..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 13,
        teams: "Lucknow Super Giants SRL T20 v Chennai..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 14,
        teams: "Oman v Namibia",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.2,
          team2: 2.34,
          team3: 1.75,
          team4: 1.83,
        },
      },
      {
        id: 15,
        teams: "Zimbabwe v Ireland",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.97,
          team2: 1.99,
          team3: 2.02,
          team4: 2.04,
        },
      },
      {
        id: 16,
        teams: "Gujarat Giants Women v UP Warriorz..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.95,
          team2: 2.1,
          team3: 1.91,
          team4: 2.06,
        },
      },
    ],
  ];
  const soccerData = [
    [
      {
        id: 1,
        teams: " Hearts v Rangers I",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.86,
          team2: 2.88,
          team3: 2.28,
          team4: 2.3,
          team5: 4.7,
          team6: 4.8,
        },
      },
      {
        id: 2,
        teams: " PSIS Semarang v PSM Makassar ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.07,
          team2: 1.08,
          team3: 16.5,
          team4: 20,
          team5: 60,
          team6: 90,
        },
      },
      {
        id: 3,
        teams: " FK Radnicki 1923 v Mladost Lucani",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.69,
          team2: 1.76,
          team3: 3.4,
          team4: 3.6,
          team5: 7.4,
          team6: 7.8,
        },
      },
      {
        id: 4,
        teams: " Hradec Kralove v Bohemians 1905 ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.61,
          team2: 1.65,
          team3: 4.2,
          team4: 4.4,
          team5: 6.4,
          team6: 6.8,
        },
      },
      {
        id: 5,
        teams: " Nurnberg v SSV Ulm ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.94,
          team2: 2.96,
          team3: 3.65,
          team4: 3.7,
          team5: 2.56,
          team6: 2.58,
        },
      },
      {
        id: 6,
        teams: " Unterhaching v Saarbrucken ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.75,
          team2: 1.76,
          team3: 4.1,
          team4: 4.2,
          team5: 5.2,
          team6: 5.3,
        },
      },
      {
        id: 7,
        teams: " Schalke 04 v Karlsruhe ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.22,
          team2: 2.3,
          team3: 4.1,
          team4: 4.3,
          team5: 3.1,
          team6: 3.2,
        },
      },
      {
        id: 8,
        teams: " Gent v KFCO Beerschot Wilrijk ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.82,
          team2: 1.83,
          team3: 3.95,
          team4: 4,
          team5: 4.9,
          team6: 5,
        },
      },
      {
        id: 9,
        teams: " Jahn Regensburg v Hamburger SV ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.72,
          team2: 1.75,
          team3: 3.8,
          team4: 3.95,
          team5: 5.9,
          team6: 6,
        },
      },
      {
        id: 10,
        teams: " Radnicki Nis v FK Jedinstvo Ub ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.8,
          team2: 2.82,
          team3: 3.65,
          team4: 3.7,
          team5: 2.66,
          team6: 2.7,
        },
      },
    ],
  ];

  const tennisData = [
    [
      {
        id: 1,
        teams: "Kovalik v P Kotov",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.78,
          team2: 2.81,
          team3: 1.56,
          team4: 1.57,
        },
      },
      {
        id: 2,
        teams: "Fucsovics v Vavassori",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.14,
          team2: 1.15,
          team3: 7.8,
          team4: 8.2,
        },
      },
      {
        id: 3,
        teams: "Da Merida v Kukushkin",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 50,
          team2: 100,
          team3: 1.01,
          team4: 1.02,
        },
      },
      {
        id: 4,
        teams: "Lu Nardi v Uchiyama",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.21,
          team2: 1.24,
          team3: 5.1,
          team4: 5.6,
        },
      },
      {
        id: 5,
        teams: "Atmane v Ot Virtanen",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.14,
          team2: 2.18,
          team3: 1.86,
          team4: 1.88,
        },
      },
      {
        id: 6,
        teams: "Bot Van de Zandschulp v Er Kirkin",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.1,
          team2: 1.12,
          team3: 9.4,
          team4: 11,
        },
      },
      {
        id: 7,
        teams: "Misolic v Da Rincon",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.22,
          team2: 2.26,
          team3: 1.8,
          team4: 1.82,
        },
      },
      {
        id: 8,
        teams: "Carreno Busta v Ben Hassan",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.21,
          team2: 1.22,
          team3: 5.6,
          team4: 5.8,
        },
      },
      {
        id: 9,
        teams: "A Anisimova v Ostapenko",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.34,
          team2: 2.38,
          team3: 1.73,
          team4: 1.74,
        },
      },
      {
        id: 10,
        teams: "Ziz Bergs v Humbert",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 3.3,
          team2: 3.35,
          team3: 1.42,
          team4: 1.43,
        },
      },
    ],
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [activeTab, setActiveTab] = useState("Cricket");

  const [isBetSlipOpen, setIsBetSlipOpen] = useState(true);
  const [BetOpen, setBetOpen] = useState(true);
  const [checkboxes, setCheckboxes] = useState({
    betInfo: false,
    consolidate: false,
    avgOdds: false,
  });
  const tabs = ["Cricket", "Soccer", "Tennis"];
  const checkboxOptions = [
    { name: "betInfo", label: "Bet Info" },
    { name: "consolidate", label: "Consolidate" },
    { name: "avgOdds", label: "Average Odds" },
  ];


  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log("Selected Value:", event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
    console.log(`${name}: ${checked}`);
  };

  const handleNextSlide = useCallback(() => {
    if (currentIndex === banners.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1000);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, banners.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNextSlide]);

  return (
    <div className="bg-inPlayBgColor">
      <div className="lg:flex hidden flex-row  gap-2 w-full mx-auto  lg:max-w-[1300px]">
        <div className="w-[30%]">
          <div className="flex flex-row justify-between   bg-inPlayTabColor ">
            <span className="border-r rounded-2xl px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2"
                width="24"
                height="24"
              >
                <circle cx="12" cy="5" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            </span>
            <div className="flex flex-row items-center font-bold text-sm text-white gap-2 px-2">
              <h2
                className="border-r px-4   cursor-pointer rounded-2xl"
                onClick={() => setIsOpen(!isOpen)}
              >
                Sports:
              </h2>
              <p>{isOpen ? activeTab : ""}</p>
            </div>
          </div>
          <div className="w-full h-[500px] bg-white  shadow-2xl">
            <div className="  rounded-lg">
              <ul className="mt-2 text-tableBlueText  text-xs   list-inside">
                {isOpen ? (
                  tabData[activeTab] ? (
                    tabData[activeTab].map((item, index) => (
                      <div className="flex flex-row items-center px-4 space-y-2 border-b border-textYellowColor  border-opacity-30 justify-between cursor-pointer">
                        <li
                          className="hover:text-customBlack cursor-pointer"
                          key={index}
                        >
                          {item}
                        </li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    ))
                  ) : (
                    <li>Please select a sport to see details.</li>
                  )
                ) : (
                  <>
                    <div>
                      {!selectedData && (
                        <ul className="mt-2 text-tableBlueText text-xs list-inside">
                          <div className="">
                            <div
                              className="flex flex-row justify-between px-4 py-1 border-b border-textYellowColor border-opacity-30 cursor-pointer  "
                              onClick={() => setSelectedData(tabData.Cricket)}
                            >
                              <li
                                className=" cursor-pointer hover:text-customBlack "
                                onClick={() => setSelectedData(tabData.Cricket)}
                              >
                                Cricket
                              </li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4 text-gray-400"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                            <div
                              className="flex flex-row justify-between px-4 py-1 border-b border-textYellowColor border-opacity-30 cursor-pointer  "
                              onClick={() => setSelectedData(tabData.Soccer)}
                            >
                              <li
                                className=" cursor-pointer hover:text-customBlack "
                                onClick={() => setSelectedData(tabData.Cricket)}
                              >
                                Soccer
                              </li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4 text-gray-400"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                            <div
                              className="flex flex-row justify-between px-4 py-1 border-b border-textYellowColor border-opacity-30 cursor-pointer "
                              onClick={() => setSelectedData(tabData.Tennis)}
                            >
                              <li className=" hover:text-customBlack cursor-pointer ">
                                Tennis
                              </li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4 text-gray-400"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        </ul>
                      )}

                      {selectedData && (
                        <ul className="mt-4 text-xs">
                          {selectedData.map((item, index) => (
                            <div
                              key={index}
                              className="flex flex-row items-center px-4 py-1 border-b border-textYellowColor border-opacity-30 justify-between cursor-pointer"
                            >
                              <li className="hover:text-customBlack">{item}</li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4 text-gray-400"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          ))}

                          <button
                            className="mt-4 px-4 py-2 bg-tableBlueText text-white rounded hover:bg-tableLogoColor"
                            onClick={() => setSelectedData(null)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-5 h-auto"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </button>
                        </ul>
                      )}
                    </div>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        {isOpen ? (
          <div className="w-full overflow-y-auto h-[500px] overflow-x-hidden">
             <Marquee />
            <div className="relative w-full overflow-hidden">
              <div
                className="w-full flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: isTransitioning
                    ? "transform 1s ease-in-out"
                    : "none",
                }}
              >
                {[...banners, banners[0]].map((banner, index) => (
                  <img
                    key={index}
                    src={banner}
                    alt=""
                    className="w-full h-24 lg:h-auto md:h-auto flex-shrink-0"
                  />
                ))}
              </div>

              <div className="absolute bottom-0 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-customBlack bg-opacity-50 px-4 py-1 md:py-2 lg:py-2 rounded-lg">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1 w-1 md:w-6 lg:w-6 rounded-full md:rounded-md lg:rounded-md ${
                      currentIndex === index
                        ? "bg-sliderButtonLightGray"
                        : "bg-sliderButtonMediumGray"
                    }`}
                  ></button>
                ))}
              </div>
              <div></div>
            </div>
            <div className="relative bg-commonYellowColor">
              <h3 className="px-2 py-10  font-bold w-full text-customBlack bg-commonYellowColor">
                Highlights
              </h3>

              <div className="absolute bottom-0 left-4 flex text-sm w-full max-w-3xl gap-x-2 flex-row items-center justify-center  bg-footer-gradient lg:bg-none  p-1 lg:p-0 lg:justify-start whitespace-nowrap   ">
                {tabs.map((tab, index) => (
                  <button
                    key={tab}
                    className={`w-full lg:w-[20%] py-1 px-2 lg:px-0 text-customWhite        rounded-t-lg ${
                      activeTab === tab
                        ? " bg-customWhite lg:!text-customBlack font-bold  lg:bg-sliderButtonMediumGray  "
                        : " lg:bg-inPlayTabColor bg-smallDeviceTabColor"
                    } `}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto overflow-y-auto ">
              {activeTab === "Cricket" && (
                <div className="   ">
                  <div className="shadow-2xl   ">
                    <div className="px-2 lg:px-0 border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0 ">
                      <table className="">
                        <thead className="bg-sliderButtonMediumGray text-customBlack lg:table-header-group hidden   w-full">
                          <tr>
                            <th></th>
                            <th></th>
                            <th>1</th>
                            <th>x</th>
                            <th>2</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className=" ">
                          {cricketData[0].map((cricket, i) => (
                            <tr key={i} className="md:justify-items-center">
                              <td className=" lg:pr-[96px] w-full h-auto border-b py-2 ">
                                <div className="flex  flex-col-reverse  border-gray-400 whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
                                  <div className="flex flex-row items-center ">
                                    <span className="text-tableGreenText ">
                                      <svg
                                        className="w-3 h-3  "
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                      >
                                        <circle
                                          cx="50"
                                          cy="50"
                                          r="40"
                                          fill="green"
                                        />
                                      </svg>
                                    </span>
                                    <span className="text-tableBlueText cursor-pointer underline font-bold text-xs lg:text-md">
                                      {i === 0 ? (
                                        <Link to="/womenleague" className="">
                                          {cricket.teams}
                                        </Link>
                                      ) : (
                                        cricket.teams
                                      )}
                                    </span>
                                  </div>
                                  <div className="flex flex-row gap-2">
                                    <span className="bg-tableLogoColor rounded-sm  ">
                                      <svg
                                        width="14"
                                        height="auto"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <circle
                                          cx="12"
                                          cy="12"
                                          r="10"
                                          stroke="white"
                                          stroke-width="2"
                                          fill=""
                                        />
                                        <polygon
                                          points="10,8 16,12 10,16"
                                          fill="white"
                                        />
                                      </svg>
                                    </span>
                                    <span className="text-tableGreenText  ">
                                      {cricket.status}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="hidden  lg:table-cell px-2  py-2 h-auto border-b  ">
                                <div className="flex  flex-row lg:pr-10 gap-x-2">
                                  <img
                                    src={PLogo}
                                    alt=""
                                    className="w-4 h-auto bg-tablePLogoColor"
                                  />
                                  <div className="flex flex-row pr-4">
                                    <span className="bg-tableGreenText ">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="white"
                                        class="w-4 h-auto"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M12 8v4l3 3m5-10a9 9 0 11-6.627-2.628M5.25 5.25l1.5 1.5M18.75 5.25l-1.5 1.5"
                                        />
                                      </svg>
                                    </span>
                                    <img
                                      src={BLogo}
                                      alt=""
                                      className="w-4 h-auto bg-tableBlueText"
                                    />
                                  </div>
                                  <img
                                    src={FLogo}
                                    alt=""
                                    className="w-4 h-auto bg-tableFColor"
                                  />
                                </div>
                              </td>
                              <td className="h-auto hidden lg:table-cell border-b  px-2 py-2 ">
                                <div className="flex flex-row items-center font-bold text-sm gap-x-1">
                                  <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxBlue">
                                    {cricket.team1}
                                  </p>
                                  <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxPink">
                                    {cricket.team2}
                                  </p>
                                </div>
                              </td>
                              <td className="h-auto hidden lg:table-cell border-b  px-2 py-2 ">
                                <div className="flex flex-row items-center gap-x-1">
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxBlue"></p>
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxPink"></p>
                                </div>
                              </td>
                              <td className="h-auto hidden lg:table-cell border-b  px-2 py-2 ">
                                <div className="flex flex-row items-center font-bold text-sm gap-x-1">
                                  <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxBlue">
                                    {cricket.team3}
                                  </p>
                                  <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxPink">
                                    {cricket.team4}
                                  </p>
                                </div>
                              </td>
                              <td>
                                <span className=" w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                                  <RiPushpin2Line size={16} color="#7e97a7" />
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "Soccer" && (
                <div className="   ">
                  <div className="shadow-2xl   ">
                    <div className="px-2 lg:px-0 border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0 ">
                      <table className="">
                        <thead className="bg-sliderButtonMediumGray text-customBlack lg:table-header-group hidden   w-full">
                          <tr>
                            <th></th>
                            <th></th>
                            <th>1</th>
                            <th>x</th>
                            <th>2</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className=" ">
                          {soccerData[0].map((soccer, i) => (
                            <tr key={i} className="md:justify-items-center">
                              <td className=" lg:pr-[96px] w-full h-auto border-b py-2 ">
                                <div className="flex  flex-col-reverse  border-sliderButtonMediumGray whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
                                  <div className="flex flex-row items-center ">
                                    <span className="text-tableGreenText ">
                                      <svg
                                        className="w-3 h-3  "
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                      >
                                        <circle
                                          cx="50"
                                          cy="50"
                                          r="40"
                                          fill="green"
                                        />
                                      </svg>
                                    </span>
                                    <span className="text-tableBlueText cursor-pointer underline font-bold text-xs lg:text-md">
                                      {soccer.teams}
                                    </span>
                                  </div>
                                  <div className="flex flex-row gap-2">
                                    <span className="bg-tableLogoColor rounded-sm  ">
                                      <svg
                                        width="14"
                                        height="auto"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <circle
                                          cx="12"
                                          cy="12"
                                          r="10"
                                          stroke="white"
                                          stroke-width="2"
                                          fill=""
                                        />
                                        <polygon
                                          points="10,8 16,12 10,16"
                                          fill="white"
                                        />
                                      </svg>
                                    </span>
                                    <span className="text-tableGreenText  ">
                                      {soccer.status}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="hidden  lg:table-cell px-2  py-2 h-auto border-b  ">
                                <div className="flex  flex-row lg:pr-10 gap-x-2">
                                  <img
                                    src={PLogo}
                                    alt=""
                                    className="w-4 h-auto bg-tablePLogoColor"
                                  />
                                  <div className="flex flex-row pr-4">
                                    <span className="bg-tableGreenText ">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="white"
                                        class="w-4 h-auto"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M12 8v4l3 3m5-10a9 9 0 11-6.627-2.628M5.25 5.25l1.5 1.5M18.75 5.25l-1.5 1.5"
                                        />
                                      </svg>
                                    </span>
                                    <img
                                      src={BLogo}
                                      alt=""
                                      className="w-4 h-auto bg-tableBlueText"
                                    />
                                  </div>
                                  <img
                                    src={FLogo}
                                    alt=""
                                    className="w-4 h-auto bg-tableFColor"
                                  />
                                </div>
                              </td>
                              <td className="h-auto hidden lg:table-cell border-b  px-2 py-2 ">
                                <div className="flex flex-row items-center font-bold text-sm gap-x-1">
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxBlue">
                                    {soccer.team1}
                                  </p>
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                    {soccer.team2}
                                  </p>
                                </div>
                              </td>
                              <td className="h-auto hidden lg:table-cell border-b  px-2 py-2 ">
                                <div className="flex flex-row items-center gap-x-1">
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxBlue"></p>
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxPink"></p>
                                </div>
                              </td>
                              <td className="h-auto hidden lg:table-cell border-b  px-2 py-2 ">
                                <div className="flex flex-row items-center font-bold text-sm gap-x-1">
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxBlue">
                                    {soccer.team3}
                                  </p>
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                    {soccer.team4}
                                  </p>
                                </div>
                              </td>
                              <td>
                                <span className=" w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                                  <RiPushpin2Line size={16} color="#7e97a7" />
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "Tennis" && (
                <div className="   ">
                  <div className="shadow-2xl   ">
                    <div className="px-2 lg:px-0 border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0 ">
                      <table className="">
                        <thead className="bg-sliderButtonMediumGray text-customBlack  lg:table-header-group hidden   w-full">
                          <tr>
                            <th></th>
                            <th></th>
                            <th>1</th>
                            <th>x</th>
                            <th>2</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className=" ">
                          {tennisData[0].map((tennis, i) => (
                            <tr key={i} className="md:justify-items-center">
                              <td className=" lg:pr-[96px] w-full h-auto border-b py-2 ">
                                <div className="flex  flex-col-reverse  border-gray-400 whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
                                  <div className="flex flex-row items-center ">
                                    <span className="text-tableGreenText ">
                                      <svg
                                        className="w-3 h-3  "
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                      >
                                        <circle
                                          cx="50"
                                          cy="50"
                                          r="40"
                                          fill="green"
                                        />
                                      </svg>
                                    </span>
                                    <span className="text-tableBlueText cursor-pointer underline font-bold text-xs lg:text-md">
                                      {tennis.teams}
                                    </span>
                                  </div>
                                  <div className="flex flex-row gap-2">
                                    <span className="bg-tableLogoColor rounded-sm  ">
                                      <svg
                                        width="14"
                                        height="auto"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <circle
                                          cx="12"
                                          cy="12"
                                          r="10"
                                          stroke="white"
                                          stroke-width="2"
                                          fill=""
                                        />
                                        <polygon
                                          points="10,8 16,12 10,16"
                                          fill="white"
                                        />
                                      </svg>
                                    </span>
                                    <span className="text-tableGreenText  ">
                                      {tennis.status}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="hidden  lg:table-cell px-2  py-2 h-auto border-b  ">
                                <div className="flex  flex-row lg:pr-10 gap-x-2">
                                  <img
                                    src={PLogo}
                                    alt=""
                                    className="w-4 h-auto bg-tablePLogoColor"
                                  />
                                  <div className="flex flex-row pr-4">
                                    <span className="bg-tableGreenText ">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="white"
                                        class="w-4 h-auto"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M12 8v4l3 3m5-10a9 9 0 11-6.627-2.628M5.25 5.25l1.5 1.5M18.75 5.25l-1.5 1.5"
                                        />
                                      </svg>
                                    </span>
                                    <img
                                      src={BLogo}
                                      alt=""
                                      className="w-4 h-auto bg-tableBlueText"
                                    />
                                  </div>
                                  <img
                                    src={FLogo}
                                    alt=""
                                    className="w-4 h-auto bg-tableFColor"
                                  />
                                </div>
                              </td>
                              <td className="h-auto hidden lg:table-cell border-b  px-2 py-2 ">
                                <div className="flex flex-row items-center font-bold text-sm gap-x-1">
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxBlue">
                                    {tennis.team1}
                                  </p>
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                    {tennis.team2}
                                  </p>
                                </div>
                              </td>
                              <td className="h-auto hidden lg:table-cell border-b  px-2 py-2 ">
                                <div className="flex flex-row items-center gap-x-1">
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxBlue"></p>
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxPink"></p>
                                </div>
                              </td>
                              <td className="h-auto hidden lg:table-cell border-b  px-2 py-2 ">
                                <div className="flex flex-row items-center font-bold text-sm gap-x-1">
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxBlue">
                                    {tennis.team3}
                                  </p>
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                    {tennis.team4}
                                  </p>
                                </div>
                              </td>
                              <td>
                                <span className=" w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                                  <RiPushpin2Line size={16} color="#7e97a7" />
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="w-[50%]">
             <div className="w-full">
             <Marquee />
             </div>
             
            <p className="mt-2 text-customBlack font-medium text-center">
              There are currently no followed multi markets.
            </p>
          </div>
        )}
        <div className="relative w-1/4 whitespace-nowrap text-sm hidden lg:block">
         <div className="mb-2">

         
          <div
            className="flex items-center justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
            onClick={() => setIsBetSlipOpen(!isBetSlipOpen)}
          >
            <h2>Bet Slip</h2>
            {/* SVG Icons for + and - */}
            {isBetSlipOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="white"
                className="w-3 h-auto border border-customWhite "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="white"
                className="w-3 h-auto border border-customWhite "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            )}
          </div>

          {isBetSlipOpen && (
            <div className="w-full bg-customWhite  h-[300px]  shadow-2xl"></div>
          )}
          </div>
          <div
            className="flex items-center justify-between w-full text-customWhite  bg-inPlayTabColor cursor-pointer"
            onClick={() => setBetOpen(!BetOpen)}
          >
            <div className="flex flex-row items-center gap-2">
            <span className="bg-customBlack py-[6px]  lg:py-1 px-1 text-customWhite lg:text-sliderButtonMediumGray border-customBlack lg:border-sliderButtonMediumGray">
                          <IoReload className="w-4 h-auto stroke-2" />
                        </span>
            <h2 className="">Open Bets</h2>
            </div>
            
           
            <span className="px-2">
            {BetOpen ? (
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="white"
                className="w-3 h-auto border  border-customWhite "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="white"
                className="w-3 h-auto border  border-customWhite "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            )}
            </span>
          </div>
          {BetOpen && (
            <div className="w-full bg-customWhite  h-[300px] shadow-2xl">
              <select className="border border-inPlayTabColor my-2 w-full rounded" value={selectedValue} onChange={handleChange}>
      <option value="select">-- Select -- </option>
      <option value="cancel">-- Cancel -- </option>
    </select>
    <p className="bg-logoutBlueSoftColor font-medium px-2">Matched</p>
    <div className="flex text-xs px-2 gap-1">
        {checkboxOptions.map((checkbox) => (
          <label key={checkbox.name} className="flex items-center gap-1">
            <input
              type="checkbox"
              name={checkbox.name}
              checked={checkboxes[checkbox.name]}
              onChange={handleCheckboxChange}
            />
            {checkbox.label}
          </label>
        ))}
      </div>
            </div>
          )}
        </div>
        {/* For small screen device */}
      </div>
      {/* for small device */}
      <div className="lg:hidden ">
        <div className="bg-footer-gradient p-2 ">
          <div className=" flex text-sm w-full max-w-3xl rounded-md border border-customWhite   flex-row items-center justify-center   lg:bg-none     whitespace-nowrap   ">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`w-full lg:w-[20%] border-r ${
                  index === 0
                    ? "rounded-l-md"
                    : index === 2
                    ? "rounded-r-md"
                    : ""
                }  border-customWhite  py-1 px-2 lg:px-0 text-customWhite   lg:text-customBlack       ${
                  activeTab === tab
                    ? " bg-customWhite !text-customBlack font-bold  lg:bg-inPlayTabColor lg:text-customWhite  "
                    : "lg:bg-customWhite bg-smallDeviceTabColor"
                } `}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {/* cricket */}
        {activeTab === "Cricket" && (
          <div className="border-b shadow-2xl bg-customWhite border-textYellowColor mb-2">
            <h3 className=" bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite ">
              Cricket
            </h3>
            {cricketData[0].map((cricket, index) => (
              <div
                key={index}
                className="flex flex-row justify-between border-b items-center px-2 text-sm"
              >
                <ul className="flex flex-col py-2  ">
                  <div className="flex flex-row items-center gap-2">
                    <span className="bg-tableLogoColor  px-[2px] py-[1px] rounded-sm  ">
                      <svg
                        width="14"
                        height="auto"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="white"
                          stroke-width="2"
                          fill=""
                        />
                        <polygon points="10,8 16,12 10,16" fill="white" />
                      </svg>
                    </span>
                    <span className="text-tableGreenText  ">
                      {cricket.status}
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-tableGreenText ">
                      <svg
                        className="w-3 h-3 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                      >
                        <circle cx="50" cy="50" r="40" fill="green" />
                      </svg>
                    </span>

                    <li className="text-tableBlueText">
                      {index === 0 ? (
                        <Link to="/womenleague" className=" ">
                          {cricket.teams}
                        </Link>
                      ) : (
                        cricket.teams
                      )}
                    </li>
                  </div>
                </ul>
                <span className=" w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                  <RiPushpin2Line size={16} color="#7e97a7" />
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Soccer */}
        {activeTab === "Soccer" && (
          <div className="border-b shadow-2xl bg-customWhite  border-textYellowColor mb-2">
            <h3 className=" bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite ">
              Soccer
            </h3>
            {soccerData[0].map((soccer, index) => (
              <div
                key={index}
                className="flex flex-row justify-between border-b items-center px-2 text-sm"
              >
                <ul className="flex flex-col py-2  ">
                  <div className="flex flex-row items-center gap-2 ">
                    <span className="bg-tableLogoColor px-[2px] py-[1px] rounded-sm">
                      <svg
                        width="14"
                        height="auto"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="white"
                          stroke-width="2"
                          fill=""
                        />
                        <polygon points="10,8 16,12 10,16" fill="white" />
                      </svg>
                    </span>
                    <li className="text-tableGreenText">{soccer.status}</li>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-tableGreenText ">
                      <svg
                        className="w-3 h-3 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                      >
                        <circle cx="50" cy="50" r="40" fill="green" />
                      </svg>
                    </span>

                    <li className="text-tableBlueText">{soccer.teams}</li>
                  </div>
                </ul>
                <span className=" w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                  <RiPushpin2Line size={16} color="#7e97a7" />
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tennis */}
        {activeTab === "Tennis" && (
          <div className="border-b shadow-2xl bg-customWhite  border-textYellowColor mb-2">
            <h3 className=" bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite ">
              Tennis
            </h3>
            {tennisData[0].map((tennis, index) => (
              <div
                key={index}
                className="flex flex-row justify-between border-b items-center px-2 text-sm"
              >
                <ul className="flex flex-col py-2  ">
                  <div className="flex flex-row items-center gap-2 ">
                    <span className="bg-tableLogoColor px-[2px] py-[1px] rounded-sm">
                      <svg
                        width="14"
                        height="auto"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="white"
                          stroke-width="2"
                          fill=""
                        />
                        <polygon points="10,8 16,12 10,16" fill="white" />
                      </svg>
                    </span>
                    <li className="text-tableGreenText">{tennis.status}</li>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-tableGreenText ">
                      <svg
                        className="w-3 h-3 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                      >
                        <circle cx="50" cy="50" r="40" fill="green" />
                      </svg>
                    </span>

                    <li className="text-tableBlueText">{tennis.teams}</li>
                  </div>
                </ul>
                <span className=" w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                  <RiPushpin2Line size={16} color="#7e97a7" />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiMarkets;
