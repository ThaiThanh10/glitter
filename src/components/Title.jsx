import React from "react"

const Title = ({ width, title }) => {
    return (
        <div
            className={`" flexCenter overflow-hidden  relative w-screen ${width > 1600 && "stripes"
                } "`}
        >
            <div className=" container mx-0 bg-gradient-to-t bgGradient w-full block skew-x-[40deg] xs:skew-x-[20deg]  ">
                <h2 className="text-[36px] font-extrabold pl-10 pt-3 pb-1 -skew-x-[40deg] xs:-skew-x-[20deg] xs:pl-[26px] ">
                    {title}
                </h2>
            </div>
        </div>
    )
}

export default Title
