import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
const Reveal = ({ children, delay = 0.3 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true
    })
    const mainControls = useAnimation()
    useEffect(() => {

        if (isInView) {
            console.log('🚀isInView---->', isInView);
            mainControls.start("visible")
        }
    }, [isInView])
    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 130,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                    duration: 0.9,
                    delay: delay,
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal
