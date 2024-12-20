"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin"

const RecentProjects = () => {
return (
    <div className="py-20" id="projects">
        <h1 className="heading">
            A small selection of{" "}
        <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
        <div
            className="lg:min-h-[24rem] h-[16rem] flex items-center justify-center border border-white/[0.1] rounded-3xl p-5 sm:w-96 w-[80vw]"
            key={item.id} 
            style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba (12,14,35,1) 100%)",
            }}
            >
            <div>
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 rounded-t-2xl" >
                {/* <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl border border-white/[0.1]"
                    // style={{ backgroundColor: "#13162D" }}
                    style={{
                        background: "rgb(4,7,29)",
                        backgroundColor:
                            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba (12,14,35,1) 100%)",
                    }}
                >
                <img src="/bg.png" alt="bgimg" />
                </div> */}
                <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute"
                />
            </div>

            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 ps-5">
                {item.title}
            </h1>

            <p
                className="lg:text-xl lg:font-normal font-light text-sm px-5 line-clamp-2"
                style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                }}
            >
                {item.des}
            </p>

            <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                    {/* {item.iconLists.map((icon, index) => (
                    <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                        }}
                    >
                    <img src={icon} alt="icon5" className="p-2" />
                    </div>
                ))} */}
                </div>

                <div className="flex justify-center items-center">
                    {/* <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" /> */}
                </div>
            </div>
            </div>
        </div>
        ))}
    </div>
    </div>
);
};

export default RecentProjects;