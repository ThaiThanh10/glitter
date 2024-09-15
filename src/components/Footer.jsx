import React from "react"

const Footer = () => {
    return (
        <footer className=" bg-[#180D38] ">
            <div className="container py-[100px] flex justify-around items-start  ">
                <div className="max-w-[35%]">
                    <img
                        src="/images/logo.svg"
                        alt=""
                    />
                    <ul className="flex mt-6 mb-20 ">
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
                    <p>© 2024 GlitterCloud. All rights Reserved.</p>
                </div>
                <div className="max-w-[40%] w-[80%] ">
                    <h2 className="text-[44px] font-black">CONTACT US</h2>
                    <div className="mt-[20px] mb-[52px] flex items-center gap-x-4 ">
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
                    <div>
                        <input
                            className="text-[16px] rounded-[10px]  glass py-[15px] pl-4 text-[#fff] w-[75%] "
                            placeholder="Enter Your Email..."
                            type="text"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
