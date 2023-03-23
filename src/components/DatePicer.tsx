import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "tailwindcss/tailwind.css";
import Web3 from 'web3';
import { useArcanaAuth } from "../auth/useArcanaAuth";

function DatePickerComp() {

    const { user, connect, isLoggedIn, loading, loginWithSocial, provider, logout }: any = useArcanaAuth();
    console.log("provider", provider);
    
    const web3 = new Web3(provider)
  const [startDate, setStartDate] = useState(new Date());
  const [location, setLocation] = useState<any>();

  useEffect(() => {
    const newData = {
        "location": location,
        "date": startDate
    }
    sessionStorage.setItem("dateTime", JSON.stringify(newData));
  }, [startDate, location]);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("position", position);

        console.log("latitude", latitude);
        console.log("longitude", longitude);

        setLocation({ latitude, longitude });
      },
      (error) => {
        console.log("Unable to retrieve your location", error);
      }
    );
  }, []);

  const endpoint = "https://geojson.io/#url-api&map=9.72/13.1829/77.5738"; // replace with the API endpoint URL

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + "e39d1c2f-5de5-4af3-b937-f3383779c5ce", // replace with your API key
    },
    body: JSON.stringify({
      latitude: 40.7128, // replace with the latitude of the location you want to query
      longitude: -74.006, // replace with the longitude of the location you want to query
    }),
  };

  // console.log("options", options);

  fetch(
    "https://events.mapbox.com/events/v2?access_token=pk.eyJ1Ijoic2hyZXlhc2gxNSIsImEiOiJjbDY0MGx6d3cwZHFkM3FwZ3Mwb2htMGZoIn0.0BtzRvleOZQpq9EiZbBU_A"
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

    const confrimOrder = () => {
        const RecycleData: any = sessionStorage.getItem("scrapeRates");
        const ScrpaeData: any = sessionStorage.getItem("recycleData");
        const DateLocation: any = sessionStorage.getItem("dateTime");
        const dataItem = [
          {
            RecycleData: JSON.parse(RecycleData),
            ScrpaeData: JSON.parse(ScrpaeData),
            DateLocation: JSON.parse(DateLocation),
          },
        ];
        let encryptionPublicKey = web3.eth.accounts.wallet.encrypt('test');
        console.log("web3.eth.accounts", web3.eth.accounts);
        console.log("encryptionPublicKey", encryptionPublicKey);
    }


    

  return (
    <div className="relative w-full h-screen px-32">
      <div className="flex w-[200px] justify-center mx-auto py-24">
        <div className="flex bg-white items-center border border-green-600 border-opacity-40 rounded-xl">
          <div className="pl-2">
            <svg
              className="w-[24px] h-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"></path>
            </svg>
          </div>
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              className="h-10 px-2 text-gray-700 bg-white focus:outline-none rounded-xl"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex justify-center">
          <div className="border border-green-600 border-opacity-40 p-3 w-[300px] rounded-xl">
            <p className="text-black font-semibold text-center pb-2">
              Get current location
            </p>
            <div className="text-black">
              {location ? (
                <div>
                  <p>Latitude: {location.latitude}</p>
                  <p>Longitude: {location.longitude}</p>
                </div>
              ) : (
                <p>Loading location...</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-12">
        <button
        onClick={confrimOrder}
          className="text-white font-normal text-md bg-green-500 rounded-xl px-3 py-2"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default DatePickerComp;
