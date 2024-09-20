import React from "react"
import { useWindowSize } from "usehooks-ts"

const Footer = ({ openModal }) => {
    const { width } = useWindowSize()
    return (
        <footer className=" bg-[#180D38] px-3 ">
            <div
                className={`  py-[100px] flex justify-around items-start  ${width < 950 ? "flex-col items-center py-[70px] " : ""
                    } ${width > 980 && "container"}  "`}
            >
                <div className={`"max-w-[35%] ${width < 960 ? "max-w-full " : ""} "`}>
                    <img
                        src="/images/logo.svg"
                        alt=""
                    />
                    <ul className="flex mt-6 mb-20 xs:my-[50px] sm:my-[50px] md:my-[50px] ">
                        <ul className="list-disc list-inside">
                            <li>Go to Market the Right Way</li>
                            <li>Our Solutions</li>
                            <li>How we work</li>
                            <li>The Fractional CMO</li>
                        </ul>
                        <ul className="list-disc list-inside border-l border-[#fff] border-solid pl-5 ml-5 ">
                            <li>The Advisor</li>
                            <li>Sample Timeline</li>
                            <li>Compensation</li>
                            <li>Join the GlitterCloud Family</li>
                        </ul>
                    </ul>
                    <p className={`${width < 970 ? "text-center " : ""}`} >© 2024 GlitterCloud. All rights Reserved.</p>
                </div>
                <div className={` max-w-[40%] w-[80%] flex justify-center items-center flex-col ${width < 960 ? "max-w-full " : ""} "`}>
                    <h2
                        className={`text-[44px] font-black text-center ${width < 960 ? " mt-10 " : ""
                            } "`}
                    >
                        CONTACT US
                    </h2>
                    <div className={`" mt-[20px] mb-[52px] flex items-center gap-x-4 justify-center ${width < 970 ? "mb-0 " : ""} "`}>
                        <button className="rounded-2xl skew-x-[8deg] bg-gradient-to-b from-[#752292] to-[#B978D0]  px-3 py-2 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                            <img
                                className="-skew-x-[8deg] w-[58px] aspect-[1] "
                                src="/images/X.svg"
                                alt=""
                            />
                        </button>
                        <button className="rounded-2xl skew-x-[8deg] bg-gradient-to-b from-[#752292] to-[#B978D0]  px-3 py-2 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                            <img
                                className="-skew-x-[8deg] w-[58px] aspect-[1] "
                                src="/images/telegram.svg"
                                alt=""
                            />
                        </button>
                        <button className="rounded-2xl skew-x-[8deg] bg-gradient-to-b from-[#752292] to-[#B978D0]  px-3 py-2 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                            <img
                                className="-skew-x-[8deg] w-[58px] aspect-[1] "
                                src="/images/mail.svg"
                                alt=""
                            />
                        </button>
                        <button className="rounded-2xl skew-x-[8deg] bg-gradient-to-b from-[#752292] to-[#B978D0]  px-3 py-2 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                            <img
                                className="-skew-x-[8deg] w-[58px] aspect-[1] "
                                src="/images/phone.svg"
                                alt=""
                            />
                        </button>
                    </div>
                    <div className={`" w-[80%] grid place-items-center relative  lg:w-[100%] xl:w-full  ${width < 970 ? "hidden " : ""} "`}>
                        {" "}
                        <input
                            className="text-[20px] rounded-[10px] glass py-[25px] pl-9 text-[#fff] w-full mt-4   "
                            placeholder="Enter Your Email..."
                            type="text"
                        />{" "}
                        <div className="absolute  xs:mt-4 xs:w-full sm:mt-6 sm:mx-auto sm:right-0 right-[2%] top-[26%] flex justify-center items-center  w-max">
                            <button
                                onClick={openModal}
                                className=" text-[28px]  font-medium p-[8px_20px] rounded-[10px] cursor-pointer bg-gradient-to-b from-[#A04AF5] to-[#430E56] hover:scale-105 transition-all duration-200 ease "
                            >
                                Contact US
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
