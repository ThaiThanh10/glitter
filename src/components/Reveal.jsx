import React from "react"
import { motion } from "framer-motion"
const Reveal = ({ children }) => {
    return (
        <div>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 100,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.7,
                    // delay: 0.2,
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal
