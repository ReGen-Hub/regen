import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useArcanaAuth } from "../auth/useArcanaAuth";
import { RecyleContants } from "../utils/recycleConstants";
import { CircleTick, InitialTick } from "../components/svg";

const RequestRecycle = ({ handleStepClick }: any) => {
  const [state, setState] = useState<any>({});
  const [recycleData, setRecycleData] = useState<any>({});

  useEffect(() => {
    const sessionStorageData: any = sessionStorage.getItem("recycleData");
    const data = !sessionStorageData ? {} : JSON.parse(sessionStorageData)
    sessionStorage.setItem("recycleData", JSON.stringify(recycleData))
  }, [recycleData]);

  useEffect(() => {
    const sessionStorageData: any = sessionStorage.getItem("recycleData");
    console.log("sessionStorageData", sessionStorageData);
    const data =  !sessionStorageData ? {} : JSON.parse(sessionStorageData)
    setState(data);
  }, [recycleData]);

  const handleData = (item: any) => {
    if (!state) {
      setRecycleData((prevState: any) => ({
        ...prevState,
        [`${item.name}`]: item.name,
      }));
    } else {
      if (state[item.name] === item.name) {
        const newObj = { ...state };
        delete newObj[item.name];
        sessionStorage.setItem("recycleData", JSON.stringify(newObj));
        setRecycleData(newObj);
      } else {
        setRecycleData((prevState: any) => ({
          ...prevState,
          [`${item.name}`]: item.name,
        }));
      }
    }
  };

  const handleStorageData = () => {
    sessionStorage.setItem("recycleData", JSON.stringify(recycleData));
    handleStepClick(2);
  };

  return (
    <>
      <div className="relative bg-green-50">
        <div className="mx-auto px-12 lg:px-32 py-24">
          <div>
            <p className="text-3xl">What would you like to se?</p>
          </div>
          <div className="grid grid-cols-4 pt-16 gap-x-6 gap-y-12">
            {RecyleContants.map((item: any, index: any) => {
              return (
                <div
                  className="col-span-2 lg:col-span-1 w-[125px] lg:!w-[150px]"
                  onClick={() => handleData(item)}
                  key={index}
                >
                  <div className="relative flex flex-col justify-center items-center border border-green-600 border-opacity-40 p-3 lg:p-4 rounded-xl">
                    <div className="absolute top-1 right-1">
                      {state && state[item.name] === item.name ? (
                        <CircleTick />
                      ) : (
                        <InitialTick />
                      )}
                    </div>
                    <div className="pb-2">
                      <item.logoUri />
                    </div>
                    <div>
                      <p className="text-sm lg:text-md">{item.name}</p>
                    </div>
                  </div>
                  <p className="pt-2 text-sm justify-items-stretch">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end pt-12">
            <button
              onClick={handleStorageData}
              className="text-white font-normal text-md bg-green-500 rounded-xl px-3 py-2"
            >
              Raise Pickup Request
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestRecycle;
