import LogoGridder from "../LogoGridder";

export default function GetCozy() {
  return (
    <>
      <section className=" font-head text-primary bt-4 bg-noise bg-opacity-10 h-fit lg:grid lg:grid-cols-3 md:pl-32 md:pr-12 flex flex-col pt-24 md:pt-48 w-full pb-24">
        <div className="flex flex-col gap-10 col-span-2">
          <h1 className="font-Geomanist text-3xl font-bold pl-10">🌴🐻🇺🇸</h1>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-7xl font-semibold inline-block pl-10">
                Get Cozy{" "}
              </h1>
              <p className="text-button font-normal lg:max-w-md text-4xl leading-relaxed pl-12">
                Design & digital marketing in{" "}
                <span className="inline-block">San Diego</span>, California
              </p>
            </div>
            <p className="md:pr-24 md:text-[1.375] flex flex-col gap-4 px-12 h-fit">
              <span className="md:text-2xl leading-relaxed text-xl  md:font-normal">
                We&apos;re an award-winning design shop based in South Park,San
                Diego. We efficiently combine the best parts of user experience
                (UX) with creative design and execution to create effective
                collateral that connects with the human beings who interact with
                them. 🤯
              </span>

              <span className="md:text-2xl leading-relaxed text-xl font-normal">
                No epic quests for inspiration. Just pragmatic collaboration and
                efficient results from big-agency graduates with decades of
                experience.
              </span>
            </p>
          </div>
        </div>
        <div className="">
          <LogoGridder />
        </div>
      </section>
    </>
  );
}
