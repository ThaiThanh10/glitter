import { Title, Reveal } from "../../../components"

const Fractional = ({ width }) => {
    return (
        <section
            className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[130px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
            <Title
                width={width}
                title={"Fractional CMO"}
            />

            <div
                className={`" px-7 my-[50px] flex justify-center gap-x-8 flex-wrap ${width > 1300 && "flex-nowrap"
                    } ${width < 1300 && width > 800 && "grid grid-cols-2 items-start"}
                     ${width < 1300 && "flex-col gap-8 items-start"} "`}
            >
                <div className=" max-w-[20%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full  ">
                    <Reveal>
                        <div className="  bg-gradient-to-t bgGradient text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                            <h2 className="text-[30px] font-bold  skew-x-[15deg]">
                                Review Goals & Resources
                            </h2>
                        </div>
                        <ul className="mt-4 list-disc list-inside ">
                            <li className="text-[20px] my-3 ">Existing Goals</li>
                            <li className="text-[20px] my-3 ">Internal & External Resources</li>
                            <li className="text-[20px] my-3 ">Product Roadmap</li>
                            <li className="text-[20px] my-3 ">Investor Expectations</li>
                            <li className="text-[20px] my-3 ">Leadership & Product Alignment</li>
                        </ul>
                    </Reveal>
                </div>
                <img
                    className={`" mt-10 h-[32px] ${width < 1500 && "hidden"} "`}
                    src="/images/Group 118.png"
                    alt=""
                />
                <div className=" max-w-[20%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full ">
                    <Reveal>
                        <div className="  bg-gradient-to-t bgGradient text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                            <h2 className="text-[30px] font-bold  skew-x-[15deg]">Reset Goals</h2>
                        </div>
                        <ul className="mt-4 list-disc list-inside ">
                            <li className="text-[20px] my-3 ">
                                New Goals in context of Project Reality
                            </li>
                            <li className="text-[20px] my-3 ">
                                Existing Resources + Identified Gaps
                            </li>
                            <li className="text-[20px] my-3 ">
                                Investor Expectations vs Product Roadmap
                            </li>
                        </ul>
                    </Reveal>
                </div>
                <img
                    className={`" mt-10 h-[32px] ${width < 1500 && "hidden"} "`}
                    src="/images/Group 118.png"
                    alt=""
                />
                <div className=" max-w-[20%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full ">
                    <Reveal>
                        <div className="  bg-gradient-to-t bgGradient text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                            <h2 className="text-[30px] font-bold  skew-x-[15deg]">
                                Strategy & Implementation
                            </h2>
                        </div>
                        <ul className="mt-4 list-disc list-inside ">
                            <li className="text-[20px] my-3 ">Strategy Documentation</li>
                            <li className="text-[20px] my-3 ">
                                Timeline for Early Access, TGE, Full Release, Monetization
                            </li>
                            <li className="text-[20px] my-3 ">Resource Planing</li>
                            <li className="text-[20px] my-3 ">
                                Internal Processes for Vendor + Partnership Management
                            </li>
                        </ul>
                    </Reveal>
                </div>
                <img
                    className={`" mt-10 h-[32px] ${width < 1500 && "hidden"} "`}
                    src="/images/Group 118.png"
                    alt=""
                />

                <div className=" max-w-[20%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full ">
                    <Reveal>
                        <div className="  bg-gradient-to-t bgGradient text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                            <h2 className="text-[30px] font-bold  skew-x-[15deg]">
                                Stay the Course
                            </h2>
                        </div>
                        <ul className="mt-4 list-disc list-inside ">
                            <li className="text-20px] my-3 ">Bi-Weekly Meetings</li>
                            <li className="text-20px] my-3 ">
                                Consistent Review of Upcoming Planning
                            </li>
                            <li className="text-20px] my-3 ">
                                Dedicated Channels for Brainstorming
                            </li>
                            <li className="text-20px] my-3 ">
                                Continued network support and vendor/partner introductions
                            </li>
                        </ul>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default Fractional
