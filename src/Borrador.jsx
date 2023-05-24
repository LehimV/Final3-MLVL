import React from "react";
import { getcleandate } from "../dateformat";
import { TbTemperatureFahrenheit, TbTemperatureCelsius } from "react-icons/tb";

function NextDays({ nextdays, temperatureFormat, setTemperatureFormat }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-4 md:flex md:gap-4 px-4 py-12 mt-10 md:mt-0 bg-[#100E1D] text-white lg:p-6">
      {nextdays.slice(0, 5).map((future, index) => {
        return (
          <div key={index} className="flex flex-col justify-center items-center bg-[#1E213A] p-4">
            <p>{index === 0 ? "Today" : getcleandate(future.date)}</p>
            <img
              className="w-[120px]"
              src={future.day.condition.icon.replace("64x64", "128x128")}
              alt=""
            />
            <div className="flex justify-between items-center gap-6">
              <div className="flex" gap={2}>
                <p>{future.day[`maxtemp_${temperatureFormat}`]}°</p>
                {temperatureFormat === "c" ? <TbTemperatureCelsius /> : <TbTemperatureFahrenheit />}
              </div>
              <div className="flex" gap={2}>
                <p>{future.day[`mintemp_${temperatureFormat}`]}°</p>
                {temperatureFormat === "c" ? <TbTemperatureCelsius /> : <TbTemperatureFahrenheit />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NextDays;


0bad43a6462a4c9fbc6111102232203
811b18be87dbe99d9baf66a9d9add898
f6ab6f930cd1fc8b5b2c2aeeef3d237d