import React from "react"
import { Reveal } from "../../../components"

const Banner = ({ openModal }) => {
    return (
        <section className="bgBanner flex justify-center items-center px-3 flex-col pb-[10%] xs:pt-[10%] ">
            <Reveal>
                <img
                    src="/images/Group 12.png"
                    alt=""
                    width={1000}
                    height={500}
                />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-[38px] text-center font-medium xs:text-[28px] sm:text-[32px] md:text-[34px] ">
                        Comprehensive Web3 GTM Solutions
                    </h2>
                    <div className="w-[50%] relative xs:w-full sm:w-full lg:w-[70%] ">
                        {" "}
                        <input
                            className="text-[20px] rounded-[10px] glass py-[25px] pl-9 text-[#fff] w-full mt-4 xs:py-4 "
                            placeholder="Enter Your Email..."
                            type="text"
                        />{" "}
                        <div className="absolute xs:relative  xs:mt-4 xs:w-full   right-[2%] top-[26%] flex justify-center items-center  w-max">
                            <button
                                onClick={openModal}
                                className="text-[28px]  font-medium p-[8px_20px] rounded-[10px] cursor-pointer bg-gradient-to-b from-[#A04AF5] to-[#430E56] hover:scale-105 transition-all duration-200 ease "
                            >
                                Contact US
                            </button>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default Banner
