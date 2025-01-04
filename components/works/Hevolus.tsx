import { motion } from 'motion/react'
import React from 'react'
import { MdOutlinePlayArrow } from 'react-icons/md'

const Hevolus = () => {
    return (
    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full"
        >
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                AR/VR Unity Developer{" "}
                <span className="text-textGreen tracking-wide">@Microsoft Hevolus</span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">
                Jan 2022 - Present
            </p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <MdOutlinePlayArrow />
                    </span>
                    Designed, developed, and managed Reservice, a full-stack service
                    booking web application, utilizing Next.js with React, Hygraph with
                    GraphQL, and Tailwind CSS for styling.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <MdOutlinePlayArrow />
                    </span>
                    Delivered robust, scalable production code while overseeing the
                    project timeline, team coordination, and resource management.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <MdOutlinePlayArrow />
                    </span>
                    Collaborated with designers and project stakeholders to align business
                    requirements with technical implementation and ensure a seamless user
                    experience.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <MdOutlinePlayArrow />
                    </span>
                    Led the architecture, development, and management process, ensuring
                    technical decisions supported the project’s goals and user needs.
                </li>
            </ul>
        </motion.div>
    )
}

export default Hevolus