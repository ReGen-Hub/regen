import React from "react";
// import { CurrencyDollarIcon, ArrowRightIcon, PaperAirplaneIcon, ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid";
import { launchTransak } from "../../auth/onRamp";
import Pusher from "pusher-js";

import { useGlobalContext } from "../../context/GlobalContext/GlobalContext";
import { useArcanaAuth } from "../../auth/useArcanaAuth";

const project = { name: "Net worth", amount: "240.57", href: "#", currency: "USD", bgColor: "bg-pink-600"};

export default function FiatonRamp() {
const { user, connect, isLoggedIn, loading, loginWithSocial, provider, logout }: any = useArcanaAuth();

  const { setTransakOrderData }: any = useGlobalContext();


  const openTransak = (productsAvailed: string) => {
    console.log(productsAvailed, "productsAvailed");

    const onRampParams = {
      apiKey: "69feba7f-a1c2-4cfa-a9bd-43072768b0e6",
      environment: "STAGING",
      fiatCurrency: "EUR",
      fiatAmount: "44",
      walletAddress: user?.address,
      email: user?.email,
      network: "ethereum",
      productsAvailed,
      widgetHeight: "700px",
      widgetWidth: "450px"
    };

    const transakWidget = launchTransak(onRampParams);

    if (transakWidget) {
      transakWidget.init();

      transakWidget.on(transakWidget.EVENTS.TRANSAK_ORDER_SUCCESSFUL, async (orderData: any) => {
        setTransakOrderData(orderData);

        let pusher = new Pusher("1d9ffac87de599c61283", { cluster: "ap2" });
        let orderId = orderData.status.id;
        let channel = pusher.subscribe(orderId);

        channel.bind(`ORDER_COMPLETED`, (orderData: any) => {
          console.log(orderData, "onlyOrderId");
          transakWidget.close();
        });

        channel.bind(`ORDER_FAILED`, (orderData: any) => {
          console.log(orderData, "onlyOrderId");
          transakWidget.close();
        });
      });
    }
  };

  return (
    <div>
          <button
            type="button"
            onClick={() => openTransak("BUY")}
            className="mr-7 inline-flex items-center rounded-md border border-transparent bg-gradient-to-r from-teal-500  to-teal-400 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm ">
            {/* <ArrowDownIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" /> */}
            Buy Crypto
          </button>
    </div>
  );
}
