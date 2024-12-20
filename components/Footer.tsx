"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";

const Footer = () => {
return (
    <footer className="w-full pb-20 mb-[100px] md:mb-5" id="contact">
    <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
            Ready to Build a Thriving Community That Truly <span className="text-purple">Impacts </span> Your Audience? 
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
            Let’s collaborate to create a safe, engaging, and meaningful online space that connects your audience like never before.
        </p>
        <div className="grid grid-cols-2 gap-5">
        <a href="https://tally.so/r/3jGv21">
        <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
        />
        </a>
        <a href="https://protonicgod.tiiny.site/" target="_blank" className="mt-10">
        <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] px-8 py-3 bg-purple rounded-md text-[#15191F] font-light transition duration-200 ease-linear">
            My Resume
        </button>
        </a>
        </div>
    </div>
    <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center">
            <Image src='/logo.svg' alt="Logo" height={50} width={50} />&nbsp;&nbsp;&nbsp;
        <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024
        </p>
        </div>

        <div className="flex items-center md:gap-3 gap-6">
        {socialMedia.map((info) => (
            <div
                key={info.id}
                onClick={() => window.open(info.link, "_blank")}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
                <img src={info.img} alt="icons" width={20} height={20} />
            </div>
        ))}
        </div>
    </div>
    </footer>
);
};

export default Footer;