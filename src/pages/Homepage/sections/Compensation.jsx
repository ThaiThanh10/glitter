import React from "react"
import { Title, Reveal } from "../../../components"

const Compensation = ({ width }) => {
    return (
        <section
            className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[150px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >

            <Title width={width} title={"COMPENSATION"} />
            <div
                className={`" container mt-[80px] flex justify-around gap-y-9  ${width < 1200 && "flex-col items-center"
                    } ${width < 600 && "max-w-full"} "`}
            >
                <div className={`" max-w-[45%] ${width < 1200 && "max-w-full"} "`}>
                    <Reveal>
                        <div className="flex items-center gap-x-3 ">
                            <h3 className="text-[40px] font-extrabold text-[#BF4AF6]">FLEXIBLE</h3>
                            <span className="block w-full h-[3px] bg-[#A04AF6] "></span>
                        </div>
                        <p className="text-[30px]">
                            We accept crypto and fiat, and work with teams to meet them where
                            they’re financially. If you’re raising a round, we’ll defer payment
                            until you have money
                        </p>
                        <img
                            className="my-3"
                            src="/images/Group 59 (1).png"
                            alt=""
                        />
                        <div className="flex items-center gap-x-3 ">
                            <h3 className="text-[40px] font-extrabold text-[#BF4AF6]">CUSTOM</h3>
                            <span className="block w-full h-[3px] bg-[#A04AF6] "></span>
                        </div>
                        <p className="text-[30px]">
                            We accept Token and Equity grants as mechanisms to align incentives with
                            the teams we work with so that your success is our success
                        </p>
                    </Reveal>
                </div>
                <div
                    className={`" max-w-[45%]  ${width < 1200 && width > 600 && "max-w-full"} ${width < 600 && "max-w-full overflow-hidden "
                        } "`}
                >
                    <Reveal>
                        <div className="flex bg-[#752EAC] h-max w-max rounded-[30px]">
                            <video
                                className="border-[16px] border-[#752EAC] rounded-[30px_0_0_30px] max-h-[420px] xs:w-full "
                                width={width < 600 ? "320" : "420"}
                                height="420"
                                autoPlay
                                muted
                                loop
                            >
                                <source
                                    src="/images/pacman-namco.gif.mp4"
                                    type="video/mp4"
                                />
                            </video>
                            <div className="flex justify-between items-center flex-col max-h-[420px] -ml-[1px] bg-[#752EAC] py-4 pl-2 pr-6 rounded-[0_30px_30px_0] xs:pl-0 ">
                                <img
                                    src="/images/btnTv.png"
                                    alt=""
                                />
                                <img
                                    src="/images/Group 67.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default Compensation
