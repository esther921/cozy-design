import Link from "next/link";
import Image from "next/image";
export default function LogoGridder({ text }) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 lg:gap-16 lg:absolute lg:max-w-xl lg:w-fit items-center pt-12 md:pt-0">
        <div className="lg:pt-24 flex flex-col md:gap-8 lg:px-0 gap-4 lg:gap-6 md:pt-20">
          <Link className="max-w-sm" href={""}>
            {" "}
            <Image
              src="/Images/Clutch Global 2021-p-500.webp"
              alt=""
              height="0"
              width="100"
            />
          </Link>

          <Link className="max-w-sm" href={""}>
            {" "}
            <Image
              src="/Images/ca_san-diego_user-experience_2020_transparent.webp"
              alt=""
              height="0"
              width="100"
            />
          </Link>

          <Link className="max-w-sm" href={""}>
            {" "}
            <Image
              src="/Images/SuperbCompanies Leader Award 2021 Digital Marketing.webp"
              alt=""
              height="0"
              width="100"
            />
          </Link>

          <Link className="max-w-sm" href={""}>
            {" "}
            <Image
              src="/Images/Best-Web-Design-Companies-Badge.webp"
              alt=""
              height="0"
              width="100"
            />
          </Link>
        </div>

        <div className="pt-12 flex flex-col lg:gap-6 lg:pl-0 gap-8 md:pr-12 lg:pr-0 md:gap-8">
          <Link href={""} className="flex flex-col gap-2">
            {" "}
            <Image
              src="/Images/BBB Accredited.svg"
              alt=""
              height="0"
              width="100"
            />
            <p className="text-primary">BBB rating: A+</p>
          </Link>

          <Link className="max-w-sm" href={""}>
            {" "}
            <Image
              src="/Images/Web-Design-Services-San-Diego-California.webp"
              alt=""
              height="0"
              width="100"
            />
          </Link>
          <Link className="max-w-sm" href={""}>
            {" "}
            <Image
              src="/Images/verified-agency-vista-badge.webp"
              alt=""
              height="0"
              width="100"
            />
          </Link>
          <Link className="max-w-sm" href={""}>
            {" "}
            <Image src="/Images/new-badge.webp" alt="" height="0" width="100" />
          </Link>
          <Link className="max-w-sm" href={""}>
            {" "}
            <Image
              src="/Images/Design-Rush-Accredited-Badge.webp"
              alt=""
              height="0"
              width="100"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
