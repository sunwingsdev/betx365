import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Result = () => {
  const matchData = {
    thead: ["S.No.", "Sport", "Match Date", "Match Name", "Winner"],
    tbody: [
      {
        "S.No.": 1,
        Sport: "Cricket",
        "Match Date": "2025-02-23 21:19:54",
        "Match Name":
          "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
        Winner: "Islamabad United SRL T20",
      },
      {
        "S.No.": 2,
        Sport: "Cricket",
        "Match Date": "2025-02-23 20:59:21",
        "Match Name": "Lions v North West Dragons - (34057482)",
        Winner: "North West Dragons",
      },
      {
        "S.No.": 3,
        Sport: "Cricket",
        "Match Date": "2025-02-23 20:58:03",
        "Match Name": "Kwazulu Natal Inland v Eastern Storm - (34058323)",
        Winner: "Kwazulu Natal Inland",
      },
      {
        "S.No.": 4,
        Sport: "Cricket",
        "Match Date": "2025-02-23 21:19:54",
        "Match Name":
          "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
        Winner: "Islamabad United SRL T20",
      },{
        "S.No.": 5,
        Sport: "Cricket",
        "Match Date": "2025-02-23 21:19:54",
        "Match Name":
          "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
        Winner: "Islamabad United SRL T20",
      },{
        "S.No.": 6,
        Sport: "Cricket",
        "Match Date": "2025-02-23 21:19:54",
        "Match Name":
          "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
        Winner: "Islamabad United SRL T20",
      },{
        "S.No.": 7,
        Sport: "Cricket",
        "Match Date": "2025-02-23 21:19:54",
        "Match Name":
          "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
        Winner: "Islamabad United SRL T20",
      },{
        "S.No.": 8,
        Sport: "Cricket",
        "Match Date": "2025-02-23 21:19:54",
        "Match Name":
          "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
        Winner: "Islamabad United SRL T20",
      },{
        "S.No.": 9,
        Sport: "Cricket",
        "Match Date": "2025-02-23 21:19:54",
        "Match Name":
          "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
        Winner: "Islamabad United SRL T20",
      },
      {
        "S.No.": 10,
        Sport: "Cricket",
        "Match Date": "2025-02-23 21:19:54",
        "Match Name":
          "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
        Winner: "Islamabad United SRL T20",
      },{
        "S.No.": 11,
        Sport: "Cricket",
        "Match Date": "2025-02-23 21:19:54",
        "Match Name":
          "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
        Winner: "Islamabad United SRL T20",
      },
    ],
  };

  const [dateTime, setDateTime] = useState("2025-02-23T00:01");
  const [dateTimeTwo, setDateTimeTwo] = useState("2025-02-23T00:01");
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    console.log("Search Input:", event.target.value);
  };
  return (
    <div className="bg-inPlayBgColor flex flex-row gap-x-4 lg:px-4">
      <div className="w-[30%] hidden lg:block  h-min bg-customWhite shadow-lg ">
        <div className="flex flex-row justify-between   bg-logoutBlueColor ">
          <span className="  ">
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
            <h2 className=" px-4   cursor-pointer ">Check Result</h2>
          </div>
        </div>
        <div className="  text-sm bg-customWhite hover:bg-sliderButtonMediumGray hover:text-customWhite text-customBlack gap-2 px-2">
          <h2 className=" px-4   cursor-pointer "> Result</h2>
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-bold bg-inPlayTabColor text-customWhite lg:text-customBlack lg:bg-transparent text-center py-1 lg:text-left">Check Result</h3>
        
        <div className=" lg:flex lg:flex-row flex  flex-col   lg:px-2 mt-2 border-b border-sliderButtonMediumGray  gap-2 w-full bg-logoutBlueSoftColor whitespace-nowrap  py-3 lg:items-center text-sm">
          <div className="lg:space-x-2 gap-x-1 flex flex-row  items-center justify-center  ">
          <span className="hidden lg:block">Period</span>
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => {
              setDateTime(e.target.value);
              console.log("Selected Date & Time:", e.target.value);
            }}
            className="border w-[44%] md:w-auto  lg:w-auto border-inPlayTabColor px-1 lg:px-1 text-[11px]  lg:text-xs py-1 border-t-4  rounded-t-md shadow-sm"
          />

          <span className="text-xs">to</span>
          <input
            type="datetime-local"
            value={dateTimeTwo}
            onChange={(e) => {
              setDateTimeTwo(e.target.value);
              console.log("Selected Date & Time Two:", e.target.value);
            }}
            className="border w-[44%] md:w-auto lg:w-auto border-inPlayTabColor px-1 lg:px-1 text-[11px] lg:text-xs py-1 border-t-4  rounded-t-md shadow-sm"
          />
          </div>
          <div className="flex space-x-2 justify-center lg:justify-normal  px-2 ">
            {[
              { label: "Cricket" },
              { label: "Soccer" },
              { label: "Tennis" },
              { label: "Virtual T10" },
            ].map((btn, index) => (
              <button
                key={index}
                className={`px-2 py-1 border border-inPlayTabColor font-medium ${
                  index === 3
                    ? "bg-oneClickBetColor text-textYellowColor hover:bg-commonYellowColor hover:text-customBlack"
                    : "bg-commonYellowColor text-customBlack "
                } text-sm rounded shadow`}
              >
                {btn.label}
              </button>
            ))}
          </div>
          
        </div>
        <div className="flex justify-end my-4  relative">
            <input type="search" name="" id="" placeholder="Search..." className=" px-8 border border-t-2 border-sliderButtonMediumGray placeholder:text-sm rounded-md" value={searchText} onChange={handleSearch} />
        
            <span className="absolute top-2 right-56">
            <IoIosSearch />
            </span>
        </div>
        <div className="overflow-x-auto  ">
      <table className="table-auto whitespace-nowrap border-collapse border border-sliderButtonMediumGray w-full">
        <thead>
          <tr className="bg-gray-200">
            {matchData.thead.map((heading, index) => (
              <th key={index} className="border border-sliderButtonMediumGray bg-customBlack text-customWhite  text-sm px-4 py-2">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
  {matchData.tbody.map((row, index) => (
    <tr
      key={index}
      className={`hover:bg-sliderButtonLightGray  ${index % 2 === 0 ? "bg-customWhite" : "bg-logoutBlueSoftColor"}`}
    >
      {matchData.thead.map((heading, i) => (
        <td key={i} className={`border border-sliderButtonMediumGray ${i===0 ? 'text-center': ''} text-xs px-4 py-2`}>
          {row[heading]}
        </td>
      ))}
    </tr>
  ))}
</tbody>

      </table>
    </div>
      </div>
    </div>
  );
};

export default Result;
