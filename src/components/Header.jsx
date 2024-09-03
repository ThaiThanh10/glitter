import React from "react"

const Header = () => {
    return (
        <header className="container py-7 flex justify-between items-center ">
            <img
                src="/images/logo.svg"
                alt=""
            />
            <ul className="flex justify-around items-center gap-x-10  ">
                <li className="text-[28px] font-medium p-[8px_20px] rounded-[10px] hover:bg-gradient-to-b from-[#A04AF5] to-[#430E56]  ">
                    Home
                </li>
                <li className="text-[28px] font-medium p-[8px_20px] rounded-[10px] hover:bg-gradient-to-b from-[#A04AF5] to-[#430E56]  ">
                    About Us
                </li>
                <li className="text-[28px] font-medium p-[8px_20px] rounded-[10px] hover:bg-gradient-to-b from-[#A04AF5] to-[#430E56]  ">
                    Contact US
                </li>
            </ul>
        </header>
    )
}

export default Header
