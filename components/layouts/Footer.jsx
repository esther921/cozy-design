import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row w-full lg:justify-center text-white bg-button font-head font-bold text-5xl h-40">
        <p className="my-auto">🙋 How can we help?</p>
      </div>
      <section className="flex flex-col divide-y-2 divide-logo-color text-button lg:pt-16 px-10">
        <div className="flex lg:justify-between pb-10">
          {/* logo  and links*/}
          <div className="flex gap-16">
            {/* logo */}
            <div className="">
              <Image
                className=""
                height="90"
                width="90"
                src="/Images/logo-blue.svg"
                alt=""
              />
            </div>
            {/* links */}
            <div className="pt-2">
              <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-button text-sm font-head">
                <li className="">
                  <Link href="">About</Link>
                </li>
                <li className="">
                  <Link href="">Services</Link>
                </li>
                <li className="">
                  <Link href="">Work</Link>
                </li>
                <li className="">
                  <Link href="">Blog</Link>
                </li>
                <li className="">
                  <Link href="">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="font-head flex gap-16">
            <div className="flex">
              <div>
                <Image
                  className=""
                  height="30"
                  width="30"
                  src="/Images/emoji.webp"
                  alt=""
                />
              </div>

              <p className="text-pink-700">San Diego Digital Designers</p>
            </div>
            {/* icon */}
            <div className="flex lg:gap-1">
              <div className="">
                <Image
                  className=""
                  height="30"
                  width="30"
                  src="/Images/twitter.webp"
                  alt=""
                />
              </div>
              <div className=" ">
                <Image
                  className=""
                  height="30"
                  width="30"
                  src="/Images/linked.webp"
                  alt=""
                />
              </div>
              <div className=" ">
                <Image
                  className=""
                  height="30"
                  width="30"
                  src="/Images/instagram.webp"
                  alt=""
                />
              </div>
              {/* icon */}

              <div className="space-x-4 ">
                <Link href="">
                  <Image
                    className=""
                    height="30"
                    width="30"
                    src="/Images/play.webp"
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex max-h-[1.9rem] justify-center">
                <Link href="" className="bg-primary rounded-sm p-[0.4rem]">
                  <Image
                    className=""
                    height="15"
                    width="15"
                    src="/Images/clutch.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div className=" ">
                <Link href="">
                  <Image
                    className=""
                    height="30"
                    width="30"
                    src="/Images/email.webp"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* second part of the section */}
        <div className="py-8 flex justify-between">
          <div className="flex gap-8">
            <div className="flex gap-8">
              <div className="">
                <Link href={""} className="flex flex-col gap-1">
                  {" "}
                  <Image
                    src="/Images/BBB Accredited.svg"
                    alt=""
                    height="135"
                    width="135"
                  />
                  <p className="text-slate-700 font-bold">BBB rating: A+</p>
                </Link>
              </div>
              <Image
                className=""
                height="90"
                width="120"
                src="/Images/bod-new.webp"
                alt=""
              />
            </div>

            <div className="">
              <Image
                className=""
                height="220"
                width="220"
                src="/Images/removed-bg.webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-16 pt-6">
            <p className="text-primary text-xs font-head">
              Made with <span className="text-rose-500 text-sm">❤</span>{" "}
              beautiful, sunny San Diego. ©2021
            </p>
            <div className="text-xs font-head flex gap-8">
              <p>Privacy</p>
              <p>Photo credit</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
