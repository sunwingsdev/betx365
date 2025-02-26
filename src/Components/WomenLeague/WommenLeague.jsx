import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiPushpin2Line } from "react-icons/ri";
import { IoReload } from "react-icons/io5";
import Marquee from "../Marquee/Marquee";

const WommenLeague = () => {
  const teams = [
    {
      name: "Delhi Capitals Women",
      data: [
        { back: 151.36, lay: 3.45 },
        { back: 275, lay: 3.5 },
        { back: 1.6, lay: 4.9 },
        { back: 3.46, lay: 5.1 },
        { back: 1.45, lay: 5.2 },
        { back: 18.71, lay: 3.2 },
      ],
    },
    {
      name: "Mumbai Indians Women",
      data: [
        { back: 189.2, lay: 2.92 },
        { back: 367.6, lay: 3 },
        { back: 16.61, lay: 3.9 },
        { back: 13.99, lay: 3.95 },
        { back: 88, lay: 12 },
        { back: 20, lay: 2.76 },
      ],
    },
    {
      name: "RC Bengaluru Women",
      data: [
        { back: 86.54, lay: 2.84 },
        { back: 386.15, lay: 2.88 },
        { back: 20.85, lay: 3.5 },
        { back: 2.77, lay: 3.7 },
        { back: 3.46, lay: 3.8 },
        { back: 14.99, lay: 2.8 },
      ],
    },
    {
      name: "Gujarat Giants Women",
      data: [
        { back: 16.06, lay: 6.4 },
        { back: 33.25, lay: 6.6 },
        { back: 7.32, lay: 14.5 },
        { back: 66, lay: 15.5 },
        { back: 5, lay: 100 },
        { back: 5, lay: 6.2 },
      ],
    },
    {
      name: "UP Warriorz Women",
      data: [
        { back: 16.35, lay: 16 },
        { back: 12, lay: 21 },
        { back: 1.33, lay: 42 },
        { back: 6.89, lay: 150 },
        { back: 5.08, lay: 1000 },
        { back: 3.08, lay: 20 },
      ],
    },
  ];
  const navigate = useNavigate()

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
    <div className="flex  flex-row  gap-2 w-full mx-auto lg:max-w-[1300px]">
      <div className="w-[30%] hidden lg:block">
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
          <div className=" font-bold text-sm text-customWhite gap-2 px-2">
            <Link to="/multimarket">
              <h2 className="border-r px-4   cursor-pointer rounded-2xl">
                Sports:
              </h2>
            </Link>
            
          </div>
          
        </div>
      </div>

      <div className="w-full lg:w-[60%] ">
        <Marquee/>
        <div className="bg-inPlayTabColor text-sm lg:text-lg whitespace-nowrap py-1  flex flex-row justify-between items-center px-4 ">
          <div className="flex flex-row items-center justify-start gap-2 ">
            <span className=" w-6 h-6 flex items-center text-tablePinLogoColor  border border-tablePinLogoColor rounded-full">
              <RiPushpin2Line size={16} />
            </span>
            <h3 className="   text-customWhite  font-bold w-full  ">
              Women's Premier League
            </h3>
            <button className="bg-customWhite font-bold rounded-md px-2">
              winner
            </button>
          </div>
          <span className="hidden lg:block">
          <IoReload className="text-customWhite  " />
          </span>
          <span className="lg:hidden"  onClick={() => navigate(-1)} >
          <IoReload className="text-customWhite  " />
          </span>
        </div>
        <div className="flex flex-row items-center bg-sliderButtonMediumGray py-1  shadow-2xl gap-2 px-4">
          <span className="p-[1px] bg-tableGreenText rounded-sm text-customWhite"
         
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-4 h-auto "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m5-10a9 9 0 11-6.627-2.628M5.25 5.25l1.5 1.5M18.75 5.25l-1.5 1.5"
              />
            </svg>
          </span>
          <h3 className="text-customWhite text-sm lg:text-md">In Play</h3>
        </div>
        <div className="overflow-x-auto px-4 pt-4 bg-inPlayBgColor  lg:px-0">
          <table className=" w-full  bg-customWhite shadow-2xl ">
            <thead className="border-b-2 border-sliderButtonMediumGray">
              <tr className="text-[10px]  ">
                <th className="text-left px-4">5 selections</th>
                <th>200.7%</th>
                <th></th>
                <th className="bg-tableBoxDarkBlue py-[6px]"
                   style={{
                    clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                >
                  Back All
                </th>

                <th className="bg-tableBoxDarkPink py-[6px]"
                style={{
                  clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
                }}
                >
                  Lay All
                </th>
                <th></th>
                <th>96.3%</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr
                  key={index}
                  className="border-b text-xs  whitespace-nowrap  lg:text-md  border-black"
                >
                  <td className=" px-4  font-medium">{team.name}</td>
                  {team.data.map((entry, i) => (
                    <td
                      key={`lay-${index}-${i}`}
                      className={`py-3 px-4  leading-[1] ${
                        i === 0
                          ? "bg-tableBoxLightBlue"
                          : i === 1
                          ? "bg-tableBoxMediumBlue"
                          : i === 2
                          ? "bg-tableBoxBlue"
                          : i === 3
                          ? "bg-tableBoxPink"
                          : i === 4
                          ? "bg-tableBoxMediumPink"
                          : "bg-tableBoxLightPink"
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <span className="block text-[14px] font-medium">
                          {entry.lay}
                        </span>
                        <span className="block text-[13px]">{entry.back}</span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="relative w-1/4 whitespace-nowrap text-sm hidden lg:block">
      <div className="mb-2">

      
                               <div
                                 className="flex items-center  justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
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
                                 <div className="w-full bg-customWhite  h-[300px] shadow-2xl"></div>
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

export default WommenLeague;
