import React from "react";

import { useEffect, useRef, useState } from "react";
import PLogo from "../../assets/download.svg";
import BLogo from "../../assets/download (2).svg";
import FLogo from "../../assets/download (3).svg";
import { RiPushpin2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Marquee from "../Marquee/Marquee";

const InPlay = () => {
  const [activeTab, setActiveTab] = useState("In-Play");
  const [isOpen, setIsOpen] = useState(false);
  const [isTomorrowModalOpen,setIsTomorrowModalOpen]=useState(false);
  const [isBetSlipOpen, setIsBetSlipOpen] = useState(true);
  const [isCricketOpen, setIsCricketOpen] = useState(true);
  const [isSoccerOpen, setIsSoccerOpen] = useState(true);
  const [isTennisOpen, setIsTennisOpen] = useState(true);
  const [isBasketballOpen, setIsBasketballOpen] = useState(true);
  const [isGreyhoundRacingOpen, setIsGreyhoundRacingOpen] = useState(true);
  const [isHorseRacingOpen, setIsHorseRacingOpen] = useState(true);
  const dropdownRef = useRef(null);
  const tomorrowDropdownRef =useRef(null);
  const buttonRef = useRef(null);
  const tomorrowButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
  
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  
  useEffect(() => {
    const handleTomorrowClickOutside = (event) => {
      if (
        tomorrowDropdownRef.current &&
        !tomorrowDropdownRef.current.contains(event.target) &&
        tomorrowButtonRef.current &&
        !tomorrowButtonRef.current.contains(event.target)
      ) {
        setIsTomorrowModalOpen(false);
      }
    };
  
    if (isTomorrowModalOpen) {
      document.addEventListener("mousedown", handleTomorrowClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleTomorrowClickOutside);
    };
  }, [isTomorrowModalOpen]);
  

  const tabs = ["In-Play", "Today", "Tomorrow", "Result"];
  // InPlay
  const cricketData = [
    [
      {
        id: 1,
        teams: "Virtual Cricket",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
      {
        id: 2,
        teams: "Mid West Rhinos v Mashonaland Eagles",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
      {
        id: 3,
        teams: "Sri Lanka v Australia",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        odds: {
          team1: 1.82,
          team2: 1.83,
        },
      },
      {
        id: 4,
        teams: "Oman v USA",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],

        team1: 1.5,
        team2: 1.52,
        team3: 5.32,
        team4: 6.83,
      },
      {
        id: 5,
        teams: "India v England",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],

        team1: 1.26,
        team2: 1.27,
      },
      {
        id: 6,
        teams: "Lahore Qalandars SRL T20 v Peshawar Zalmi..",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 1.26,
        team2: 1.27,
        team3: 200,
        team4: 3.23,
      },
      {
        id: 7,
        teams: "Mater Dei v Edex Knights",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
      {
        id: 8,
        teams: " Rajasthan Kings v Big Boys",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
    ],
  ];
  const soccerData = [
    [
      {
        id: 1,
        teams: "Virtual Football Bungesliga",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
      {
        id: 2,
        teams: "Virtual Football English League",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
      {
        id: 3,
        teams: "Virtual Football League Mode",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
      {
        id: 4,
        teams: "Virtual Football World Cup",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
      {
        id: 5,
        teams: "Virtual Football Euro Cup",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
      {
        id: 6,
        teams: "Virtual Football Asian Cup",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
      {
        id: 7,
        teams: "Virtual Football Nationals Cup",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
      {
        id: 8,
        teams: "Virtual Football Champions Cup",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
      {
        id: 9,
        teams: " Al Wehdat v Al Shabab Al Ahli (0) - (2)",
        status: "In-Play",
        minute: "127'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 1.27,
        team2: 1.28,
        team3: 5.2,
        team4: 5.3,
        team5: 32,
        team6: 36,
      },
      {
        id: 11,
        teams: "El Gounah v Ismaily (1) - (0)",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
      {
        id: 12,
        teams: " ZED FC v Ceramica ... (1) - (0)",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
      {
        id: 13,
        teams: "   Erokspor A.S v 76 Igdir Belediyespor (1) - (1)  ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },

      {
        id: 14,
        teams: "  Mumbai City FC v FC Goa ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
      {
        id: 15,
        teams: "   Puskas Akademia FC U19 v Aston .. (0) - (0)   ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
      {
        id: 16,
        teams: "  Olympiacos U19 v Girona FC U19 (0) - (0)  ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
      {
        id: 17,
        teams: "  Real Madrid U19 v Dortmund U19 (0) - (0)   ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
      {
        id: 18,
        teams: "   Trabzonspor U19 v Juventus U19 (0) - (0)    ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
      {
        id: 19,
        teams: "   JS Saoura v MC Oran    ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
    ],
  ];

  const TennisData = [
    [
      {
        id: 12,
        teams: "  Virtual Tennis ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
      {
        id: 13,
        teams: "    M Kostyuk v Mag Linette (1)3 - 1(0)  ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },

      {
        id: 14,
        teams: "   L Noskova v Iga Swiatek (1)2 - 3(0)  ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
      {
        id: 15,
        teams: "    Alexandrova v Mertens (1)3 - 0(0)   ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
      {
        id: 16,
        teams: "   Dzumhur v Martinez (1)6 - 6(1)  ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
      {
        id: 17,
        teams: "   Barranco Cosano v Emil Ruusuvuori (0)3 - 2(0)    ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
      {
        id: 18,
        teams: "  O Jabeur v Sof Kenin    ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
      {
        id: 19,
        teams: "    Altmaier v Ot Virtanen (1)2 - 3(0)   ",
        status: "In-Play",
        minute: "97'",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
        team1: 4,
        team2: 4.1,
        team3: 2.58,
        team4: 2.6,
        team5: 2.68,
        team6: 2.74,
      },
    ],
  ];
  const basketBallData = [
    [
      {
        id: 1,
        teams: "Virtual Basketball",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
    ],
  ];
  const greyRoundRacingData = [
    [
      {
        id: 1,
        teams: "Virtual Dogs",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
    ],
  ];
  const horseRacing = [
    [
      {
        id: 1,
        teams: "Virtual Horses",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
    ],
  ];

  // Today
  const todayData = [
    [
      {
        time: "5:00:00 PM",
        sport: "Soccer",
        match: "Iran U20 v Indonesia U20",
      },
      {
        time: "5:00:00 PM",
        sport: "Soccer",
        match: "Jordan U20 v Saudi Arabia U20",
      },
      {
        time: "5:00:00 PM",
        sport: "Tennis",
        match: "Diez v Ni Alvarez Varona",
      },
      {
        time: "5:30:00 PM",
        sport: "Cricket",
        match: "Joburg Super Kings SRL T20 v Paarl ...",
      },
      {
        time: "5:30:00 PM",
        sport: "Soccer",
        match: "Tatran Lip Mikulas v Podbeskidzie B-B",
      },
      {
        time: "5:30:00 PM",
        sport: "Soccer",
        match: "Port FC v Jeonbuk Motors FC",
      },
      { time: "6:00:00 PM", sport: "Tennis", match: "Fucsovics v Durasovic" },
      { time: "6:00:00 PM", sport: "Tennis", match: "Borges v Ziz Bergs" },
      { time: "6:00:00 PM", sport: "Tennis", match: "Alexandrova v J Pegula" },
      { time: "6:10:00 PM", sport: "Tennis", match: "Koepfer v Ch Rodesch" },
      { time: "6:30:00 PM", sport: "Soccer", match: "AS Gabes v US Tataouine" },
      {
        time: "6:30:00 PM",
        sport: "Soccer",
        match: "JS Omrane v Olympique De Beja",
      },
      {
        time: "6:30:00 PM",
        sport: "Soccer",
        match: "Etoile Sportive Sahel v AS Solimane",
      },
      { time: "7:10:00 PM", sport: "Tennis", match: "Atmane v Bra Holt" },
      { time: "7:10:00 PM", sport: "Tennis", match: "Galarneau v Vavassori" },
      { time: "7:10:00 PM", sport: "Tennis", match: "Zh Zhang v Hurkacz" },
      {
        time: "7:30:00 PM",
        sport: "Cricket",
        match: "Peshawar Zalmi SRL T20 v Multan...",
      },
      {
        time: "7:30:00 PM",
        sport: "Soccer",
        match: "Sanliurfaspor v Sakaryaspor",
      },
      {
        time: "7:30:00 PM",
        sport: "Soccer",
        match: "Jamshedpur FC v Northeast United",
      },
      { time: "7:30:00 PM", sport: "Soccer", match: "Future FC v El Geish" },
      {
        time: "7:30:00 PM",
        sport: "Tennis",
        match: "E Rybakina v Iga Swiatek",
      },
      {
        time: "7:30:00 PM",
        sport: "Soccer",
        match: "Muangthong Utd v Lion City Sailors FC",
      },
      { time: "7:40:00 PM", sport: "Soccer", match: "Al-Akhdoud v Dhamk" },
      {
        time: "8:30:00 PM",
        sport: "Soccer",
        match: "ES Mostaganem v CS Constantine",
      },
      {
        time: "8:30:00 PM",
        sport: "Soccer",
        match: "Al Yarmouk v Al Nasar (KUW)",
      },
      {
        time: "8:55:00 PM",
        sport: "Soccer",
        match: "Al-Shabab (KSA) v Al-Quadisiya (KSA)",
      },
      { time: "9:00:00 PM", sport: "Tennis", match: "O Jabeur v Ostapenko" },
      {
        time: "9:30:00 PM",
        sport: "Cricket",
        match: "MI Cape Town SRL T20 v Durban...",
      },
      { time: "10:00:00 PM", sport: "Tennis", match: "Navone v Hol Rune" },
      { time: "10:00:00 PM", sport: "Tennis", match: "Jo Fonseca v Coria" },
      {
        time: "10:30:00 PM",
        sport: "Tennis",
        match: "M Kostyuk v A Anisimova",
      },
      { time: "10:30:00 PM", sport: "Tennis", match: "Medvedev v Herbert" },
      {
        time: "10:30:00 PM",
        sport: "Soccer",
        match: "Umraniyespor v Istanbulspor",
      },
      {
        time: "10:30:00 PM",
        sport: "Soccer",
        match: "Ankaragucu v Fatih ..",
      },
      {
        time: "10:30:00 PM",
        sport: "Soccer",
        match: "ENPPI v Al Ittihad (EGY)",
      },
      {
        time: "10:30:00 PM",
        sport: "Soccer",
        match: "Stellenbosch FC v Polokwane..",
      },
      { time: "11:00:00 PM", sport: "Soccer", match: "Al Ahli v Al Nassr" },
      {
        time: "11:10:00 PM",
        sport: "Tennis",
        match: "Martinez v D Schwartzman",
      },
      {
        time: "11:15:00 PM",
        sport: "Soccer",
        match: "Midtjylland v Real Sociedad",
      },
      {
        time: "11:15:00 PM",
        sport: "Soccer",
        match: "Vikingur Reykjavik v Panathinaikos",
      },
      { time: "11:15:00 PM", sport: "Soccer", match: "Ferencvaros v Plzen" },
      {
        time: "11:15:00 PM",
        sport: "Soccer",
        match: "Union St Gilloise v Ajax",
      },
      { time: "11:15:00 PM", sport: "Soccer", match: "NK Celje v APOEL" },
      {
        time: "11:15:00 PM",
        sport: "Soccer",
        match: "FK Backa Topola v Jagiellonia..",
      },
      {
        time: "11:15:00 PM",
        sport: "Soccer",
        match: "Molde v Shamrock Rovers",
      },
      {
        time: "11:15:00 PM",
        sport: "Soccer",
        match: "Fenerbahce v Anderlecht",
      },
      {
        time: "11:30:00 PM",
        sport: "Cricket",
        match: "Chennai Super Kings SRL T20 v Delhi...",
      },
      {
        time: "11:30:00 PM",
        sport: "Soccer",
        match: "Levante UD (W) v Granada (W)",
      },
      { time: "11:30:00 PM", sport: "Tennis", match: "Opelka v Nakashima" },
      { time: "11:40:00 PM", sport: "Tennis", match: "Struff v Grenier" },
    ],
  ];

  const tomorrowData = [
    [
      { time: "12:30:00 AM", sport: "Soccer", match: "MC Alger v Kabylie" },
      {
        time: "1:00:00 AM",
        sport: "Tennis",
        match: "Mac McDonald v Davidovich Fokina",
      },
      { time: "1:30:00 AM", sport: "Tennis", match: "Car Branstine v Kawa" },
      { time: "1:30:00 AM", sport: "Soccer", match: "FC Twente v Bodo Glimt" },
      {
        time: "1:30:00 AM",
        sport: "Soccer",
        match: "Borac Banja Luka v Olimpija",
      },
      {
        time: "1:30:00 AM",
        sport: "Soccer",
        match: "Az Alkmaar v Galatasaray",
      },
      { time: "1:30:00 AM", sport: "Soccer", match: "PAOK v FCSB" },
      { time: "1:30:00 AM", sport: "Soccer", match: "Port Vale v Notts Co" },
      {
        time: "1:30:00 AM",
        sport: "Soccer",
        match: "Real Madrid FC (W) v Real Sociedad (W)",
      },
      { time: "1:30:00 AM", sport: "Soccer", match: "Omonia v Paphos FC" },
      {
        time: "1:30:00 AM",
        sport: "Soccer",
        match: "Molynes United FC v Mount Pleasant FC",
      },
      { time: "1:30:00 AM", sport: "Soccer", match: "Porto v Roma" },
      {
        time: "1:30:00 AM",
        sport: "Soccer",
        match: "Paraguay U20 v Uruguay U20",
      },
      { time: "1:30:00 AM", sport: "Soccer", match: "Gent v Betis" },
      {
        time: "1:30:00 AM",
        sport: "Soccer",
        match: "FC Copenhagen v FC Heidenheim",
      },
      {
        time: "2:15:00 AM",
        sport: "Soccer",
        match: "Lanus v Gimnasia La Plata",
      },
      { time: "3:00:00 AM", sport: "Tennis", match: "Navone v Hol Rune" },
      {
        time: "3:00:00 AM",
        sport: "Cricket",
        match: "Auckland Aces v Northern Brave",
      },
      {
        time: "3:00:00 AM",
        sport: "Cricket",
        match: "Central Stags v Canterbury Kings",
      },
      {
        time: "3:00:00 AM",
        sport: "Cricket",
        match: "Wellington Firebirds v Otago Volts",
      },
      {
        time: "3:00:00 AM",
        sport: "Tennis",
        match: "Iryn Shymanovich v F Jones",
      },
      { time: "3:00:00 AM", sport: "Soccer", match: "La Equidad v Envigado" },
      {
        time: "3:00:00 AM",
        sport: "Soccer",
        match: "Cavalier v Montego Bay United",
      },

      { time: "12:30:00 AM", sport: "Soccer", match: "MC Alger v Kabylie" },
      {
        time: "1:00:00 AM",
        sport: "Tennis",
        match: "Mac McDonald v Davidovich Fokina",
      },
      { time: "1:30:00 AM", sport: "Tennis", match: "Car Branstine v Kawa" },
      { time: "1:30:00 AM", sport: "Soccer", match: "FC Twente v Bodo Glimt" },
      {
        time: "1:30:00 AM",
        sport: "Soccer",
        match: "Borac Banja Luka v Olimpija",
      },
      {
        time: "1:30:00 AM",
        sport: "Soccer",
        match: "Az Alkmaar v Galatasaray",
      },
      { time: "1:30:00 AM", sport: "Soccer", match: "PAOK v FCSB" },
      { time: "1:30:00 AM", sport: "Soccer", match: "Port Vale v Notts Co" },
      {
        time: "1:30:00 AM",
        sport: "Soccer",
        match: "Real Madrid FC (W) v Real Sociedad (W)",
      },
      { time: "1:30:00 AM", sport: "Soccer", match: "Omonia v Paphos FC" },
      {
        time: "1:30:00 AM",
        sport: "Soccer",
        match: "Molynes United FC v Mount Pleasant FC",
      },
      { time: "1:30:00 AM", sport: "Soccer", match: "Porto v Roma" },
      {
        time: "1:30:00 AM",
        sport: "Soccer",
        match: "Paraguay U20 v Uruguay U20",
      },
      { time: "1:30:00 AM", sport: "Soccer", match: "Gent v Betis" },
      {
        time: "1:30:00 AM",
        sport: "Soccer",
        match: "FC Copenhagen v FC Heidenheim",
      },
      {
        time: "2:15:00 AM",
        sport: "Soccer",
        match: "Lanus v Gimnasia La Plata",
      },
      { time: "3:00:00 AM", sport: "Tennis", match: "Navone v Hol Rune" },
      {
        time: "3:00:00 AM",
        sport: "Cricket",
        match: "Auckland Aces v Northern Brave",
      },
      {
        time: "3:00:00 AM",
        sport: "Cricket",
        match: "Central Stags v Canterbury Kings",
      },
      {
        time: "3:00:00 AM",
        sport: "Cricket",
        match: "Wellington Firebirds v Otago Volts",
      },
      {
        time: "3:00:00 AM",
        sport: "Tennis",
        match: "Iryn Shymanovich v F Jones",
      },
      { time: "3:00:00 AM", sport: "Soccer", match: "La Equidad v Envigado" },
      {
        time: "3:00:00 AM",
        sport: "Soccer",
        match: "Cavalier v Montego Bay United",
      },
    ],
  ];

  return (
    <div className="lg:p-4 bg-inPlayBgColor lg:flex flex-row justify-between gap-2 mx-auto lg:max-w-[1420px]  ">
      <div className="lg:w-3/4 w-full max-w-3xl  ">
      <Marquee />
       <div className="bg-footer-gradient lg:bg-none p-2  lg:px-0">
       <div className="flex w-auto flex-row  border border-customWhite rounded-md lg:border-none lg:rounded-none  items-center justify-center   lg:bg-none   lg:p-0 lg:justify-start whitespace-nowrap   ">
          {tabs.map((tab, index) =>
           (
            index === tabs.length-1 ?
             (
              <Link
              key={tab}
              to="/login"
              className="w-full lg:w-[20%] py-1 px-2 lg:px-0 text-customWhite border-r rounded-r-md border-customWhite lg:border lg:border-customBlack lg:text-customBlack lg:rounded-sm lg:bg-customWhite bg-smallDeviceTabColor lg:hidden text-center"
            >
              {tab}
            </Link>
          )
           : 
           (
            <button
            key={tab}
            className={`w-full lg:w-[20%] py-1 px-2 lg:px-0  text-customWhite border-r   border-customWhite ${index===0 ? 'rounded-l-md':''}   lg:border lg:border-customBlack lg:text-customBlack      lg:rounded-sm  ${
              activeTab === tab
                ? " bg-customWhite lg:bg-inPlayTabColor !text-customBlack font-bold  lg:!text-customWhite   "
                : "lg:bg-customWhite bg-smallDeviceTabColor"
            } `}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
          )
           
           
          ))}
        </div>
       </div>

        <div className="lg:h-[900px] overflow-y-auto   ">
          <div className="  lg:pt-4 ">
            {activeTab === "In-Play" && (
              <div className="">
                {/* Cricket */}
                <div className="   ">
                  <div
                    className="lg:flex hidden overflow-hidden items-center justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
                    onClick={() => setIsCricketOpen(!isCricketOpen)}
                  >
                    <h2 className="w-full  ">Cricket</h2>
                    {/* SVG Icons for + and - */}
                    {isCricketOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
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
                        className="w-3 h-auto border border-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className=" lg:hidden  bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite">
                    Cricket
                  </h3>
                  {isCricketOpen && (
                    <div className="shadow-2xl bg-customWhite border-b-2 border-textYellowColor overflow-y-auto   ">
                      <div className="px-2 lg:px-0  lg:border-none mb-4 lg:mb-0 ">
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
                                      <span className="text-tableBlueText font-bold text-xs lg:text-md">
                                        {cricket.teams}
                                      </span>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                      <span className="bg-tableLogoColor px-[2px] py-[1px] rounded-sm ">
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
                  )}
                </div>

                {/* Soccer */}
                <div className="mt-2">
                  <div
                    className="lg:flex overflow-hidden hidden items-center justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
                    onClick={() => setIsSoccerOpen(!isSoccerOpen)}
                  >
                    <h2>Soccer</h2>
                    {/* SVG Icons for + and - */}
                    {isSoccerOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
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
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className=" lg:hidden bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite">
                      Soccer
                    </h3>
                  {isSoccerOpen && (
                    <div className="shadow-2xl bg-customWhite border-b-2 border-textYellowColor overflow-x-auto">
                      <div className="px-2 lg:px-0  lg:border-none mb-4 lg:mb-0">
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
                                <td className="lg:pr-16 w-full  h-auto border-b py-2 ">
                                  <div className="flex  flex-col-reverse  border-sliderButtonMediumGray whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
                                    <div className="flex flex-row items-center ">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <span className="text-tableBlueText font-bold text-xs lg:text-md">
                                        {soccer.teams}
                                      </span>
                                    </div>
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
                                    <span className="text-tableGreenText hidden lg:table-cell px-4 lg:px-0 ">
                                      {soccer.minute}
                                    </span>
                                  </div>
                                </td>
                                <td className="hidden lg:table-cell px-2  py-2 h-auto border-b  ">
                                  <div className="flex flex-row pr-10  gap-x-2">
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
                                      {soccer.team1}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxPink">
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
                                    <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxBlue">
                                      {soccer.team3}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxPink">
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
                  )}
                </div>

                {/* Tennis */}
                <div className="mt-2">
                  <div
                    className="lg:flex overflow-hidden hidden items-center justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
                    onClick={() => setIsTennisOpen(!isTennisOpen)}
                  >
                    <h2>Tennis</h2>
                    {/* SVG Icons for + and - */}
                    {isTennisOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
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
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className=" lg:hidden bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite">
                      Tennis
                    </h3>
                  {isTennisOpen && (
                    <div className="shadow-2xl bg-customWhite overflow-x-auto border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                      <div className="px-2 lg:px-0">
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
                            {TennisData[0].map((tennis, i) => (
                              <tr key={i} className="md:justify-items-center">
                                <td className="lg:pr-14 w-full  h-auto border-b py-2 ">
                                  <div className="flex  flex-col-reverse  border-customWhite whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
                                    <div className="flex flex-row items-center ">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <span className="text-tableBlueText font-bold text-xs lg:text-md">
                                        {tennis.teams}
                                      </span>
                                    </div>
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
                                    <span className="text-tableGreenText hidden lg:table-cell px-4 lg:px-0 ">
                                      {tennis.minute}
                                    </span>
                                  </div>
                                </td>
                                <td className="hidden lg:table-cell px-2  py-2 h-auto border-b  ">
                                  <div className="flex flex-row pr-10  gap-x-2">
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
                                      {tennis.team3}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxPink">
                                      {tennis.team4}
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
                                      {tennis.team3}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxPink">
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
                  )}
                </div>
                {/* basketball */}
                <div className="mt-2">
                  <div
                    className="lg:flex overflow-hidden hidden items-center justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
                    onClick={() => setIsBasketballOpen(!isBasketballOpen)}
                  >
                    <h2>BasketBall</h2>
                    {/* SVG Icons for + and - */}
                    {isBasketballOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
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
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className=" lg:hidden bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite">
                      Basketball
                    </h3>
                  {isBasketballOpen && (
                    <div className="shadow-2xl bg-customWhite overflow-x-auto border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                      <div className="px-2 lg:px-0">
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
                            {basketBallData[0].map((basket, i) => (
                              <tr key={i} className="md:justify-items-center">
                                <td className="lg:pr-64  w-full h-auto border-b py-2 ">
                                  <div className="flex  flex-col-reverse  border-customWhite whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
                                    <div className="flex flex-row items-center ">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <span className="text-tableBlueText font-bold text-xs lg:text-md">
                                        {basket.teams}
                                      </span>
                                    </div>
                                    <div className="flex flex- items-center gap-2">
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
                                          <polygon
                                            points="10,8 16,12 10,16"
                                            fill="white"
                                          />
                                        </svg>
                                      </span>
                                      <span className="text-tableGreenText  ">
                                        {basket.status}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="hidden lg:table-cell px-2  py-2 h-auto border-b  ">
                                  <div className="flex flex-row pr-10  gap-x-2">
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
                                      {basket.team1}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                      {basket.team2}
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
                                      {basket.team3}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                      {basket.team4}
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
                  )}
                </div>

                {/* GrayhoundRacing */}
                <div className="lg:mt-2">
                  <div
                    className="lg:flex overflow-hidden hidden items-center justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
                    onClick={() =>
                      setIsGreyhoundRacingOpen(!isGreyhoundRacingOpen)
                    }
                  >
                    <h2>Greyhound Racing</h2>
                    {/* SVG Icons for + and - */}
                    {isGreyhoundRacingOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
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
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className=" lg:hidden bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite">
                      GreyhoundRacing
                    </h3>
                  {isGreyhoundRacingOpen && (
                    <div className="shadow-2xl bg-customWhite overflow-x-auto border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                      <div className="px-2 lg:px-0">
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
                            {greyRoundRacingData[0].map((horse, i) => (
                              <tr key={i} className="md:justify-items-center">
                                <td className="lg:pr-[287px] w-full h-auto border-b py-2 ">
                                  <div className="flex  flex-col-reverse  border-customWhite whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
                                    <div className="flex flex-row items-center ">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <span className="text-tableBlueText font-bold text-xs lg:text-md">
                                        {horse.teams}
                                      </span>
                                    </div>
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
                                        {horse.status}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="hidden lg:table-cell px-2  py-2 h-auto border-b  ">
                                  <div className="flex flex-row pr-10  gap-x-2">
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
                                      {horse.team1}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                      {horse.team2}
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
                                      {horse.team3}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                      {horse.team4}
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
                  )}
                </div>
                {/* horseRacing */}
                <div className="lg:mt-2">
                  <div
                    className="lg:flex hidden overflow-hidden items-center justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
                    onClick={() => setIsHorseRacingOpen(!isHorseRacingOpen)}
                  >
                    <h2 className="w-full " >Horse Racing</h2>
                    {/* SVG Icons for + and - */}
                    {isHorseRacingOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
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
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className=" lg:hidden bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite">
                      Horse Racing
                    </h3>
                  {isHorseRacingOpen && (
                    <div className="shadow-2xl bg-customWhite overflow-x-auto border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                      <div className="px-2 lg:px-0">
                     
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
                            {horseRacing[0].map((horses, i) => (
                              <tr key={i} className="md:justify-items-center">
                                <td className="lg:pr-[280px] w-full  h-auto border-b py-2 ">
                                  <div className="flex  flex-col-reverse  border-customWhite whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
                                    <div className="flex flex-row items-center ">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <span className="text-tableBlueText font-bold text-xs lg:text-md">
                                        {horses.teams}
                                      </span>
                                    </div>
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
                                        {horses.status}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="hidden lg:table-cell px-2  py-2 h-auto border-b  ">
                                  <div className="flex flex-row pr-10 gap-x-2">
                                    <img
                                      src={PLogo}
                                      alt=""
                                      className="w-4 h-auto bg-tablePLogoColor"
                                    />
                                    <div className="flex pr-4 flex-row">
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
                                      {horses.team1}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                      {horses.team2}
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
                                      {horses.team3}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                      {horses.team4}
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
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="">
            {activeTab === "Today" && (
              <div className="">
                <div className="lg:flex hidden bg-sliderButtonMediumGray flex-row text-sm border-b border-customBlack py-5 px-3 justify-between ">
                  <div className="lg:flex  flex-row  items-center gap-6">
                    <h3 className="font-bold">Sports-Filter:</h3>
                    <div className="flex flex-row items-center gap-1">
                      <p>Cricket</p>
                      <div className="flex flex-row items-center">
                        <span className="text-customWhite ">
                          <svg
                            className="w-3 h-3 "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                          >
                            <circle cx="50" cy="50" r="40" fill="gray" />
                          </svg>
                        </span>
                        <p>Soccer</p>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="text-customWhite ">
                          <svg
                            className="w-3 h-3 "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                          >
                            <circle cx="50" cy="50" r="40" fill="gray" />
                          </svg>
                        </span>
                        <p>Tennis</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative ">
                    <button
                      ref={buttonRef}
                      className="px-8 py-1 bg-customWhite rounded-md shadow-2xl"
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      {isOpen ? "Close" : "Filter"}
                    </button>
                    {isOpen && (
                      <div
                        ref={dropdownRef}
                        className="absolute top-7  right-5 flex items-center justify-center  bg-opacity-50"
                      >
                        <div className="bg-customWhite p-6 rounded-lg shadow-lg w-80">
                          <ul className=" grid grid-cols-2  border-b border-customBlack">
                            <div className="flex flex-row gap-2">
                              <input type="checkbox" name="" id="" />
                              <li>All </li>
                            </div>
                            <div className="flex flex-row gap-2">
                              <input type="checkbox" name="" id="" />
                              <li>Soccer </li>
                            </div>
                            <div className="flex flex-row gap-2">
                              <input type="checkbox" name="" id="" />
                              <li>Tennis </li>
                            </div>
                            <div className="flex flex-row gap-2">
                              <input type="checkbox" name="" id="" />
                              <li>Cricket </li>
                            </div>
                          </ul>
                          <div className="grid grid-cols-2 pt-3 justify-items-start">
                            <button className="px-8 py-1 rounded-sm bg-customBlack text-textYellowColor">
                              Save
                            </button>
                            <button className="px-8 py-1 rounded-sm bg-customWhite shadow-2xl">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full lg:mt-4 bg-customWhite shadow-2xl">
                  <div className="lg:pt-4   overflow-y-auto hidden lg:table-cell">
                    <table>
                      <thead></thead>
                      <tbody>
                        {todayData[0].map((today, index) => (
                          <tr key={index} className="text-sm">
                            <td className="pr-16 font-bold border-b">
                              {today.time}
                            </td>
                            <td className="pr-4 border-b font-light">
                              {today.sport}
                            </td>
                            <td className="pr-4 border-b">--</td>
                            <td className="border-b  text-tableBlueText font-bold">
                              {today.match}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="lg:hidden border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0 ">
                    <h3 className="  bg-inPlayTabColor w-full  text-center lg:text-left px-2 py-1 text-sm font-bold text-customWhite">
                      Cricket
                    </h3>
                    <div className="px-2">
                      <table className="">
                        <thead></thead>
                        <tbody>
                          {todayData[0]
                            .filter((match) => match.sport === "Cricket")
                            .map((match, index) => (
                              <tr key={index} className="text-sm">
                                <td className="py-2 w-full">
                                  <div className="flex flex-col ">
                                    <div className="flex gap-1 flex-row items-center">
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
                                          <polygon
                                            points="10,8 16,12 10,16"
                                            fill="white"
                                          />
                                        </svg>
                                      </span>

                                      <h3 className=" text-tableGreenText ">
                                        {match.time}
                                      </h3>
                                    </div>
                                    <div className="flex flex-row items-center">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <p className="text-tableBlueText font-bold">
                                        {match.match}
                                      </p>
                                    </div>
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
                  <div className="lg:hidden border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                    <h3 className="  bg-inPlayTabColor w-full  text-center lg:text-left px-2 py-1 text-sm font-bold text-customWhite">
                      Soccer
                    </h3>
                    <div className="px-2">
                      <table className="">
                        <thead></thead>
                        <tbody>
                          {todayData[0]
                            .filter((match) => match.sport === "Soccer")
                            .map((match, index) => (
                              <tr key={index} className="text-sm">
                                <td className="py-2 w-full">
                                  <div className="flex flex-col ">
                                    <div className="flex gap-1 items-center flex-row">
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
                                          <polygon
                                            points="10,8 16,12 10,16"
                                            fill="white"
                                          />
                                        </svg>
                                      </span>

                                      <h3 className=" text-tableGreenText ">
                                        {match.time}
                                      </h3>
                                    </div>
                                    <div className="flex flex-row items-center">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <p className="text-tableBlueText font-bold">
                                        {match.match}
                                      </p>
                                    </div>
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
                  <div className="lg:hidden border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                    <h3 className="  bg-inPlayTabColor w-full  text-center lg:text-left px-2 py-1 text-sm font-bold text-customWhite">
                      Tennis
                    </h3>
                    <div className="px-2">
                      <table className="">
                        <thead></thead>
                        <tbody>
                          {todayData[0]
                            .filter((match) => match.sport === "Tennis")
                            .map((match, index) => (
                              <tr key={index} className="text-sm">
                                <td className="py-2 w-full">
                                  <div className="flex flex-col ">
                                    <div className="flex gap-1 flex-row items-center">
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
                                          <polygon
                                            points="10,8 16,12 10,16"
                                            fill="white"
                                          />
                                        </svg>
                                      </span>

                                      <h3 className=" text-tableGreenText ">
                                        {match.time}
                                      </h3>
                                    </div>
                                    <div className="flex flex-row items-center">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <p className="text-tableBlueText font-bold">
                                        {match.match}
                                      </p>
                                    </div>
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
              </div>
              
            )}
          </div>
          <div className="">
            {activeTab === "Tomorrow" && (
              <div className="">
                <div className="lg:flex hidden bg-sliderButtonMediumGray flex-row text-sm border-b border-customBlack py-5 px-3 justify-between ">
                  <div className="flex  flex-row  items-center gap-6">
                    <h3 className="font-bold">Sports-Filter:</h3>
                    <div className="flex flex-row items-center gap-1">
                      <p>Cricket</p>
                      <div className="flex flex-row items-center">
                        <span className="text-customWhite ">
                          <svg
                            className="w-3 h-3 "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                          >
                            <circle cx="50" cy="50" r="40" fill="gray" />
                          </svg>
                        </span>
                        <p>Soccer</p>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="text-customWhite ">
                          <svg
                            className="w-3 h-3 "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                          >
                            <circle cx="50" cy="50" r="40" fill="gray" />
                          </svg>
                        </span>
                        <p>Tennis</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      ref={tomorrowButtonRef}
                      className="px-8 py-1 bg-customWhite rounded-md shadow-2xl"
                      onClick={() => setIsTomorrowModalOpen((prev) => !prev)}
                    >
                      {isTomorrowModalOpen ? "Close" : "Filter"}
                    </button>
                    {isTomorrowModalOpen && (
                      <div
                        ref={tomorrowDropdownRef}
                        className="absolute top-7 right-5 flex items-center justify-center  bg-opacity-50"
                      >
                        <div className="bg-customWhite p-6 rounded-lg shadow-lg w-80">
                          <ul className=" grid grid-cols-2  border-b border-customBlack">
                            <div className="flex flex-row gap-2">
                              <input type="checkbox" name="" id="" />
                              <li>All </li>
                            </div>
                            <div className="flex flex-row gap-2">
                              <input type="checkbox" name="" id="" />
                              <li>Soccer </li>
                            </div>
                            <div className="flex flex-row gap-2">
                              <input type="checkbox" name="" id="" />
                              <li>Tennis </li>
                            </div>
                            <div className="flex flex-row gap-2">
                              <input type="checkbox" name="" id="" />
                              <li>Cricket </li>
                            </div>
                          </ul>
                          <div className="grid grid-cols-2 pt-3 justify-items-start">
                            <button className="px-8 py-1 rounded-sm bg-customBlack text-textYellowColor">
                              Save
                            </button>
                            <button className="px-8 py-1 rounded-sm bg-customWhite shadow-2xl">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full lg:mt-4 bg-customWhite shadow-2xl">
                  <div className="lg:pt-4   overflow-y-auto hidden lg:table-cell">
                    <table className="border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                      <thead></thead>
                      <tbody>
                        {tomorrowData[0].map((tomorrow, index) => (
                          <tr key={index} className="text-sm">
                            <td className="pr-16 whitespace-nowrap font-bold border-b">
                              {tomorrow.time}
                            </td>
                            <td className="pr-4 border-b font-light">
                              {tomorrow.sport}
                            </td>
                            <td className="pr-4 whitespace-nowrap border-b">
                              --
                            </td>
                            <td className="border-b  text-tableBlueText font-bold">
                              {tomorrow.match}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="lg:hidden border-b-2   border-textYellowColor lg:border-none mb-4 lg:mb-0 ">
                    <h3 className="  bg-inPlayTabColor w-full  text-center lg:text-left px-2 py-1 text-sm font-bold text-customWhite">
                      Cricket
                    </h3>
                    <div className="px-2 ">
                      <table className="">
                        <thead></thead>
                        <tbody className="">
                          {tomorrowData[0]
                            .filter((match) => match.sport === "Cricket")
                            .map((match, index) => (
                              <tr key={index} className="text-sm    ">
                                <td className="py-2 w-full  ">
                                  <div className="flex flex-col ">
                                    <div className="flex gap-1 flex-row items-center">
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
                                          <polygon
                                            points="10,8 16,12 10,16"
                                            fill="white"
                                          />
                                        </svg>
                                      </span>

                                      <h3 className=" text-tableGreenText ">
                                        {match.time}
                                      </h3>
                                    </div>
                                    <div className="flex flex-row items-center">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <p className="text-tableBlueText whitespace-nowrap font-bold">
                                        {match.match}
                                      </p>
                                    </div>
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
                  <div className="lg:hidden border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                    <h3 className="  bg-inPlayTabColor w-full  text-center lg:text-left px-2 py-1 text-sm font-bold text-customWhite">
                      Soccer
                    </h3>
                    <div className="px-2">
                      <table className="">
                        <thead></thead>
                        <tbody>
                          {tomorrowData[0]
                            .filter((match) => match.sport === "Soccer")
                            .map((match, index) => (
                              <tr key={index} className="text-sm">
                                <td className="py-2 w-full">
                                  <div className="flex flex-col ">
                                    <div className="flex gap-1 flex-row items-center">
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
                                          <polygon
                                            points="10,8 16,12 10,16"
                                            fill="white"
                                          />
                                        </svg>
                                      </span>

                                      <h3 className=" text-tableGreenText ">
                                        {match.time}
                                      </h3>
                                    </div>
                                    <div className="flex flex-row items-center">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <p className="text-tableBlueText font-bold">
                                        {match.match}
                                      </p>
                                    </div>
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
                  <div className="lg:hidden border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                    <h3 className="  bg-inPlayTabColor w-full  text-center lg:text-left px-2 py-1 text-sm font-bold text-customWhite">
                      Tennis
                    </h3>
                    <div className="px-2">
                      <table className="">
                        <thead></thead>
                        <tbody>
                          {tomorrowData[0]
                            .filter((match) => match.sport === "Tennis")
                            .map((match, index) => (
                              <tr key={index} className="text-sm">
                                <td className="py-2 w-full">
                                  <div className="flex flex-col ">
                                    <div className="flex gap-1 flex-row items-center">
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
                                          <polygon
                                            points="10,8 16,12 10,16"
                                            fill="white"
                                          />
                                        </svg>
                                      </span>

                                      <h3 className=" text-tableGreenText ">
                                        {match.time}
                                      </h3>
                                    </div>
                                    <div className="flex flex-row items-center">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <p className="text-tableBlueText font-bold">
                                        {match.match}
                                      </p>
                                    </div>
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
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="relative w-1/4 whitespace-nowrap hidden lg:block">
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
              className="w-3 h-auto border border-customWhite"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="white"
              className="w-3 h-auto border border-customWhite"
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
          <div className="w-full bg-customWhite h-[300px] shadow-2xl"></div>
        )}
      </div>
    </div>
  );
};

export default InPlay;
