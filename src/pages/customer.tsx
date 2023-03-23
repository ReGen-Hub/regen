import Link from "next/link";
import { useEffect, useState } from "react";
import AddProduct from '../components/ecommerce/AddProduct'
import Product from "../components/ecommerce/Product";

const Customer = () => {
  return (
    <div className="relative">
        <div className="mx-auto px-12 lg:px-32 py-24">
            <Product/>
        </div>
    </div>
  );
}

export default Customer;
