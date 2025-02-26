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
import { Link } from "react-router-dom";
import { FaBaseball } from "react-icons/fa6";
import { IoMdFootball } from "react-icons/io";
import { BiSolidCricketBall } from "react-icons/bi";
import { GiCardAceDiamonds } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaTimes, FaChevronLeft } from "react-icons/fa";
import { RiPushpin2Line } from "react-icons/ri";
import Marquee from "../Marquee/Marquee";

const Sports = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [showArrows, setShowArrows] = useState(false);
  const [activeTab, setActiveTab] = useState("Cricket");
  const [cricketActiveTab, setCricketActiveTab] = useState("by Time");
  const [soccerActiveTab, setSoccerActiveTab] = useState("by Time");
  const [tennisActiveTab, setTennisActiveTab] = useState("by Time");
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    console.log("Search Value:", e.target.value); // ✅ Console এ দেখাবে
  };

  const tabs = [
    {
      label: "Casino",
      icon: "M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm10 4l-4 4m4 0l-4-4m6 6l-2 2m-4 0l2-2", // Playing Cards icon
      bgColor: "",
      link: "/login",
    },
    {
      label: "Cricket",
      icon: "M8 21l10-10m-6-6l6 6M21 3l-3 3", // Cricket Ball icon
      bgColor: "",
      link: "",
    },
    {
      label: "Soccer",
      icon: "M12 2l3 3-3 3-3-3z M9 9l3 3 3-3z M6 12l3 3 3-3z M3 15l3 3 3-3z M12 12l3 3 3-3z M15 9l3 3 3-3z", // Football icon
      bgColor: "",
      link: "",
    },
    {
      label: "Tennis",
      icon: "", // Tennis Ball icon
      bgColor: "",
      link: "",
    },
    {
      label: "Result",
      icon: "M8 21l10-10m-6-6l6 6M21 3l-3 3", // Cricket Ball icon (same as "Cricket")
      bgColor: "",
      link: "/login",
    },
    {
      label: "Women's",
      icon: "M12 2l3 3-3 3-3-3z M9 9l3 3 3-3z M6 12l3 3 3-3z M3 15l3 3 3-3z M12 12l3 3 3-3z M15 9l3 3 3-3z", // Football icon (same as "Soccer")
      bgColor: "",
      link: "/womenleague",
    },
  ];

  const cricketDataByTime = [
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
  const cricketWomenLeage = [
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
      {
        id: 3,
        teams: " UP Warriorz W v Delhi Capitals W 20..",
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
  const cricketOneDay = [
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
    ],
  ];
  const cricketVertualPSL = [
    [
      {
        id: 1,
        teams: "Karachi kings SRL T20 vs Peshawar Zalmi SR..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 3.39,
          team2: 2.3,
          team3: 5.16,
          team4: 3.59,
        },
      },
    ],
  ];
  const cricketVertualSA = [
    [
      {
        id: 1,
        teams: "Mi Cape Town SRL T20 v Chennai Sup..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 3.39,
          team2: 2.3,
          team3: 5.16,
          team4: 3.59,
        },
      },
    ],
  ];
  const cricketAustralia = [
    [
      {
        id: 1,
        teams: "New South Wales Breakers v ACT Meteros",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 3.39,
          team2: 2.3,
          team3: 5.16,
          team4: 3.59,
        },
      },
    ],
    [
      {
        id: 2,
        teams: "Tasmania Women v Victoria Women",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 3.39,
          team2: 2.3,
          team3: 5.16,
          team4: 3.59,
        },
      },
    ],
    [
      {
        id: 3,
        teams: "Western Australia W v South Australian Scor..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 3.39,
          team2: 2.3,
          team3: 5.16,
          team4: 3.59,
        },
      },
    ],
  ];

  const soccerDataByTime = [
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
  const soccerAlgeria = [
    [
      {
        id: 1,
        teams: " USM Khenchela v JS Saoura",
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
        teams: " CS Constantine v ASO Chlef ",
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
        teams: " USM Alger v NC Magra",
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
    ],
  ];
  const soccerMexico = [
    [
      {
        id: 1,
        teams: " Atlas U23 v Club Necaxa U23",
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
    ],
  ];
  const soccerAsia = [
    [
      {
        id: 1,
        teams: " AI Rayyan v Estheglal FC",
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
        teams: " AI Wasi v AI-Hilal ",
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
    ],
  ];

  const tennisDataByTime = [
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
  const tennisWtaDubai = [
    [
      {
        id: 1,
        teams: "Sof Kenin v M Kostyuk",
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
        teams: "L Sansonova v J Pegula",
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
        teams: "Azarenka v lga Swiatek",
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
        teams: "A Potapova v D Yastremska",
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
        teams: "A Sabalenka v V Kudermetova",
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
        teams: "C Tauson v Svitolina",
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
        teams: "C Gauf v McCartn Kessler",
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
        teams: "E Raducanu v Mir Andreeva",
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
        teams: "Q Zheng v Pe Stearns",
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

  const allTabs = ["by Time", "by Competition"];

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

  const handleNext = useCallback(() => {
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
  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  // Show arrows only when image changes, hide after 2 seconds
  useEffect(() => {
    setShowArrows(true);
    const timer = setTimeout(() => setShowArrows(false), 4000);
    return () => clearTimeout(timer);
  }, [currentIndex]);
  return (
    <div className="lg:hidden">
      <Marquee/>
      <div className="relative w-full overflow-hidden">
        <div
          className="w-full flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 1s ease in out" : "none",
          }}
        >
          {banners.map((banner, index) => (
            <img
              key={index}
              src={banner}
              alt=""
              className="w-full h-24 lg:h-auto md:h-auto flex-shrink-0"
            />
          ))}
        </div>

        {showArrows && (
          <>
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-customBlack bg-opacity-50 p-2 rounded-full"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-customBlack bg-opacity-50 p-2 rounded-full"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>
      <div className="bg-textYellowColor   pt-2  relative">
        <div className="flex w-full flex-row overflow-x-auto pl-4 pr-20 rounded-md gap-x-1 items-center whitespace-nowrap">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.link || "#"}
              className={`w-full ${index === 0 ? "null" : "relative"} `}
            >
              <button
                className={`px-2 py-2 font-bold text-sm text-customBlack rounded-t-lg lg:text-customBlack 
            ${index === 0 ? "bg-[#873535] !text-customWhite" : ""}
            ${
              activeTab === tab.label
                ? "bg-smallDeviceTabColor !text-textYellowColor font-bold"
                : "lg:bg-customWhite"
            }`}
                onClick={() => setActiveTab(tab.label)}
              >
                <div className="flex flex-row gap-x-1 items-center">
                  {index === 0 && (
                    <GiCardAceDiamonds className="w-7 h-auto  " />
                  )}
                  {index === 3 && <FaBaseball className="w-6 h-7 " />}
                  {index === 2 && <IoMdFootball className="w-7 h-auto " />}
                  {index === 1 && (
                    <BiSolidCricketBall className="w-7 h-auto " />
                  )}
                  {index === 4 && (
                    <BiSolidCricketBall className="w-7 h-auto " />
                  )}
                  {index === 5 && <IoMdFootball className="w-7 h-auto " />}
                  {tab.label}
                </div>
              </button>
              <div className="absolute top-0 right-0 flex items-center ">
                {/* Live Icon with Animation */}
                <span className="bg-customWhite font-bold text-[10px] leading-[10px] px-1 text-liveRedColor animate-pulse rounded-sm">
                  Live
                </span>

                {/* Live Score (Attached) */}
                <span className="bg-loginRedColor font-bold text-[10px] leading-[10px] px-1 text-customWhite rounded-sm">
                  6
                </span>
              </div>
            </Link>
          ))}
        </div>
        <button
          className="w-14 h-14  flex items-center justify-center bg-signUpColor absolute top-1/2 right-0 transform -translate-y-1/2 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          <FaSearch className="w-6 h-6 text-customWhite" />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-customBlack bg-opacity-50 flex items-baseline justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-customWhite flex flex-row items-center p-6 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className=" font-bold " onClick={() => setIsOpen(false)}>
              <FaChevronLeft />
            </h2>
            <div className="relative w-full">
              <input
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search Events"
                className="w-full py-2 pl-4 pr-10 outline-none "
              />
              <FaTimes className="absolute top-1/2 right-8 transform -translate-y-1/2  w-5 h-5 cursor-pointer" />
              <FaSearch className="absolute top-1/2 right-1 transform -translate-y-1/2  w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
      <h3 className="   bg-footer-gradient w-full   text-center  px-2 py-1 text-sm font-bold text-customWhite">
        Highlights
      </h3>

      {activeTab === "Cricket" && (
        <div>
          <div className="flex bg-customWhite text-sm w-full py-1  max-w-3xl rounded-md border px-4 border-customWhite flex-row items-center justify-center lg:bg-none whitespace-nowrap">
            {allTabs.map((tab, index) => (
              <button
                key={index}
                className={`w-full lg:w-[20%] border-r border-customWhite rounded-md py-1 px-2 lg:px-0 text-customWhite font-bold shadow-2xl ${
                  cricketActiveTab === tab
                    ? " bg-textYellowColor !text-customWhite font-bold  lg:text-customWhite"
                    : " bg-signUpColor"
                }`}
                onClick={() => {
                  setActiveTab("Cricket");
                  setCricketActiveTab(tab);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          {cricketActiveTab === "by Time" &&
            cricketDataByTime[0].map((cricket, index) => (
              <div
                key={index}
                className="flex bg-customWhite flex-row justify-between border-b items-center px-2 text-sm"
              >
                <ul className="flex flex-col py-2">
                  <div className="flex flex-row items-center gap-2">
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
                          strokeWidth="2"
                        />
                        <polygon points="10,8 16,12 10,16" fill="white" />
                      </svg>
                    </span>
                    <li className="text-tableGreenText">{cricket.status}</li>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-tableGreenText">
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                      >
                        <circle cx="50" cy="50" r="40" fill="green" />
                      </svg>
                    </span>
                    <li className="text-tableBlueText ">
                      {index === 0 ? (
                        <Link to="/womenleague" className="underline">
                          {cricket.teams}
                        </Link>
                      ) : (
                        cricket.teams
                      )}
                    </li>
                  </div>
                </ul>
                <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                  <RiPushpin2Line size={16} color="#7e97a7" />
                </span>
              </div>
            ))}
          {cricketActiveTab === "by Competition" && (
            <>
              <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                Women's Premier League
              </h3>
              {cricketWomenLeage[0].map((cricket, index) => (
                <div
                  key={index}
                  className="flex flex-row bg-customWhite justify-between border-b items-center px-2 text-sm"
                >
                  <ul className="flex flex-col py-2">
                    <div className="flex flex-row items-center gap-2">
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
                            strokeWidth="2"
                          />
                          <polygon points="10,8 16,12 10,16" fill="white" />
                        </svg>
                      </span>
                      <li className="text-tableGreenText">{cricket.status}</li>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-tableGreenText">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                        >
                          <circle cx="50" cy="50" r="40" fill="green" />
                        </svg>
                      </span>
                      <li className="text-tableBlueText ">
                        {index === 0 ? (
                          <Link
                            to="/womenleague"
                            className="underline"
                          >
                            {cricket.teams}
                          </Link>
                        ) : (
                          cricket.teams
                        )}
                      </li>
                    </div>
                  </ul>
                  <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                    <RiPushpin2Line size={16} color="#7e97a7" />
                  </span>
                </div>
              ))}

              <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                One Day International
              </h3>
              {cricketOneDay[0].map((cricket, index) => (
                <div
                  key={index}
                  className="flex flex-row bg-customWhite justify-between border-b items-center px-2 text-sm"
                >
                  <ul className="flex flex-col py-2">
                    <div className="flex flex-row items-center gap-2">
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
                            strokeWidth="2"
                          />
                          <polygon points="10,8 16,12 10,16" fill="white" />
                        </svg>
                      </span>
                      <li className="text-tableGreenText">{cricket.status}</li>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-tableGreenText">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                        >
                          <circle cx="50" cy="50" r="40" fill="green" />
                        </svg>
                      </span>
                      <li className="text-tableBlueText">{cricket.teams}</li>
                    </div>
                  </ul>
                  <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                    <RiPushpin2Line size={16} color="#7e97a7" />
                  </span>
                </div>
              ))}

              <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                Virtual PSL 2024
              </h3>
              {cricketVertualPSL[0].map((cricket, index) => (
                <div
                  key={index}
                  className="flex flex-row bg-customWhite justify-between border-b items-center px-2 text-sm"
                >
                  <ul className="flex flex-col py-2">
                    <div className="flex flex-row items-center gap-2">
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
                            strokeWidth="2"
                          />
                          <polygon points="10,8 16,12 10,16" fill="white" />
                        </svg>
                      </span>
                      <li className="text-tableGreenText">{cricket.status}</li>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-tableGreenText">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                        >
                          <circle cx="50" cy="50" r="40" fill="green" />
                        </svg>
                      </span>
                      <li className="text-tableBlueText">{cricket.teams}</li>
                    </div>
                  </ul>
                  <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                    <RiPushpin2Line size={16} color="#7e97a7" />
                  </span>
                </div>
              ))}

              <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                Virtual SA 2024
              </h3>
              {cricketVertualSA[0].map((cricket, index) => (
                <div
                  key={index}
                  className="flex flex-row bg-customWhite justify-between border-b items-center px-2 text-sm"
                >
                  <ul className="flex flex-col py-2">
                    <div className="flex flex-row items-center gap-2">
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
                            strokeWidth="2"
                          />
                          <polygon points="10,8 16,12 10,16" fill="white" />
                        </svg>
                      </span>
                      <li className="text-tableGreenText">{cricket.status}</li>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-tableGreenText">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                        >
                          <circle cx="50" cy="50" r="40" fill="green" />
                        </svg>
                      </span>
                      <li className="text-tableBlueText">{cricket.teams}</li>
                    </div>
                  </ul>
                  <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                    <RiPushpin2Line size={16} color="#7e97a7" />
                  </span>
                </div>
              ))}

              <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                Australia NCL Women
              </h3>
              {cricketAustralia[0].map((cricket, index) => (
                <div
                  key={index}
                  className="flex flex-row bg-customWhite justify-between border-b items-center px-2 text-sm"
                >
                  <ul className="flex flex-col py-2">
                    <div className="flex flex-row items-center gap-2">
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
                            strokeWidth="2"
                          />
                          <polygon points="10,8 16,12 10,16" fill="white" />
                        </svg>
                      </span>
                      <li className="text-tableGreenText">{cricket.status}</li>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-tableGreenText">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                        >
                          <circle cx="50" cy="50" r="40" fill="green" />
                        </svg>
                      </span>
                      <li className="text-tableBlueText">{cricket.teams}</li>
                    </div>
                  </ul>
                  <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                    <RiPushpin2Line size={16} color="#7e97a7" />
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
      )}
      {activeTab === "Soccer" && (
        <div>
          <div className="flex bg-customWhite text-sm w-full py-1  max-w-3xl rounded-md border px-4 border-customWhite flex-row items-center justify-center lg:bg-none whitespace-nowrap">
            {allTabs.map((tab, index) => (
              <button
                key={index}
                className={`w-full lg:w-[20%] border-r border-customWhite rounded-md py-1 px-2 lg:px-0 text-customWhite font-bold shadow-2xl ${
                  soccerActiveTab === tab
                    ? " bg-textYellowColor !text-customWhite font-bold  lg:text-customWhite"
                    : " bg-signUpColor"
                }`}
                onClick={() => {
                  setActiveTab("Soccer");
                  setSoccerActiveTab(tab);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          {soccerActiveTab === "by Time" &&
            soccerDataByTime[0].map((soccer, index) => (
              <div
                key={index}
                className="flex bg-customWhite flex-row justify-between border-b items-center px-2 text-sm"
              >
                <ul className="flex flex-col py-2">
                  <div className="flex flex-row items-center gap-2">
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
                          strokeWidth="2"
                        />
                        <polygon points="10,8 16,12 10,16" fill="white" />
                      </svg>
                    </span>
                    <li className="text-tableGreenText">{soccer.status}</li>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-tableGreenText">
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                      >
                        <circle cx="50" cy="50" r="40" fill="green" />
                      </svg>
                    </span>
                    <li className="text-tableBlueText">{soccer.teams}</li>
                  </div>
                </ul>
                <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                  <RiPushpin2Line size={16} color="#7e97a7" />
                </span>
              </div>
            ))}

          {soccerActiveTab === "by Competition" && (
            <>
              <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                Algeria Ligue 1
              </h3>
              {soccerAlgeria[0].map((soccer, index) => (
                <div
                  key={index}
                  className="flex bg-customWhite flex-row justify-between border-b items-center px-2 text-sm"
                >
                  <ul className="flex flex-col py-2">
                    <div className="flex flex-row items-center gap-2">
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
                            strokeWidth="2"
                          />
                          <polygon points="10,8 16,12 10,16" fill="white" />
                        </svg>
                      </span>
                      <li className="text-tableGreenText">{soccer.status}</li>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-tableGreenText">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                        >
                          <circle cx="50" cy="50" r="40" fill="green" />
                        </svg>
                      </span>
                      <li className="text-tableBlueText">{soccer.teams}</li>
                    </div>
                  </ul>
                  <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                    <RiPushpin2Line size={16} color="#7e97a7" />
                  </span>
                </div>
              ))}

              <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                Maxico Liga MXU23
              </h3>
              {soccerMexico[0].map((soccer, index) => (
                <div
                  key={index}
                  className="flex bg-customWhite flex-row justify-between border-b items-center px-2 text-sm"
                >
                  <ul className="flex flex-col py-2">
                    <div className="flex flex-row items-center gap-2">
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
                            strokeWidth="2"
                          />
                          <polygon points="10,8 16,12 10,16" fill="white" />
                        </svg>
                      </span>
                      <li className="text-tableGreenText">{soccer.status}</li>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-tableGreenText">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                        >
                          <circle cx="50" cy="50" r="40" fill="green" />
                        </svg>
                      </span>
                      <li className="text-tableBlueText">{soccer.teams}</li>
                    </div>
                  </ul>
                  <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                    <RiPushpin2Line size={16} color="#7e97a7" />
                  </span>
                </div>
              ))}

              <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                ASIA AFC Champion League
              </h3>
              {soccerAsia[0].map((soccer, index) => (
                <div
                  key={index}
                  className="flex  bg-customWhite flex-row justify-between border-b items-center px-2 text-sm"
                >
                  <ul className="flex flex-col py-2">
                    <div className="flex flex-row items-center gap-2">
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
                            strokeWidth="2"
                          />
                          <polygon points="10,8 16,12 10,16" fill="white" />
                        </svg>
                      </span>
                      <li className="text-tableGreenText">{soccer.status}</li>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-tableGreenText">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                        >
                          <circle cx="50" cy="50" r="40" fill="green" />
                        </svg>
                      </span>
                      <li className="text-tableBlueText">{soccer.teams}</li>
                    </div>
                  </ul>
                  <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                    <RiPushpin2Line size={16} color="#7e97a7" />
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
      )}
      {activeTab === "Tennis" && (
        <div>
          <div className="flex  bg-customWhite text-sm w-full py-1  max-w-3xl rounded-md border px-4 border-customWhite flex-row items-center justify-center lg:bg-none whitespace-nowrap">
            {allTabs.map((tab, index) => (
              <button
                key={index}
                className={`w-full lg:w-[20%] border-r border-customWhite rounded-md py-1 px-2 lg:px-0 text-customWhite font-bold shadow-2xl ${
                  tennisActiveTab === tab
                    ? " bg-textYellowColor !text-customWhite font-bold  lg:text-customWhite"
                    : " bg-signUpColor"
                }`}
                onClick={() => {
                  setActiveTab("Tennis");
                  setTennisActiveTab(tab);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          {tennisActiveTab === "by Time" &&
            tennisDataByTime[0].map((tennis, index) => (
              <div
                key={index}
                className="flex  bg-customWhite flex-row justify-between border-b items-center px-2 text-sm"
              >
                <ul className="flex flex-col py-2">
                  <div className="flex flex-row items-center gap-2">
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
                          strokeWidth="2"
                        />
                        <polygon points="10,8 16,12 10,16" fill="white" />
                      </svg>
                    </span>
                    <li className="text-tableGreenText">{tennis.status}</li>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-tableGreenText">
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                      >
                        <circle cx="50" cy="50" r="40" fill="green" />
                      </svg>
                    </span>
                    <li className="text-tableBlueText">{tennis.teams}</li>
                  </div>
                </ul>
                <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                  <RiPushpin2Line size={16} color="#7e97a7" />
                </span>
              </div>
            ))}

          {tennisActiveTab === "by Competition" && (
            <>
              <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                WTA - SINGLES DUBAI(UNITED ARAB EMIRATES)
              </h3>
              {tennisWtaDubai[0].map((soccer, index) => (
                <div
                  key={index}
                  className="flex  bg-customWhite flex-row justify-between border-b items-center px-2 text-sm"
                >
                  <ul className="flex flex-col py-2">
                    <div className="flex flex-row items-center gap-2">
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
                            strokeWidth="2"
                          />
                          <polygon points="10,8 16,12 10,16" fill="white" />
                        </svg>
                      </span>
                      <li className="text-tableGreenText">{soccer.status}</li>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-tableGreenText">
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                        >
                          <circle cx="50" cy="50" r="40" fill="green" />
                        </svg>
                      </span>
                      <li className="text-tableBlueText">{soccer.teams}</li>
                    </div>
                  </ul>
                  <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                    <RiPushpin2Line size={16} color="#7e97a7" />
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Sports;
