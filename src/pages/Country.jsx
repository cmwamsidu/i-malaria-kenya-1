import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Header } from "../components";

import { useStateContext } from "../contexts/ContextProvider";

import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiArrowRightSFill } from "react-icons/ri";
import counties from "../assets/counties.json";

const Country = () => {
  const { countryId } = useParams();
  const { countriesData } = useStateContext();

  const countryDetails = (countriesData, countryId) => {
    return countriesData?.find((country) => {
      return country.cca3.toLowerCase() === countryId;
    });
  };

  const country = countryDetails(countriesData, countryId);

  return (
    <>
      <div className="bg-teal-800 p-3 space-y-2 sticky top-0">
        <Header title={`${country.name.common}n Counties`} />
      </div>
      <div className="h-screen overflow-auto scrollbar-hide">
        {countryId === "ken" ? (
          <div className="w-full text-sm font-semibold text-gray-900 bg-white dark:bg-gray-700 dark:text-white">
            {counties.map((county, i) => (
              <NavLink
                to={`/ken/${county.code}`}
                key={i}
                className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:text-teal-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                <div className="flex items-center justify-between">
                  <h5 className="tracking-wide">{county.name}</h5>
                  <RiArrowRightSFill />
                </div>
              </NavLink>
            ))}
          </div>
        ) : (
          <div className="p-4 m-4 border border-teal-300 rounded-lg bg-teal-50 dark:bg-teal-300" role="alert">
            <div className="flex items-center">
              <BsFillInfoCircleFill className="w-5 h-5 mr-2 animate-pulse text-blue-500" />
              <span className="sr-only">Info</span>
              <h3 className="text-lg font-medium text-teal-900">Data Alert</h3>
            </div>

            <div className="mt-2 mb-4 text-sm text-teal-900">No Data Available at the moment</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Country;
