import { useState } from "react"
import { Title, Reveal } from "../../../components"
import clsx from "clsx"

const Solutions = ({ width }) => {
    const [current, setCurrent] = useState({
        img: "/images/Rectangle 49.png",
        desc: ["Planning for Success", "Token Launch Strategy", "Resource Planning"],
    })
    const data = [
        {
            btn: "Strategic Planning",
            data: {
                img: "/images/Rectangle 49.png",
                desc: ["Planning for Success", "Token Launch Strategy", "Resource Planning"],
            },
        },
        {
            btn: "Reputation & Community Building",
            data: {
                img: "/images/reputation.png",
                desc: ["Demand Generation", "Community Retention"],
            },
        },
        {
            btn: "Partnerships & Networking",
            data: {
                img: "/images/Rectangle 47.png",
                desc: ["Partner Introductions", "Vendor Introductions"],
            },
        },
        {
            btn: "Execution & Growth",
            data: {
                img: "/images/Rectangle 48.png",
                desc: ["Marketing & Campaign Structure", "Building a Team"],
            },
        },
    ]
    return (
        <section
            className={clsx(
                "overflow-hidden object-contain bg-[left_top_1rem] pb-[120px] bg-auto bg-no-repeat",
                `bg-[url("/images/bar-cyber.png")`
            )}
        >
            <Title
                width={width}
                title={"OUR SOLUTIONS"}
            />
            <div
                className={clsx(
                    "container my-[50px] flex items-center justify-around px-3 gap-x-5",
                    { "flex-col gap-10": width < 1400 }
                )}
            >
                <div className="max-w-[40%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full  ">
                    <Reveal>
                        <div
                            className={clsx(
                                { "grid grid-cols-2": width < 1400 && width > 1000 },
                                "gap-x-9"
                            )}
                        >
                            {data.map((item, i) => (
                                <div
                                    key={i}
                                    onClick={() => setCurrent(item.data)}
                                    className=" cursor-pointer bg-gradient-to-t bgGradient w-full block -skew-x-[20deg] xs:-skew-x-[10deg] px-3 rounded-[12px] my-6  "
                                >
                                    <h2 className="text-[28px] font-bold text-center  py-4 skew-x-[20deg] xs:skew-x-[10deg] ">
                                        {item.btn}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
                <div
                    className={clsx(
                        "max-w-[55%]  xs:max-w-full w-full sm:max-w-full  lg:max-w-full ",
                        { "max-w-[80%]": width < 1400 && width > 1024 }
                    )}
                >
                    <Reveal>
                        <div
                            className={`" flexCenter gap-x-8 rounded-[22px]  bg-gradient-to-b from-[#655AAC] to-[#383066] p-4 ${width < 1024 ? "skew-x-0" : "-skew-x-[10deg]"
                                } ${width < 800 && " flex-col "} "`}
                        >
                            <div className="max-w-[30%] overflow-hidden  grid place-items-center aspect-[0.6] bg-gradient-to-b from-[#4495AE] to-[#103D80] bg-center bg-no-repeat rounded-[20px] xs:max-w-full sm:max-w-full md:max-w-[50%] lg:max-w-[50%]   ">
                                <img
                                    className={`${width < 1024 ? "skew-x-0" : "skew-x-[10deg]"}  `}
                                    src={current.img}
                                    alt=""
                                />{" "}
                            </div>
                            <div className="  w-full py-10  ">
                                {current.desc.map((item, i) => (
                                    <div
                                        key={i}
                                        className=" text-center my-5  bg-gradient-to-b from-[#444] to-[#222] w-full block -skew-x-[20deg]  rounded-[12px]   "
                                    >
                                        <p
                                            className={` text-[26px] font-extrabold  py-3  ${width < 1024 ? "skew-x-[20deg]" : "skew-x-[28deg]"
                                                } `}
                                        >
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
export default Solutions
