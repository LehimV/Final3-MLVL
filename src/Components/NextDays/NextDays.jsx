import React from "react";
import { getcleandate } from "../dateformat";
import { TiWeatherSunny } from "react-icons/ti";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

function NextDays({ nextdays, temperatureformat }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-4 md:flex md:gap-4 px-4 py-12 mt-10 md:mt-0 bg-[#100E1D] text-white lg:p-6">
      {nextdays.map((future, index) => {
        return (
          <div key={index} className="flex flex-col justify-center items-center bg-[#1E213A] p-4">
            <p>{index === 0 ? "Today" : getcleandate(future.date)}</p>
            <img
              className="w-[120px]"
              src={future.day.condition.icon.replace("64x64", "128x128")}
              alt=""
            />
            <div className="flex justify-between items-center gap-6">
              <div className="flex gap-2 items-center">
                <p>{future.day[`maxtemp_${temperatureformat}`]}</p>
                {temperatureformat === "c" ? (
                  <FaTemperatureHigh size={20} color="gray" />
                ) : (
                  <TiWeatherSunny size={20} color="gray" />
                )}
              </div>
              <div className="flex gap-2 items-center">
                <p>{future.day[`mintemp_${temperatureformat}`]}</p>
                {temperatureformat === "c" ? (
                  <FaTemperatureLow size={20} color="gray" />
                ) : (
                  <TiWeatherSunny size={20} color="gray" />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NextDays;
