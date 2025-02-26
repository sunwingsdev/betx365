import React, {  useState } from "react";
import banner from '../../assets/KV01.jpg'
import PLogo from "../../assets/download.svg";
import BLogo from "../../assets/download (2).svg";
import FLogo from "../../assets/download (3).svg";
import { RiPushpin2Line } from "react-icons/ri";
import Marquee from "../Marquee/Marquee";
import { IoReload } from "react-icons/io5";

const Soccer = () => {
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
      const [isBetSlipOpen, setIsBetSlipOpen] = useState(true);
      const [BetOpen, setBetOpen] = useState(true);
        const [selectedValue, setSelectedValue] = useState("");
        const [checkboxes, setCheckboxes] = useState({
            betInfo: false,
            consolidate: false,
            avgOdds: false,
          });
      
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
    return (
        <div className="bg-inPlayBgColor">
      <div className="lg:flex hidden flex-row  gap-2 w-full mx-auto lg:max-w-[1300px]">
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
            <div className="flex flex-row items-center font-bold text-sm text-customWhite gap-2 px-2">
              <h2
                className="border-r px-4   cursor-pointer rounded-2xl"
               
              >
                Sports:
              </h2>
              <p>Cricket</p>
            </div>
          </div>
          <div className="w-full h-[500px] bg-customWhite shadow-2xl">
            <div className="  rounded-lg">
              <ul className="mt-2 text-tableBlueText  text-xs   list-inside">
                { 
                   
                    tabData['Soccer'].map((soccer, index) => (
                      <div className="flex flex-row items-center px-4 space-y-2 border-b border-textYellowColor  border-opacity-30 justify-between cursor-pointer">
                        <li
                          className="hover:text-customBlack cursor-pointer"
                          key={index}
                        >
                          {soccer}
                        </li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4 text-customWhite"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                   
                 
                ))}
              </ul>
            </div>
          </div>
        </div>
        
          <div className="w-full overflow-y-auto h-[500px] overflow-x-hidden">
          <Marquee />
            <div className=" w-full ">
              <img
                src={banner}
                alt=""
                className="w-full h-24  lg:h-auto md:h-auto "
              />
             
            </div>
            <div className=" ">
              <h3 className="px-2 py-1 text-sm bg-inPlayTabColor text-customWhite font-bold w-full  ">
                Highlights
              </h3>

             
            </div>
            <div className="overflow-x-auto overflow-y-auto ">
              
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
                                <div className="flex  flex-col-reverse  border-customWhite whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
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
                                  <p className="w-[50px] h-[22px]  text-center bg-tableBoxBlue">
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
              
              
            </div>
          </div>
         
          
       
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
       
                   {/* SVG Icons for + and - */}
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
                     <select
                       className="border border-inPlayTabColor my-2 w-full rounded"
                       value={selectedValue}
                       onChange={handleChange}
                     >
                       <option value="select">-- Select -- </option>
                       <option value="cancel">-- Cancel -- </option>
                     </select>
                     <p className="bg-logoutBlueSoftColor font-medium px-2">Matched</p>
                     <div className="flex text-xs px-2 gap-1">
                       {checkboxOptions.map((checkbox) => (
                         <label
                           key={checkbox.name}
                           className="flex items-center gap-1"
                         >
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
        
      </div>
     
     
    </div>
    );
};

export default Soccer;