import React from "react";
import { BsWind } from "react-icons/bs";

function Hightlights({ currentWeather }) {
  const formatValue = (value) => {
    return value ? value.toString() : "";
  };

  return (
    <div className="p-6 bg-[#100E1D] text-white">
      <p className="text-white text-[30px] font-bold">Today's Highlights</p>

      <div className="group sm:flex sm:flex-col gap-4 md:grid md:grid-cols-2 lg:mt-4 lg:gap-6">
        <div className="bg-[#1E213A] px-2 py-4 lg:p-2 flex flex-col gap-4 items-center justify-center mt-4 lg:mt-0 lg:min-h-[120px]">
          <p className="">Wind status</p>
          <p className="text-[36px] font-bold">
            {formatValue(currentWeather?.current?.wind_mph)}{" "}
            <span className="text-[26px] text-gray-200">mph</span>
          </p>
          <div className="flex gap-2 items-center">
            <BsWind />
            <p>{formatValue(currentWeather?.current?.wind_dir)}</p>
          </div>
          <br />
        </div>

        <div className="bg-[#1E213A] px-2 py-4 lg:p-2 flex flex-col gap-4 items-center justify-center mt-4 lg:mt-0 lg:min-h-[120px]">
          <p>Humidity</p>
          <p className="text-[36px] font-bold">
            {formatValue(currentWeather?.current?.humidity)}{" "}
            <span className="text-[26px] text-gray-200">%</span>
          </p>
        </div>

        <div className="bg-[#1E213A] px-2 py-4 lg:p-2 flex flex-col gap-4 items-center justify-center mt-4 lg:mt-0">
          <p>Visibility</p>
          <p className="text-[36px] font-bold">
            {formatValue(currentWeather?.current?.vis_miles)} miles
          </p>
        </div>

        <div className="bg-[#1E213A] px-2 py-4 lg:p-2 flex flex-col gap-4 items-center justify-center mt-4 lg:mt-0">
          <p>Air Pressure</p>
          <p className="text-[36px] font-bold">
            {formatValue(currentWeather?.current?.pressure_in)} mb
          </p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Hightlights);
