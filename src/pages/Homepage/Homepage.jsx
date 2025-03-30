import React from "react"
import {
    Banner,
    Market,
    Solutions,
    HowWeWork,
    Fractional,
    Advisor,
    Compensation,
    Timeline,
    About,
} from "./sections"

const Homepage = ({ openModal, width }) => {
    return (
        <div>
            <Banner openModal={openModal} />
            <Market width={width} />
            <Solutions width={width} />
            <HowWeWork width={width} />
            <Fractional width={width} />
            <Advisor width={width} />
            <Timeline width={width} />
            <Compensation width={width} />
            <About width={width} />
        </div>
    )
}

export default Homepage
