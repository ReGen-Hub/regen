import { useState, useEffect, useRef } from "react";
import { Web3Storage, getFilesFromPath } from 'web3.storage'  
import Web3 from 'web3';
import MarketABi from '../../abi/marketAbi.json'
import { ethers } from 'ethers'

const data = [
  "Name",
  " Description",
  "Catogories",
  "Price",
  "Corbon Footprint",
];
function dataURLtoFile(dataurl: any, filename:any) {
 
  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), 
      n = bstr.length, 
      u8arr = new Uint8Array(n);
      
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new File([u8arr], filename, {type:mime});
}

//const web3 = new Web3(Web3.givenProvider)
//console.log("web3", web3);
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk4MDU1NmE5NzM0RTkyNGJGRDFkNjA4QjA1QTk3OGIyQmY2RjhkMWMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzk1OTQ3Nzc2ODIsIm5hbWUiOiJSZWdlbiJ9.4G_gD1y-HgGUcGi0qMXvybZoNfeuuitK0w0PWSfi63E"
//const token = process.env.API_TOKEN
const client = new Web3Storage({ token })

// const abi: any = MarketABi
// const swapContract: any = new web3.eth.Contract(
//     abi,
//     "0xC4FA8Ef3914b2b09714Ebe35D1Fb101F98aAd13b"
// )

const { ethereum } = window
const provider = new ethers.providers.Web3Provider(ethereum)
				const signer = provider.getSigner()
				const pos = new ethers.Contract(
					"0x8D12c7018Cbfe2f193ae693B8D61EFF5F4682fAd",
					MarketABi,
					signer
				)

async function storeFiles (file: any) {
  var file1 = dataURLtoFile(file,'coverimage.png');
console.log(file1);
  console.log("In store files befre")
  const files = [file1]

  const cid = await client.put(files)
  console.log("In store files : ", cid)
  return cid;

}

export default function AddProduct() {
  const [fromData, setFromData] = useState<any>();

  const handleChange = (eventData: any, fieldName: any) => {
    fieldName === "Image" ? imageUploaded(eventData, fieldName) :
    setFromData((prevState: any) => ({
      ...prevState,
      [`${fieldName}`]: eventData.target.value,
    })) 
  }


const SaveData = () => {
  console.log("fromData", fromData);
}

function imageUploaded(e: any, fieldName: any) {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = async function () {
    const value: any = reader?.result;
    if (value) {
      const base64String = value.replace("data:", "").replace(/^.+,/, "");
      console.log("base64String", base64String);
      try {
        const image = await storeFiles(`data:image/png;base64,${base64String}`); 
        setFromData((prevState: any) => ({
          ...prevState,
          [`${fieldName}`]: image,
        })) 
        console.log(image)
      } catch (err) {
        console.log("Error Uploading Cover Image", err);
      }
    }
  };
  if (file) {
    reader.readAsDataURL(file);
  }
}

  return (
    <div className="space-y-8 divide-y divide-gray-200">
      
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-5">
            {data.map((item) => {
              return (
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  >
                    {item}
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <div className="flex max-w-lg rounded-md shadow-sm">
                      <input
                        onChange={(e) => handleChange(e, item)}
                        type="text"
                        name={item}
                        id={item}
                        autoComplete={item}
                        className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Cover photo
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          onChange={(e) => handleChange(e, "Image")}
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end gap-x-3">
         <button onClick={SaveData}>
          Save
         </button>
        </div>
      </div>
    </div>
  );
}