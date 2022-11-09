import Image from "next/image";
export default function Client() {
  return (
    <>
      <div className="flex flex-col items-center gap-10 font-head w-full max-w-6xl pl-24">
        {/* title */}
        <div className="font-semibold text-2xl flex w-full justify-center text-primary md:text-[3.8125rem] ">
          ❤️ from our clients
        </div>
        {/* line under the title */}
        <div className="w-10 rounded-md h-1 bg-logo-color"></div>
        {/* Four cards */}
        <div className=" flex flex-col gap-6  md:items-center md:px-20">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="rounded-tl-[80%] rounded-tr-[80%] rounded-br-[0%] bg-noise rounded-bl-[100%] md:self-end bg-slate-800 md:max-h-[36rem] flex flex-col gap-8 items-end pr-[2.5rem] pl-[3.75rem] py-16 ">
              <div className="flex w-full justify-center ">
                <Image
                  className="rounded-3xl ring-4 ring-white max-w-[5rem] max-h-[5rem]"
                  height="100"
                  width="100"
                  src="/Images/girl-smile.webp"
                  alt=""
                />
              </div>
              <h1 className="text-button mix-blend-exclusion text-[1.25rem] flex w-full justify-end">
                “One of the top design professionals…”
              </h1>
              <p className="text-lg leading-loose text-blend-head mix-blend-exclusion max-w-xl">
                I connect with hundreds of talented folks on a regular basis,
                and I can say with complete confidence that Lee is one of the
                best UX designers in Aquent/Vitamin T&apos;s global network.
              </p>
              <h1 className="text-xs font-bold font-Geomanist uppercase text-blend-head mix-blend-exclusion tracking-[0.25rem]">
                SUSIE POLLASKY
              </h1>
              <p className="text-xs font-Geomanist opacity-70 text-blend-head mix-blend-exclusion justify-self-end w-[14rem]">
                Now: Leadership Recruiting @ Product Design at Facebook
              </p>
            </div>
            <div className=" bg-main rounded-tl-[100%] rounded-tr-[100%] bg-noise  max-h-[100%] md:max-w-[50%] rounded-br-[50%] rounded-bl-[0%] flex flex-col items-start pr-[2.5rem] pl-[3.75rem] gap-6 md:pt-24 md:pb-12">
              <div className="flex w-full justify-center">
                <Image
                  className="rounded-3xl ring-4 ring-white max-w-[5rem] max-h-[5rem]"
                  height="100"
                  width="100"
                  src="/Images/man-in-v-neck.webp"
                  alt=""
                />
              </div>
              <h1 className="text-button mix-blend-exclusion text-[1.25rem]">
                “They&apos;re a very well-rounded organization…”
              </h1>
              <p className="text-lg leading-loose text-blend-head mix-blend-exclusion max-w-lg">
                Cost per conversion and all of those metrics have dropped
                significantly. We used to pay an average of $100 per lead that
                converts… now we have that down to about $20. Sessions and
                contacts have also gone up astronomically, at least threefold.
                Organic search and social media referrals have all continued to
                skyrocket. We&apos;re really pleased.
              </p>
              <h1 className="text-xs font-bold font-Geomanist uppercase text-blend-head mix-blend-exclusion tracking-[0.25rem]">
                MARTIN SPRITZER
              </h1>
              <p className="text-xs font-Geomanist opacity-70 text-blend-head mix-blend-exclusion">
                General Manager @ iQuoteXpress
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 pl-16">
            <div className="bg-noise md:self-start bg-secondary rounded-tl-[100%] rounded-tr-[0%] rounded-br-[60%] rounded-bl-[60%] flex flex-col items-end pr-[2.5rem] pl-[3.75rem] gap-6 py-12 ">
              <div className="flex w-full justify-center ">
                <Image
                  className="rounded-3xl ring-4 ring-white max-w-[5rem] max-h-[5rem]"
                  height="100"
                  width="100"
                  src="/Images/man-in-trees.webp"
                  alt=""
                />
              </div>
              <h1 className="text-text text-[1.25rem] pt-2">
                “They&apos;re just good people.”
              </h1>
              <p className="text-lg leading-loose text-blend-head ">
                They were a pleasure to work with and I&apos;m really happy with
                the results. They pretty much nailed it.
              </p>
              <h1 className="text-xs font-bold font-Geomanist uppercase text-blend-head pr-12">
                ERIC WEISS
              </h1>
              <p className="text-xs font-Geomanist opacity-70 text-blend-head pr-12">
                Founder @ Full Cycle Product Development
              </p>
            </div>
            <div className="  bg-noise bg-button rounded-tl-[0%] rounded-tr-[100%] rounded-br-[60%] md:max-w-[50%] rounded-bl-[60%]  max-h-[100%] flex flex-col items-start pr-[2.5rem] pl-[3.75rem] lg:px-16 gap-6 pt-12 pb-10">
              <div className="flex w-full justify-center ">
                <Image
                  className="rounded-3xl ring-4 ring-white max-w-[5rem] max-h-[5rem]"
                  height="100"
                  width="100"
                  src="/Images/man-in-black.webp"
                  alt=""
                />
              </div>
              <h1 className="text-text text-[1.25rem]">
                “The project was successful”
              </h1>
              <p className="text-lg leading-loose text-blend-head">
                They strive to come up with good design, and they focus on all
                the right things. The quality of their work is high, and all the
                deliverables are very well-organized and professional.
              </p>
              <h1 className="text-xs font-bold font-Geomanist uppercase text-blend-head">
                MICHAEL WEISFELD
              </h1>
              <p className="text-xs font-Geomanist opacity-70 text-blend-head ">
                Director of Digital Marketing @ National Funding
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}
