import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from "framer-motion"
import { div } from 'motion/react-client';
const Archive = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className='max-w-contentContainer mx-auto px-4 py-24'>
            <div className='w-full flex flex-col items-center'>
                <h2 className='text-3xl font-titleFont font-semibold'>
                    Other Noteworthy Projects
                </h2>
                <p className='text-sm font-titleFont text-textGreen'>
                    view the archive
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10
        lgl:px-10'>
                <ArchiveCard
                    title="Project 1"
                    des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsa blanditiis omnis! 
                    Omnis quam a adipisci eveniet distinctio enim ut quia reprehenderit fuga, dolorem."
                    listItem={["Nextjs", " ReactsJs", "GraphQL"]}
                    link="www.google.com"
                />
                <ArchiveCard
                    title="Project 2"
                    des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsa blanditiis omnis! 
                    Omnis quam a adipisci eveniet distinctio enim ut quia reprehenderit fuga, dolorem."
                    listItem={["Nextjs", " ReactsJs", "GraphQL"]}
                    link="www.google.com"
                />
                <ArchiveCard
                    title="Project 3"
                    des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsa blanditiis omnis! 
                    Omnis quam a adipisci eveniet distinctio enim ut quia reprehenderit fuga, dolorem."
                    listItem={["Nextjs", " ReactsJs", "GraphQL"]}
                    link="www.google.com"
                />
                <ArchiveCard
                    title="Project 4"
                    des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsa blanditiis omnis! 
                    Omnis quam a adipisci eveniet distinctio enim ut quia reprehenderit fuga, dolorem."
                    listItem={["Nextjs", " ReactsJs", "GraphQL"]}
                    link="www.google.com"
                />
                <ArchiveCard
                    title="Project 5"
                    des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsa blanditiis omnis! 
                    Omnis quam a adipisci eveniet distinctio enim ut quia reprehenderit fuga, dolorem."
                    listItem={["Nextjs", " ReactsJs", "GraphQL"]}
                    link="www.google.com"
                />
                <ArchiveCard
                    title="Project 6"
                    des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsa blanditiis omnis! 
                    Omnis quam a adipisci eveniet distinctio enim ut quia reprehenderit fuga, dolorem."
                    listItem={["Nextjs", " ReactsJs", "GraphQL"]}
                    link="www.google.com"
                />
                {showMore && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <ArchiveCard
                                title="Project 7"
                                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsa blanditiis omnis! 
                                    Omnis quam a adipisci eveniet distinctio enim ut quia reprehenderit fuga, dolorem."
                                listItem={["Nextjs", " ReactsJs", "GraphQL"]}
                                link="www.google.com"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <ArchiveCard
                                title="Project 8"
                                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsa blanditiis omnis! 
                                    Omnis quam a adipisci eveniet distinctio enim ut quia reprehenderit fuga, dolorem."
                                listItem={["Nextjs", " ReactsJs", "GraphQL"]}
                                link="www.google.com"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <ArchiveCard
                                title="Project 9"
                                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsa blanditiis omnis! 
                                    Omnis quam a adipisci eveniet distinctio enim ut quia reprehenderit fuga, dolorem."
                                listItem={["Nextjs", " ReactsJs", "GraphQL"]}
                                link="www.google.com"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <ArchiveCard
                                title="Project 10"
                                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsa blanditiis omnis! 
                                    Omnis quam a adipisci eveniet distinctio enim ut quia reprehenderit fuga, dolorem."
                                listItem={["Nextjs", " ReactsJs", "GraphQL"]}
                                link="www.google.com"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <ArchiveCard
                                title="Project 11"
                                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsa blanditiis omnis! 
                                    Omnis quam a adipisci eveniet distinctio enim ut quia reprehenderit fuga, dolorem."
                                listItem={["Nextjs", " ReactsJs", "GraphQL"]}
                                link="www.google.com"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <ArchiveCard
                                title="Project 12"
                                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsa blanditiis omnis! 
                                    Omnis quam a adipisci eveniet distinctio enim ut quia reprehenderit fuga, dolorem."
                                listItem={["Nextjs", " ReactsJs", "GraphQL"]}
                                link="www.google.com"
                            />
                        </motion.div>
                    </>


                )
                }
            </div>
            <div className='mt-12 flex items-center justify-center'>
                {
                    showMore ? /* show less */
                    <button
                        onClick={() => setShowMore(false)}
                        className='w-36 h-12 rounded-md text-textGreen text-[13px] border
                    border-textGreen hover:bg-hoverColor duration-300'
                    >
                        Show Less
                    </button>
                    :    /* show more */
                    <button
                        onClick={() => setShowMore(true)}
                        className='w-36 h-12 rounded-md text-textGreen text-[13px] border
                    border-textGreen hover:bg-hoverColor duration-300'
                    >
                        Show More
                    </button>
                }
            </div>
        </div>
    )
}

export default Archive