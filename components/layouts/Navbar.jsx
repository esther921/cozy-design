import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <section className="bg-gradient-to-r absolute from-primary to-right flex justify-between lg:px-16 py-6 z-50 w-full">
        <div className=" mx-auto lg:mx-0 flex gap-12 md:gap-16 justify-center">
          <Image src="/Images/logo.svg" alt="" height="100" width="100"/>
          <div className="space-y-1 lg:hidden pt-6 ">
            <p className="border-text border-2 w-7 rounded-md"></p>
            <p className="border-text border-2 w-7 rounded-md"></p>
            <p className="border-text border-2 w-7 rounded-md"></p>
          </div>
        </div>
        <div className="">
          <ul className="lg:flex  text-text font-head font-semibold text-[1.5625rem] hidden pt-4 gap-8">
            <li className="hover:text-logo-color transition hover:ease-linear delay-200  hover:-translate-y-2 duration-500">
              <Link href="">Get Cozy</Link>
            </li>
            <li className="hover:text-logo-color transition hover:ease-linear delay-200  hover:-translate-y-2 duration-500">
              <Link href="">What we do</Link>
            </li>
            <li className="hover:text-logo-color transition hover:ease-linear delay-200  hover:-translate-y-2 duration-500">
              <Link href="">Our work</Link>
            </li>
            <li className="hover:text-logo-color transition hover:ease-linear delay-200  hover:-translate-y-2 duration-500">
              <Link href="">The blog</Link>
            </li>
            <li className="hover:text-logo-color transition hover:ease-linear delay-200  hover:-translate-y-2 duration-500">
              <Link href="">Say hi</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
