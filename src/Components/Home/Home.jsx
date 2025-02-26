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
import image1 from "../../assets/MainImage1.avif";
import image2 from "../../assets/MainImage2.avif";
import image3 from "../../assets/MainImage3.avif";
import image4 from "../../assets/MainImage4.avif";
import image5 from "../../assets/ClassImage5.avif";
import image6 from "../../assets/ClassImage6.avif";
import image7 from "../../assets/ClassImage7.avif";
import image8 from "../../assets/ClassImage8.avif";
import image9 from "../../assets/ClassImage9.avif";
import image10 from "../../assets/ClassImage10.avif";
import image11 from "../../assets/MainImageNew.avif";
import image12 from "../../assets/ClassImage12.avif";
import image13 from "../../assets/ClassImage13.avif";
import image14 from "../../assets/ClassImage14.avif";
import image15 from "../../assets/ClassImage15.avif";
import image16 from "../../assets/ClassImage16.avif";
import image17 from "../../assets/ClassImage17.avif";
import image18 from "../../assets/ClassImage18.avif";
import image19 from "../../assets/ClassImage19.avif";
import image20 from "../../assets/ClassImage20.avif";
import { Link } from "react-router-dom";
import Marquee from "../Marquee/Marquee";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [showArrows, setShowArrows] = useState(false);
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
  
  const data = [
    {
      title: "first row",
      gridClass: "sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-2 ",
      items: [
        {
          imgSrc: image1,
          tittle: "sports",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image2,
          tittle: "Sport Book",
          imgClass: "w-full h-full",
        },
      ],
    },

    {
      title: "second row",
      gridClass: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ",
      items: [
        {
          imgSrc: image3,
          tittle: "Virtual Sports",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image4,
          tittle: "Jili",
          imgClass: "w-full h-full",
        },
      ],
    },
    {
      title: "third row",
      titleClass: "text-customBlack",
      gridClass: "sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ",
      items: [
        {
          imgSrc: image5,
          tittle: "Sexy Casino",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image6,
          tittle: "Aviator",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image7,
          tittle: "Aviatrix",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image8,
          tittle: "Evolution",
          imgClass: "w-full h-full",
        },
      ],
    },
    {
      title: "fourth row",
      titleClass: "text-black",
      gridClass: "sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ",
      items: [
        {
          imgSrc: image9,
          tittle: "Sexy Casino",
          gridSpan: "col-span-1",
          imgClass: "w-full h-full ",
        },
        {
          imgSrc: image10,
          tittle: "Aviator",
          gridSpan: "col-span-1",
          imgClass: "w-full h-full ",
        },
        {
          imgSrc: image11,
          tittle: "Aviatrix",
          gridSpan: "col-span-2",
          imgClass: "w-full h-full  ",
        },
      ],
    },
    {
      title: "fifth row",
      titleClass: "text-customBlack",
      gridClass: " sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ",
      items: [
        {
          imgSrc: image12,
          tittle: "Super Spade",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image13,
          tittle: "Bombay Live",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image14,
          tittle: "Bet Games",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image15,
          tittle: "Royal Gaming",
          imgClass: "w-full h-full",
        },
      ],
    },

    {
      title: "sixth row",
      titleClass: "text-customBlack",
      gridClass: "sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ",
      items: [
        {
          imgSrc: image16,
          tittle: "Fc Gaming",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image17,
          tittle: "Red Tiger",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image18,
          tittle: "YL Gaming",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image19,
          tittle: "JDB Gaming",
          imgClass: "w-full h-full",
        },
      ],
    },
  ];
  const mobileData = [
    {
      title: "first row",
      gridClass: " grid-cols-1 ",
      items: [
        {
          imgSrc: image1,
          tittle: "sports",
          imgClass: "w-full h-full",
        },
      ],
    },

    {
      title: "second row",
      gridClass: "grid-cols-1 ",
      items: [
        {
          imgSrc: image2,
          tittle: "Sport Book",
          imgClass: "w-full h-full",
        },
      ],
    },
    {
      title: "third row",
      titleClass: "text-black",
      gridClass: " lg:grid-cols-4 ",
      items: [
        {
          imgSrc: image3,
          tittle: "Virtual Sports",
          imgClass: "w-full h-full",
        },
      ],
    },
    {
      title: "fourth row",
      titleClass: "text-black",
      gridClass: " grid-cols-1 ",
      items: [
        {
          imgSrc: image4,
          tittle: "JILI",
          gridSpan: "col-span-1",
          imgClass: "w-full h-full ",
        },
      ],
    },
    {
      title: "sixth row",
      titleClass: "text-black",
      gridClass: " grid-cols-2 ",
      items: [
        {
          imgSrc: image5,
          tittle: "Sexy Casino",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image6,
          tittle: "Aviator",
          imgClass: "w-full h-full",
        },
      ],
    },
    {
      title: "fifth row",
      titleClass: "text-black",
      gridClass: " grid-cols-2 ",
      items: [
        {
          imgSrc: image7,
          tittle: "Aviatrix",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image8,
          tittle: "Evolution",
          imgClass: "w-full h-full",
        },
      ],
    },

    {
      title: "sixth row",
      titleClass: "text-black",
      gridClass: " grid-cols-2 ",
      items: [
        {
          imgSrc: image9,
          tittle: "Ezugi Casino",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image10,
          tittle: "Playtech Gam..",
          imgClass: "w-full h-full",
        },
      ],
    },

    {
      title: "seventh row",
      titleClass: "text-black",
      gridClass: " grid-cols-1 ",
      items: [
        {
          imgSrc: image11,
          tittle: "Spade Gaming",
          imgClass: "w-full h-full",
        },
      ],
    },
    {
      title: "eighth row",
      titleClass: "text-black",
      gridClass: " grid-cols-2 ",
      items: [
        {
          imgSrc: image12,
          tittle: "Super Spade",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image13,
          tittle: "Bombay Live",
          imgClass: "w-full h-full",
        },
      ],
    },
    {
      title: "ninth row",
      titleClass: "text-black",
      gridClass: " grid-cols-2 ",
      items: [
        {
          imgSrc: image14,
          tittle: "Bet Games",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image15,
          tittle: "Royal Gaming",
          imgClass: "w-full h-full",
        },
      ],
    },
    {
      title: "tenth row",
      titleClass: "text-black",
      gridClass: " grid-cols-2 ",
      items: [
        {
          imgSrc: image16,
          tittle: "Fc Gaming",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image17,
          tittle: "Red Tiger",
          imgClass: "w-full h-full",
        },
      ],
    },
    {
      title: "twelvth row",
      titleClass: "text-black",
      gridClass: " grid-cols-2 ",
      items: [
        {
          imgSrc: image18,
          tittle: "YL Gaming",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image19,
          tittle: "JDB Gaming",
          imgClass: "w-full h-full",
        },
      ],
    },
  ];

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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
      setShowArrows(true);
      const timer = setTimeout(() => setShowArrows(false), 4000);
      return () => clearTimeout(timer);
    }, [currentIndex]);

  return (
    <div className="bg-inPlayBgColor">
    <div className=" mx-auto  lg:max-w-4xl">
    <Marquee />
      <div className="relative w-full overflow-hidden">
        <div
          className="w-full flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 1s ease-in-out" : "none",
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

        <div className="absolute hidden  bottom-0 lg:bottom-4 left-1/2 transform -translate-x-1/2 lg:flex gap-2 bg-customBlack bg-opacity-50 px-4 py-1 md:py-2 lg:py-2 rounded-lg">
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
        <div className="lg:hidden">
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
                onClick={handleNextSlide}
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
      </div>
     
   
      <div className="hidden md:block lg:block relative">
        {data.map((section, index) => (
          <div
            className={`grid grid-${section.gridClass}  px-2 lg:px-0 gap-2  pt-3`}
          >
            {section.items.map((item, i) => (
              <div key={i} className={`relative ${item.gridSpan || ""}`}>
                <img
                  src={item.imgSrc}
                  alt=""
                  className={`${item.imgClass} border-b-8 border-loginColor`}
                />
                {section.title === "first row" && i === 0 && (
                  <div className="absolute pt-3 p-2 bg-customBlack70 text-sm top-0 right-0">
                    <Link className=" text-customWhite" to="/inplay">
                      <div className="flex items-center pb-2 animate-pulse">
                        <span className="bg-liveRedColor rounded-sm  border-l-8 border-customWhite font-bold text-md px-2">
                          LIVE
                        </span>
                      </div>
                      <ul className="text-customWhite  flex flex-col gap-x-5 gap-y-1">
                        <div className="flex  flex-row justify-between gap-x-2">
                          <li>Cricket</li>
                          <span className="w-auto text-center px-1 rounded-sm bg-customWhite text-customBlack">
                            7
                          </span>
                        </div>
                        <div className="flex flex-row justify-between  gap-x-5">
                          <li>Soccer</li>
                          <span className="w-auto text-center px-1 rounded-sm bg-customWhite text-customBlack">
                            14
                          </span>
                        </div>
                        <div className="flex flex-row justify-between gap-x-12">
                          <li>Tennis</li>
                          <span className="w-auto inline-block rounded-sm px-1 text-center bg-customWhite text-customBlack ">
                            11
                          </span>
                        </div>
                      </ul>
                    </Link>
                  </div>
                )}
                <h3 className="absolute bottom-2 w-full  text-customWhite text-left  md:px-2 lg:px-2 font-bold bg-customBlack70 lg:text-sm  text-xs">
                  {item.tittle}
                </h3>
                <div className="">
                  <button
                    className="absolute bottom-2 right-0 border border-loginColor bg-loginColor px-1 md:px-5 lg:px-5 transform text-xs lg:text-sm text-customBlack font-medium"
                    style={{
                      clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    }}
                  >
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className=" md:hidden lg:hidden relative">
        {mobileData.map((section, index) => (
          <div
            className={`grid grid-${section.gridClass} px-2 lg:px-0 gap-2 md:grid-cols-4 lg:grid-cols-4 pt-3`}
          >
            {section.items.map((item, i) => (
              <div key={i} className={`relative ${item.gridSpan || ""}`}>
                <img
                  src={item.imgSrc}
                  alt=""
                  className={`${item.imgClass} border-b-8 border-loginColor`}
                />
                {section.title === "first row" && i === 0 && (
                  <div className="absolute pt-3 p-1 bg-customBlack70  top-0 right-0">
                    <Link className=" text-customWhite" to="/inplay">
                      <div className="flex items-center  pb-2 space-x-2">
                        <span className="bg-liveRedColor rounded-sm animate-pulse border-l-8 border-customWhite font-bold text-sm px-1">
                          LIVE
                        </span>
                      </div>

                      <ul className="text-customWhite flex text-xs flex-col gap-x-5 gap-y-1">
                        <div className="flex flex-row  justify-between gap-x-3">
                          <li>Cricket</li>
                          <span className="w-auto text-center px-1 rounded-sm bg-customWhite text-customBlack">
                            7
                          </span>
                        </div>
                        <div className="flex flex-row justify-between  gap-x-5">
                          <li>Soccer</li>
                          <span className="w-auto text-center px-1 rounded-sm bg-customWhite text-customBlack">
                            14
                          </span>
                        </div>
                        <div className="flex flex-row justify-between gap-x-12">
                          <li>Tennis</li>
                          <span className="w-auto inline-block rounded-sm px-1 text-center bg-customWhite text-customBlack ">
                            11
                          </span>
                        </div>
                      </ul>
                    </Link>
                  </div>
                )}
                <h3 className="absolute bottom-2 w-full  text-customWhite text-left py-1 px-1  md:px-2 lg:px-2 font-bold  bg-customBlack70   lg:text-sm  text-xs">
                  {item.tittle}
                </h3>
                <div className="">
                  <button
                    className="absolute bottom-2 right-0 border border-loginColor bg-loginColor pl-3 pr-1 py-1  md:px-5 lg:px-5 transform text-xs lg:text-sm text-customBlack font-medium"
                    style={{
                      clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    }}
                  >
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

     
    </div>
    </div>
  );
};

export default Home;
