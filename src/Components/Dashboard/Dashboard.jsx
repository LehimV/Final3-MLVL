import React, { useState } from "react";
import { BsPinMap } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiCelsiusFill } from "react-icons/ri";
import { getcleandate } from "../dateformat";
import Searchform from "./Searchform";
import { AiOutlineClose } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";
import { GrClose } from "react-icons/gr";

function Dashboard({
  currentWeather,
  city,
  setCity,
  temperatureFormat,
  setTemperatureFormat,
  onSearch,
}) {
  const [showForm, setShowForm] = useState(false);

  const getuserlocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCity(`${position.coords.latitude},${position.coords.longitude}`);
      });
    }
  };

  return (
    <div className="w-full min-h-screen lg:min-w-[30%] lg:max-w-[30%]  flex flex-col gap-2 lg:mr-auto">
      <div className="text-white px-4 py-2  flex justify-between   items-center  ">
        <button
          className="bg-gray-400 p-2 cursor-pointer"
          onClick={() => {
            setShowForm(true);
          }}
        >
          Search for places
        </button>
        <button className="bg-gray-400 rounded-[50%] p-2 cursor-pointer" onClick={getuserlocation}>
          <BsPinMap size={24} color="white" />
        </button>
      </div>

      {showForm && (
        <div className="text-white fixed w-full h-screen  bg-slate-900 flex flex-col gap-6 p-4 lg:min-w-[30%] lg:max-w-[30%] ">
          <AiOutlineClose
            onClick={() => {
              setShowForm(false);
            }}
            className="cursor-pointer ml-auto tbg-white"
            size={30}
          />
          <Searchform setCity={setCity} setShowForm={setShowForm} />
        </div>
      )}

      {!showForm && (
        <div className="w-full flex flex-col justify-center items-center md:mt-2">
          <img
            className="w-[300px] h-[300px] object-contain invert-[.30] opacity-10 scale-[1.2]"
            src="./images/Cloud-background.png"
            alt=""
          />
          <div className="">
            <div className="flex flex-col justify-center items-center -mt-[12rem]">
              <img
                className="sm:w-[200px] md:w-[300px] lg:w-[150px]"
                src={`http:${
                  currentWeather.current
                    ? currentWeather.current.condition.icon.replace("64x64", "128x128")
                    : ""
                }`}
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col text-white gap-6 items-center lg:gap-4">
            <div className="flex items-center justify-center">
              <p className="text-white text-[3rem]">
                {currentWeather.current
                  ? currentWeather.current[`temp_${temperatureFormat}`]
                  : "..."}
              </p>
              {temperatureFormat === "c" ? (
                <RiCelsiusFill size={30} color="gray" className="" />
              ) : (
                <TiWeatherCloudy size={30} color="gray" className="" />
              )}
            </div>

            <p className="text-center text-[48px] font-semibold text-gray-400 md:text-[28px]">
              {currentWeather.current ? currentWeather.current.condition.text : "..."}
            </p>

            <div className="flex items-center justify-center gap-2 md:text-[18px] lg:text-[24px]">
              <p>Today .</p>
              <p>
                {currentWeather.location ? getcleandate(currentWeather.location.localtime) : "..."}
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 mt-4 mb-4 lg:mt-1 md:text-[30px] lg:text-[20px]">
              <FaMapMarkerAlt />
              <p>{currentWeather.location ? currentWeather.location.name : "..."}</p>
            </div>
          </div>

          <div className="text-white hidden md:flex md:gap-2 md:mt-3 p-6">
            <button
              onClick={() => {
                setTemperatureFormat("c");
              }}
              className={
                temperatureFormat === "c" ? "rounded-xl bg-gray-600 p-2" : "rounded-xl bg-white p-2"
              }
            >
              <RiCelsiusFill size={25} color={temperatureFormat === "c" ? "white" : "black"} />
            </button>
            <button
              onClick={() => {
                setTemperatureFormat("f");
              }}
              className={
                temperatureFormat === "f" ? "rounded-xl bg-gray-500 p-2" : "rounded-xl bg-white p-2"
              }
            >
              <TiWeatherCloudy size={25} color={temperatureFormat === "f" ? "white" : "black"} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
