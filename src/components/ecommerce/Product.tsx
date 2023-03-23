import { Web3Storage, makeStorageClient } from 'web3.storage';
import Web3 from 'web3';
import MarketABi from '../../abi/marketAbi.json'

const web3 = new Web3('https://matic-mumbai.chainstacklabs.com');

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

const Product = async() => {
  const [data, setData] = useState({});
  const abi: any = MarketABi
const swapContract: any = new web3.eth.Contract(
    abi,
    "0x66EEF07c3CDA2e394d70108F0e775CE585a2D51e"
)
const products = await swapContract.methods.getProducts().call()

  // const cid = feed.coverImageHash;
  // if (cid){
  //   retrieveFiles(cid, API_TOKEN)
  //  .then((fn) => setData(fn))
  // }

  return (
    <section className="">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-center lg:justify-between">
          <h2 className="text-2xl font-bold text-green-900 sm:text-3xl">
            Sustanble Shopping
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:mt-10">
          <div className="relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-500 rounded-xl group">
            <div className="absolute z-10 top-3 right-3">
              <button
                type="button"
                className="inline-flex items-center justify-center text-gray-400 hover:text-rose-500"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  className="object-contain w-full h-52 p-4"
                  src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70"
                  alt="APPLE iPad (9th Gen) 64 GB ROM 10.2 inch"
                />
              </div>
              <div className="px-6 py-4 flex-1 flex flex-col">
                <p className="text-xs font-medium tracking-widest text-gray-500 dark:text-gray-300 uppercase">
                  Apple
                </p>
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                  <a href="#" title="">
                    APPLE iPad (9th Gen) 64 GB ROM 10.2 inch
                  </a>
                </h3>
                <div className="flex items-center mt-2.5">
                  <div className="flex items-center space-x-px">
       
                  </div>
    
                </div>
                <p className="mt-5 text-sm font-bold text-gray-900 dark:text-white">
                  ₹29,900
                </p>
              </div>
            </div>
            <div className="">
              <button
                type="button"
                className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-green-600"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center lg:hidden">
          <a
            href="#"
            title=""
            className="inline-flex items-center justify-center p-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900"
          >
            View all
            <svg
              className="w-5 h-5 ml-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Product;
