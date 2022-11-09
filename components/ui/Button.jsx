import Link from "next/link"
export default function Button({text, styles}) {
    return (
      <>
          <div className={"flex-wrap flex bg-background bg-button py-[0.625rem] text-[1.125rem] md:py-[1.875rem] px-10 text-blend-head font-black lg:font-extrabold md:text-xl rounded-xl " + styles}>
          <Link href={""}><button className="flex justify-center leading-none py-2 tracking-widest lg:tracking-wider">{text}</button>
          </Link>
          
        </div>
        
      </>
    )
  }