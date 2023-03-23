import Link from "next/link";
import { useEffect, useState } from "react";
import AddProduct from '../components/ecommerce/AddProduct'

const Customer = () => {
  return (
    <div className="relative">
        <div className="mx-auto px-12 lg:px-32 py-24">
            <AddProduct/>
        </div>
    </div>
  );
}

export default Customer;
