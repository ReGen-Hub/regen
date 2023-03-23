import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useArcanaAuth } from "../auth/useArcanaAuth";
import { RecyleContants } from "../utils/recycleConstants";
import { CircleTick, InitialTick } from "../components/svg";
import { ScrapePrice } from "../utils/recycleConstants";

const ScrapeRates = ({ handleStepClick }: any) => {
  const [recycleData, setRecycleData] = useState<any>({});

  useEffect(() => {
    const sessionStorageData: any = sessionStorage.getItem("recycleData");
    setRecycleData(JSON.parse(sessionStorageData));
  }, []);

  const RateData: any = ScrapePrice;

  const [state, setState] = useState<any>({});

  useEffect(() => {
    const sessionStorageData: any = sessionStorage.getItem("scrapeRates");
    console.log("sessionStorageData", sessionStorageData);
    const data = !sessionStorageData ? {} : JSON.parse(sessionStorageData);
    setState(data);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("scrapeRates", JSON.stringify(state));
  }, [state]);

  const handleData = (item: any) => {
    console.log("item", item);

    if (!state) {
      setState((prevState: any) => ({
        ...prevState,
        [`${item.name}`]: item.name,
      }));
    } else {
      if (state[item.name] === item.name) {
        const newObj = { ...state };
        delete newObj[item.name];
        sessionStorage.setItem("scrapeRates", JSON.stringify(newObj));
        setState(newObj);
      } else {
        setState((prevState: any) => ({
          ...prevState,
          [`${item.name}`]: item.name,
        }));
      }
    }
  };


  const handleStorageData = () => {
    sessionStorage.setItem("scrapeRates", JSON.stringify(state));
    handleStepClick(3);
  };

  return (
    <>
      <div className="relative">
        <div className="mx-auto px-12 lg:px-32 py-24">
          <div>
            <p className="text-3xl pb-12">Select scrape rates?</p>
          </div>
          <div className="flex flex-col gap-y-8">
            {Object.values(recycleData).map((item: any, index: any) => {
              return (
                <div className="flex flex-col" key={index}>
                  <div>
                    <p className="text-black">{item}</p>
                  </div>
                  <div className="flex gap-x-6">
                    {RateData[item].map((data: any, index: any) => {
                      return (
                        <div
                          className="w-[125px] lg:!w-[150px]"
                          onClick={() => handleData(data)}
                          key={index}
                        >
                          <div className="relative flex flex-col justify-center items-center border border-green-600 border-opacity-40 p-3 lg:p-4 rounded-xl">
                            <div className="absolute top-1 right-1">
                              {state && state[data.name] === data.name ? (
                                <CircleTick />
                              ) : (
                                <InitialTick />
                              )}
                            </div>
                            <div className="pb-2">{/* <item.logoUri /> */}</div>
                            <div>
                              <p className="text-sm lg:text-md">{data.name}</p>
                              <p className="pt-2 text-sm justify-items-stretch">
                                {data.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end pt-12">
            <button
              onClick={handleStorageData}
              className="text-white font-normal text-md bg-green-500 rounded-xl px-3 py-2"
            >
             Continue With the Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrapeRates;
