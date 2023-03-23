import Image from "next/image";
import Link from "next/link";

export default function Info({ info }: any) {
  return (
    <div className="text-black">
        <>
          <Image
            src={info["picture"]}
            alt="pp"
            width="75"
            height="75"
          />
        </>
        <>
          <h3 >Name</h3>
          <p >{info["name"]}</p>
        </>
        <>
          <h3 >Email</h3>
          <p >{info["email"]}</p>
        </>
      </div>
  );
}
