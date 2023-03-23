import Link from "next/link";
import { useEffect, useState } from "react";

const MarketPlace = () => {
    const navigation = [
        { name: "Supplier", href: "/supplier" },
        { name: "Customer", href: "/customer" }
      ];

  return (
    <div className="relative">
        <div className="mx-auto px-12 lg:px-32 py-24">
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
        </div>
    </div>
  );
}

export default MarketPlace;
