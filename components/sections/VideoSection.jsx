import Image from "next/image";
export default function VideoSection() {
  return (
    <>
      {/* <video width="320" height="240" loop autoPlay>
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
      </video> */}
      <header class="relative flex justify-center  mb-12 overflow-hidden font-head h-screen">
        <div class="relative z-30 p-5 text-white w-full h-full bg-black bg-opacity-70 grid grid-cols-4 px-40 gap-0 py-40">
          <div className="">
            <div className="pt-16">
              <Image
                className=""
                height="110"
                width="110"
                src="/Images/lockup.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex-col items-center w-full col-span-3 space-y-10">
            <h1 className="font-bold text-5xl">
              <span className="italic">Psst…</span> <br /> are you a designer?
            </h1>
            <p className="text-xl">
              Consider joining our{" "}
              <span className="font-bold text-pink-700">
                San Diego Design Designers
              </span>{" "}
              group. More than 700 people, we meet online via Slack and in
              person at social events around the city. It’s a great opportunity
              to share ideas, get inspired, find support, and celebrate great
              design.
            </p>
          </div>
        </div>
        <div className="absolute z-10 w-full">
          <video
            width=""
            height=""
            className=" lg:h-full"
            loop
            autoPlay
            muted
            src="/Images/video.mp4"
            type="video/mp4"
          />
        </div>

        {/* <source />
        </video> */}
      </header>
    </>
  );
}
