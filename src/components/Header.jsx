import React from "react"
import { useWindowSize } from "usehooks-ts"

const Header = ({ openModal }) => {
    const { width } = useWindowSize()
    return (
        <header className="container py-7 flex justify-between items-center ">
            <img
                src="/images/logo.svg"
                alt=""
            />
            <ul
                className={`flex justify-around items-center gap-x-10 ${width < 700 ? "hidden" : ""
                    }`}
            >
                <li
                    className={`text-[28px] font-medium p-[8px_20px] rounded-[10px] cursor-pointer ${width < 1100 ? "hidden" : ""
                        } "`}
                >
                    Home
                </li>
                <li
                    className={`text-[28px] font-medium p-[8px_20px] rounded-[10px] cursor-pointer ${width < 1100 ? "hidden" : ""
                        } "`}
                >
                    <a target="_blank" href="/GlitterCloud Capabilities.pdf">About Us</a>

                </li>
                <li
                    onClick={openModal}
                    className="text-[28px] font-medium p-[8px_20px] rounded-[10px] cursor-pointer bg-gradient-to-b from-[#A04AF5] to-[#430E56] hover:scale-105 transition-all duration-200 ease "
                >
                    Contact US
                </li>
            </ul>
        </header>
    )
}

export default Header
