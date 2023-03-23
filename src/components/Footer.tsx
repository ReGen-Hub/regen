import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container px-4 pb-8 mx-auto transition-all duration-300 sm:px-6">
      <div className="items-center text-gray-600 md:flex md:justify-between">
        <div className="flex space-x-6 md:pb-auto lg:justify-self-start md:-order-1">
          <p className="text-xs lg:text-15 text-zee-black-v-600">
            {"copyright" + " @"}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
