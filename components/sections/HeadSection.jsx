import Image from "next/image"
import Button from "../ui/Button"

export default function HeadSection() {
 return (
    <>
    <section className=" h-full w-full bg-gradient-to-r from-right via-primary to-primary overflow-hidden flex flex-col gap-16">
        
        <div className="lg:flex flex flex-col gap-16 lg:relative md:pl-8">
         <div className=" pl-10 sm:pl-20 lg:pl-8 flex flex-col gap-12 pt-[7.5rem] lg:pt-[5.8rem]">
            <h1 className="text-6xl md:text-[5rem] lg:text-[5.625rem] pr-8 lg:pr-0 font-head font-extrabold lg:tracking-tighter leading-[4rem] md:leading-[6rem] md:max-w-[40rem] lg:max-w-lg text-clip bg-clip-text text-transparent bg-background bg-logo-color lg:leading-[6rem]">Your design team for the cost of a salary.</h1>
            <p className="text-clip bg-clip-text text-transparent bg-background lg:max-w-xl bg-blend-head text-[1.875rem] md:pr-2 mix-blend-exclusion font-semibold md:max-w-[33.5rem] md:text-[2.4375rem] font-head">Full-service design support that growing B2B and non-profit organizations need. Are you strained because you should have a design team but you don&apos;t?</p>
        </div>
        <div className="flex w-full justify-center md:justify-start px-10 md:pl-16 lg:hidden flex-wrap"><Button text={"SEE HOW WE WORK & WHAT WE CAN DO"} /></div>
    
        <div className="w-[80%] md:max-w-[85%] max-h-[85%] lg:max-w-[55%] lg:absolute lg:top-20 lg:mt-[13.75rem] lg:-right-24 md:flex md:w-full mx-auto lg:mx-0">
            <Image src="/Images/drawing.webp" alt="" height="0" width="1200"/>
        </div>
        
    </div>
    <div className="w-full justify-start px-10 hidden lg:flex"><Button text={"SEE HOW WE WORK & WHAT WE CAN DO"} /></div>
    
    </section>
    
        

    </>
 )   
}