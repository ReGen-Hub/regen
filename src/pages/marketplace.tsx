import Link from "next/link";
import { useEffect, useState } from "react";
import AddProduct from '../components/ecommerce/AddProduct'

const MarketPlace = () => {
    const [state, setState] = useState("")
    console.log("state", state);

    const handleState = (event: any) => {
       setState(event.target.innerText)
        
    }
    

  return (
    <div className="relative">
        <div className="mx-auto px-12 lg:px-32 py-24">
            <button onClick={(e: any) => handleState(e)}>Supplier</button>
            <button onClick={(e: any) => handleState(e)} >Customer</button>
            {
                state == "Supplier" ? 
                <>
                 <AddProduct/>
                </> :<></>
            }
        </div>
    </div>
  );
}

export default MarketPlace;
