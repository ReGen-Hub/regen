import Link from "next/link";
import { useEffect, useState } from "react";
import AddProduct from '../components/ecommerce/AddProduct'
import Product from "../components/ecommerce/Product";
import { Web3Storage, makeStorageClient } from 'web3.storage';

async function retrieveFiles (cid:any) {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk4MDU1NmE5NzM0RTkyNGJGRDFkNjA4QjA1QTk3OGIyQmY2RjhkMWMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzk1OTQ3Nzc2ODIsIm5hbWUiOiJSZWdlbiJ9.4G_gD1y-HgGUcGi0qMXvybZoNfeuuitK0w0PWSfi63E"
  const client = new Web3Storage({ token })
  const res = await client.get(cid)
  //console.log(`Got a response! [${res.status}] ${res.statusText}`)
  if (res) {
    if (!res.ok) {
      throw new Error(`failed to get ${cid}`)
    }
    // unpack File objects from the response
    const files = await res.files()
    return files[0].name
  }
}

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
