import React from "react"
import { Title, Reveal } from "../../../components"
import clsx from "clsx"

const Gallery = ({ width }) => {
    const path = [
        "Rectangle 29.jpg",
        "Group 51.jpg",
        "Group 52.jpg",
        "Group 47.jpg",
        "Group 148.jpg",
    ]
    return (
        <section
            className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[150px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
            <Title
                width={width}
                title={"JOIN THE GLITTERCLOUD FAMILY"}
            />
            <div className=" mt-[80px] px-5 flex justify-around items-center flex-wrap gap-y-8 xs:flex-col sm:flex-col md:flex-col ">
                {path.map((item, index) => (
                    <img
                        key={index}
                        className=" max-w-[18%] xs:max-w-full sm:max-w-full md:max-w-[70%] lg:max-w-[30%] xl:max-w-[30%] 2xl:max-w-[30%] "
                        src={`/images/${item}`}
                        alt=""
                    />
                ))}
            </div>
        </section>
    )
}

const About = ({ width }) => {
    return (
        <>
            <Gallery width={width} />
            <section
                className={clsx(
                    "container flex justify-around items-center gap-x-20 pb-[120px]",
                    width < 1070 && "flex-col gap-y-20 "
                )}
            >
                <div
                    className={clsx(
                        "xl:max-w-[41%] flex justify-center items-center flex-col gap-y-3 lg:max-w-[60%]",
                        width < 770 && "max-w-full "
                    )}
                >
                    <Reveal>
                        <img
                            src="/images/TonyValcarcel.png"
                            alt=""
                        />
                        <div className="  bg-gradient-to-t bgGradient w-full text-center skew-x-[40deg] rounded-[12px]   ">
                            <h2 className="text-[42px] font-extrabold  -skew-x-[40deg] xs:text-[32px] sm:text-[32px] xl:text-[36px] ">
                                TONY VALCARCEL
                            </h2>
                        </div>
                        <p className="text-[34px] text-center mt-3 xs:text-[28px] xl:text-[30px] ">
                            Founder of GlitterCloud
                        </p>
                    </Reveal>
                </div>
                <div className={clsx(" max-w-[55%] ", width < 1070 && "max-w-full")}>
                    <div className="border-b border-[#fff] border-solid pb-8 mb-8 ">
                        <Reveal>
                            <div className="  bg-gradient-to-t bgGradient w-max text-center skew-x-[40deg] rounded-[12px]   ">
                                <h2
                                    className={clsx(
                                        "text-[28px] px-10 py-1 font-semibold  -skew-x-[40deg]",
                                        width < 770 && "mb-10 "
                                    )}
                                >
                                    OUR EXPERIENCE
                                </h2>
                            </div>
                            <div className="flex justify-around items-center gap-6 flex-wrap mt-4 ">
                                {[
                                    "Amazon_logo.svg",
                                    "Twitch-logo.svg",
                                    "Nintendo_logo.svg",
                                    "ea-sport-logo.svg",
                                    "Group 17.svg",
                                ].map((item, index) => (
                                    <img
                                        key={index}
                                        className="xl:max-w-[30%] 2xl:max-w-[37%] "
                                        src={`/images/${item}`}
                                        alt=""
                                    />
                                ))}
                            </div>
                        </Reveal>
                    </div>
                    <div>
                        <Reveal>
                            <div className="  bg-gradient-to-t bgGradient w-max text-center skew-x-[40deg] rounded-[12px]   ">
                                <h2 className="text-[28px] px-10 py-1 font-semibold  -skew-x-[40deg]">
                                    OUR CLIENTS
                                </h2>
                            </div>
                            <div className="flex justify-around items-center gap-6 flex-wrap mt-4  ">
                                {[
                                    "SPARKBALL.png",
                                    "Vector.svg",
                                    "nway.png",
                                    "warped.png",
                                    "sff.png",
                                ].map((item, index) => (
                                    <img
                                        key={index}
                                        className="xl:max-w-[30%] 2xl:max-w-[30%] max-w-[34%] xs:max-w-full "
                                        src={`/images/${item}`}
                                        alt=""
                                    />
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
