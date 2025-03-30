import clsx from "clsx"
import { Title, Reveal } from "../../../components"

const HowWeWork = ({ width }) => {
    return (
        <section
            className={`  overflow-hidden object-contain bg-[right_top_1rem] pb-[110px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
            <Title
                width={width}
                title={"How We Work"}
            />
            <div className="container my-[50px] flex justify-around xs:flex-col sm:flex-col lg:flex-col  xl:max-w-full 2xl:max-w-full ">
                <div
                    className={clsx(" max-w-[45%] px-3 xl:max-w-[47%]", {
                        "max-w-full": width < 1180,
                    })}
                >
                    <Reveal>
                        <div className="  bg-gradient-to-t bgGradient w-full block -skew-x-[40deg] xs:-skew-x-[28deg] rounded-[12px] my-5  ">
                            <h2 className="text-[28px] font-bold text-center  py-4 skew-x-[40deg] xs:skew-x-[28deg]">
                                Fractional CMO
                            </h2>
                        </div>
                        <div className="flex items-center gap-x-6 xs:flex-col xs:gap-y-5 sm:flex-col sm:gap-y-5 ">
                            <img
                                src="/images/Ellipse 11.png"
                                alt=""
                            />
                            <p className="text-[24px]">
                                Get our whole team and bring GlitterCloud in as a Fractional CMO
                            </p>
                        </div>
                        <div className="flex items-center gap-x-6 xs:flex-col xs:gap-y-5 sm:flex-col sm:gap-y-5 my-7 ">
                            <img
                                src="/images/Ellipse 12.png"
                                alt=""
                            />
                            <p className="text-[24px]">
                                Full audit of how your Marketing engine aligns with Company OKRs
                            </p>
                        </div>
                        <div className="flex items-center gap-x-6 xs:flex-col xs:gap-y-5 sm:flex-col sm:gap-y-5 ">
                            <img
                                src="/images/Ellipse 13.png"
                                alt=""
                            />
                            <p className="text-[24px]">
                                Goal Review, Resource Audit, Hiring Support, Strategy Docs, etc - We
                                help build your engine
                            </p>
                        </div>
                    </Reveal>
                </div>
                <div
                    className={clsx(
                        " max-w-[45%] px-3 xl:max-w-[47%]",
                        width < 1180 && "max-w-full"
                    )}
                >
                    <Reveal>
                        <div className="  bg-gradient-to-t bgGradient w-full  -skew-x-[40deg] xs:-inset-1 xs:-skew-x-[28deg] rounded-[12px] my-5  ">
                            <h2 className="text-[28px] font-bold text-center  py-4 skew-x-[40deg] xs:skew-x-[28deg] ">
                                Advisory
                            </h2>
                        </div>
                        <div className="flex items-center gap-x-6 xs:flex-col xs:gap-y-5 sm:flex-col sm:gap-y-5 ">
                            <img
                                src="/images/Ellipse 14.png"
                                alt=""
                            />
                            <p className="text-[24px]">
                                Bring our brain to your team via bi-weekly strategy calls, dedicated
                                communication channel and async review of key docs
                            </p>
                        </div>
                        <div className="flex items-center gap-x-6 xs:flex-col xs:gap-y-5 sm:flex-col sm:gap-y-5 my-7 ">
                            <img
                                src="/images/Ellipse 15.png"
                                alt=""
                            />
                            <p className="text-[24px]">
                                Vote of confidence via our network. Introductions at conferences to
                                get you connected to the right people
                            </p>
                        </div>
                        <div className="flex items-center gap-x-6 xs:flex-col xs:gap-y-5 sm:flex-col sm:gap-y-5 ">
                            <img
                                src="/images/Ellipse 16.png"
                                alt=""
                            />
                            <p className="text-[24px]">
                                Introductions to the right vendors to help you avoid the pitfalls of
                                prior projects
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
export default HowWeWork
