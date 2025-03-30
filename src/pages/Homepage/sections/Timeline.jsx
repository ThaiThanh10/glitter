import { Carousel } from "antd"
import { Title, Reveal } from "../../../components"
import clsx from "clsx"

const Timeline = ({ width }) => {
    return (
        <section
            className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[150px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
            <Title
                width={width}
                title={"SAMPLE TIMELINE"}
            />
            <div className="container text-[34px] text-center my-8 ">
                <h3 className=" xs:text-left xs:text-[32px] sm:text-left md:text-left  ">
                    Optimization, Performance Tracking & Reporting
                </h3>
                <Reveal delay={0.5}>
                    <Carousel
                        draggable={true}
                        infinite={false}
                    >
                        <div>
                            <div>
                                <h4 className="text-[60px] text-[#F19BFF] font-extrabold flex items-center gap-x-10 pl-[120px] xs:flex-col xs:pl-2 xs:text-[48px] sm:pl-3   lg:pl-0 xl:pl-10 ">
                                    WEEK 1-2
                                    <img
                                        className={clsx(
                                            "max-w-[70%]  h-[25px] xl:max-w-[60%] 2xl:max-w-[60%]",
                                            { "w-0 h-0 mt-4 ": width < 1024 },
                                        )}
                                        src="/images/Line 25.png"
                                        alt=""
                                    />
                                </h4>
                                <div
                                    className={`" flex items-center gap-x-10 bg-gradient-to-tl from-[#000000] to-[#4A0D7A] rounded-[20px_0_0_20px] ${width < 990 &&
                                        "flex-col justify-center gap-y-10 pt-4 rounded-[20px] max-w-full "
                                        } "`}
                                >
                                    <img
                                        className="rounded-[20px_0_0_20px] xs:max-w-[80%] xs:rounded-[20px] sm:max-w-[80%] sm:rounded-[20px] md:max-w-[90%] "
                                        src="/images/Rectangle 42.png"
                                        alt=""
                                    />
                                    <div className="text-left px-5 pb-7 ">
                                        <p className="text-[#4AE1F6] text-[36px] xs:text-[28px] oxanium">
                                            Strategy Development & Planning Deliverables
                                        </p>
                                        <ul className="list-disc list-inside text-[#4AE1F6] text-[36px] xs:text-[28px] ">
                                            <li className="text-white text-[24px] xs:text-[20px] mt-4 ">
                                                GTM Plan and Framework
                                            </li>
                                            <li className="text-white text-[24px] xs:text-[20px] ">
                                                Resource & Budget Requirements
                                            </li>
                                            <li className="text-white text-[24px] xs:text-[20px] ">
                                                Identify Potential Pitfalls
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mx-4">
                                <h4 className="text-[60px] text-[#9BDBFF] font-extrabold flex items-center gap-x-10 pl-[120px] xs:pl-2 xs:text-[42px] sm:pl-3 lg:pl-0 xl:pl-10 ">
                                    WEEK 3-4
                                    <img
                                        className={`" max-w-[70% h-[25px] xl:max-w-[60%] 2xl:max-w-[60%] ${width < 1024 ? "w-0" : "w-[70%]"
                                            } "`}
                                        src="/images/Line 25.png"
                                        alt=""
                                    />
                                </h4>
                                <div
                                    className={`" flex items-center gap-x-10 bg-gradient-to-tl from-[#000000] to-[#4A0D7A] rounded-[20px_0_0_20px] ${width < 990 &&
                                        "flex-col justify-center gap-y-10 pt-4 rounded-[20px] "
                                        } "`}
                                >
                                    <img
                                        className="rounded-[20px_0_0_20px] xs:max-w-[80%] xs:rounded-[20px] sm:max-w-[80%] sm:rounded-[20px] "
                                        src="/images/Rectangle 43.png"
                                        alt=""
                                    />
                                    <div className="text-left px-5 pb-7 ">
                                        <p className="text-[#4AE1F6] text-[36px] xs:text-[28px]">
                                            Vendor Evaluation & Selection
                                        </p>
                                        <ul className="list-disc list-inside text-[#4AE1F6] text-[36px] xs:text-[28px] oxanium ">
                                            <li className="text-white text-[24px] xs:text-[20px] mt-4 ">
                                                Resources Requirements Aligned
                                            </li>
                                            <li className="text-white text-[24px] xs:text-[20px] ">
                                                Creative Pipeline Established
                                            </li>
                                            <li className="text-white text-[24px] xs:text-[20px] ">
                                                Existing Resource Audit Complered
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4 className="text-[60px] text-[#9BDBFF] font-extrabold text-center mb-2 xs:text-[42px]  ">
                                    MONTHS 2-3
                                </h4>
                                <div
                                    className={`" flex items-center gap-x-10 bg-gradient-to-tl from-[#000000] to-[#4A0D7A] rounded-[20px_0_0_20px] ${width < 990 &&
                                        "flex-col justify-center gap-y-10 pt-4 rounded-[20px] "
                                        } "`}
                                >
                                    <img
                                        className="rounded-[20px_0_0_20px] xs:max-w-[80%] xs:rounded-[20px] sm:max-w-[80%] sm:rounded-[20px] "
                                        src="/images/Rectangle 44.png"
                                        alt=""
                                    />
                                    <div className="text-left px-5 pb-7 ">
                                        <p className="text-[#4AE1F6] text-[36px] xs:text-[28px] oxanium ">
                                            {" "}
                                            Campaign Setup, Influencer Recruitment & Community
                                            Building
                                        </p>
                                        <ul className="list-disc list-inside text-[#4AE1F6] text-[36px] xs:text-[28px] ">
                                            <li className="text-white text-[24px] xs:text-[20px] mt-4 ">
                                                Core team process established
                                            </li>
                                            <li className="text-white text-[24px] xs:text-[20px] ">
                                                Implementation of GTM
                                            </li>
                                            <li className="text-white text-[24px] xs:text-[20px] ">
                                                Completion of team and GC transitions out
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </Reveal>
            </div>
        </section>
    )
}
export default Timeline
