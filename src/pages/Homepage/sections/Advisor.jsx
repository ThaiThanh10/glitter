import { Title, Reveal } from "../../../components"

const Advisor = ({ width }) => {
    return (
        <section
            className={`overflow-hidden object-contain bg-[right_top_1rem] pb-[130px] bg-auto bg-no-repeat ${`bg-[url("/images/bar-cyber.png")]`} `}
        >
            <Title
                width={width}
                title={"THE ADVISOR"}
            />

            <div
                className={`"  my-[50px] flex justify-evenly flex-wrap gap-10  "`}
            >
                <div className=" max-w-[30%] xs:max-w-full sm:max-w-full  lg:max-w-[50%] xl:max-w-[75%] ">
                    <Reveal>
                        <div className="   bg-gradient-to-t bgGradient xs:py-3 sm:py-4 text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                            <h2 className="text-[30px] font-bold   skew-x-[15deg]">BRAIN</h2>
                        </div>
                        <ul className="list-disc list-inside ml-5 -mt-5 pl-2 pt-6 border-l-8 border-l-[#7E34BC] border-solid ">
                            <li className="text-[20px] my-3 ">Regular Calls</li>
                            <li className="text-[20px] my-3 ">Dedicated Communication Channels</li>
                            <li className="text-[20px] my-3 ">Async Feedback on Strategy</li>
                        </ul>
                    </Reveal>
                </div>

                <div className=" max-w-[30%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-[50%] xl:max-w-[75%] ">
                    <Reveal>
                        <div className="  bg-gradient-to-t bgGradient xs:py-3 sm:py-4 text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                            <h2 className="text-[30px] font-bold   skew-x-[15deg]">NETWORK</h2>
                        </div>
                        <ul className="ml-5 -mt-5 pl-2 pt-6 border-l-8 border-l-[#7E34BC] border-solid list-disc list-inside ">
                            <li className="text-[20px] my-3 ">Conference support</li>
                            <li className="text-[20px] my-3 ">Vendor Introductions</li>
                            <li className="text-[20px] my-3 ">Alumni Network of GC Projects</li>
                        </ul>
                    </Reveal>
                </div>
                <div className=" max-w-[30%] xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-[50%] xl:max-w-[75%] ">
                    <Reveal>
                        <div className="  bg-gradient-to-t bgGradient xs:py-3 sm:py-4 text-center w-full px-7 py-5 -skew-x-[15deg] rounded-[12px]  ">
                            <h2 className="text-[30px] font-bold   skew-x-[15deg]">
                                LIFETIME SUPPORT
                            </h2>
                        </div>
                        <ul className="ml-5 -mt-5 pl-2 pt-6 border-l-8 border-l-[#7E34BC] border-solid list-disc list-inside ">
                            <li className="text-[20px] my-3 py-3 ">Fundraising Support</li>
                            <li className="text-[20px] my-3 py-2 ">Your success is our success</li>
                        </ul>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
export default Advisor