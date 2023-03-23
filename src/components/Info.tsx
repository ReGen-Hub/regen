import Image from "next/image";
import Link from "next/link";

export default function Info({ info }: any) {
  return (
    <div className="text-black">
      <div className="flex items-center justify-start w-full p-1">
        <div className="inline p-[0.375rem] lg:p-2 rounded-full mr-[0.125rem]">
          <svg width="24" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.87695 22.0001L9.99729 22.9288V21.7144L10.252 21.4287H12.035V22.8573V23.8573H10.1247L7.76846 22.7144L6.87695 22.0001Z" fill="#CDBDB2"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M17.0654 21.9992L14.0088 22.9278V21.7134L13.7541 21.4277H11.9711V22.8563V23.8563H13.8815L16.2375 22.7134L17.0654 21.9992Z" fill="#CDBDB2"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.2518 19.3572L9.99707 21.7143L10.3154 21.4286H13.6267L14.0088 21.7143L13.7541 19.3572L13.2447 19L10.6975 19.0715L10.2518 19.3572Z" fill="#393939"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.5332 3.42773L10.0615 7.42773L10.762 19.0707H13.2455L14.0096 7.42773L15.4106 3.42773H8.5332Z" fill="#F89C35"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.8465 12.2141L0.0634766 17.9998L4.52102 17.7141H7.38653V15.2141L7.25917 10.0713L6.62238 10.6427L1.8465 12.2141Z" fill="#F89D35"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.22168 12.8574L10.4434 13.0003L9.87032 16.0003L7.38677 15.286L5.22168 12.8574Z" fill="#D87C30"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.22168 12.9287L7.38677 15.2144V17.5001L5.22168 12.9287Z" fill="#EA8D3A"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.38672 15.2852L9.93389 15.9994L10.7618 19.0709L10.1886 19.428L7.38672 17.5709V15.2852Z" fill="#F89D35"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.38639 17.5713L6.87695 21.9999L10.252 19.3571L7.38639 17.5713Z" fill="#EB8F35"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.4434 13L10.7619 19.0715L9.80664 15.9643L10.4434 13Z" fill="#EA8E3A"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M4.45703 17.6428L7.38628 17.5713L6.87684 21.9999L4.45703 17.6428Z" fill="#D87C30"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.46442 23.9283L6.8771 21.9997L4.45729 17.6426L0.0634766 17.9997L1.46442 23.9283Z" fill="#EB8F35"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.0613 7.42871L7.32315 10.0001L5.22168 12.8573L10.4434 13.0716L10.0613 7.42871Z" fill="#E8821E"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.87695 22.0002L10.252 19.3574L9.99729 21.6431V22.9288L7.70484 22.4288L6.87695 22.0002Z" fill="#DFCEC3"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M17.0654 22.0002L13.7541 19.3574L14.0088 21.6431V22.9288L16.3013 22.4288L17.0654 22.0002Z" fill="#DFCEC3"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.04264 14.2852L9.74316 15.9281L7.25962 15.2138L9.04264 14.2852Z" fill="#393939"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.40039 0.0712891L10.0608 7.42837L8.5962 3.42837L1.40039 0.0712891Z" fill="#E88F35"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.40111 0.0712891L0.254883 3.99986L0.891675 8.28557L0.445921 8.57129L1.08271 9.21415L0.573279 9.71415L1.27375 10.4284L0.827996 10.857L1.84686 12.2856L6.62281 10.6427C8.95771 8.54748 10.1039 7.47605 10.0615 7.42843C10.019 7.38081 7.13224 4.92843 1.40111 0.0712891Z" fill="#8E5A30"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M22.0969 12.2141L23.8799 17.9998L19.4223 17.7141H16.5568V15.2141L16.6842 10.0713L17.321 10.6427L22.0969 12.2141Z" fill="#F89D35"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M18.7217 12.8574L13.5 13.0003L14.073 16.0003L16.5566 15.286L18.7217 12.8574Z" fill="#D87C30"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M18.7217 12.9287L16.5566 15.2144V17.5001L18.7217 12.9287Z" fill="#EA8D3A"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.5566 15.2852L14.0095 15.9994L13.1816 19.0709L13.7548 19.428L16.5566 17.5709V15.2852Z" fill="#F89D35"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.557 17.5713L17.0664 21.9999L13.7551 19.4284L16.557 17.5713Z" fill="#EB8F35"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.4999 13L13.1815 19.0715L14.1367 15.9643L13.4999 13Z" fill="#EA8E3A"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M19.4863 17.6428L16.5571 17.5713L17.0665 21.9999L19.4863 17.6428Z" fill="#D87C30"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M22.4789 23.9283L17.0663 21.9997L19.4861 17.6426L23.8799 17.9997L22.4789 23.9283Z" fill="#EB8F35"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.8821 7.42871L16.6202 10.0001L18.7217 12.8573L13.5 13.0716L13.8821 7.42871Z" fill="#E8821E"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M14.9007 14.2852L14.2002 15.9281L16.6837 15.2138L14.9007 14.2852Z" fill="#393939"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M22.543 0.0712891L13.8826 7.42837L15.3472 3.42837L22.543 0.0712891Z" fill="#E88F35"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M22.5423 0.0712891L23.6885 3.99986L23.0517 8.28557L23.4974 8.57129L22.8606 9.21415L23.3701 9.71415L22.6696 10.4284L23.1154 10.857L22.0965 12.2856L17.3206 10.6427C14.9856 8.54748 13.8394 7.47605 13.8819 7.42843C13.9243 7.38081 16.8111 4.92843 22.5423 0.0712891Z" fill="#8E5A30"></path>
          </svg>
          </div>
          <p className="inline pr-2 text-xs font-bold lg:text-sm lg:pr-0">
            <span className="text-black">{info["email"]}</span>
          </p>
        </div>
        {/* <>
          <Image
            src={info["picture"]}
            alt="pp"
            width="75"
            height="75"
          />
        </>
        <>
          <h3 >Name</h3>
          <p >{info["address"]}</p>
        </>
        <>
          <h3 >Email</h3>
          <p >{info["email"]}</p>
        </> */}
      </div>
  );
}
