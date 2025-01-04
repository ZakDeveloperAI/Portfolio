import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { booking, ecommerce, prova } from '@/public/assets'
import { SiNextdotjs } from 'react-icons/si'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Projects = () => {
    return (
        <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
            <SectionTitle title="Projects" titleNo="03" />
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6">
                    <a
                        className="w-full xl:w-1/2 h-auto relative group"
                        href="https://github.com/ZakDeveloperAI/Reservice"
                        target="_blank"
                    >
                        <div>
                            <Image
                                className="w-full h-full object-contain"
                                src={prova}
                                alt="Project Booking"
                            />
                        </div>
                    </a>
                    <div
                        className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
                items-end text-right xl:ml-16 z-10"
                    >
                        <p className="font-titleFont text-textGreen text-sm tracking-wide">
                            Feautured Projects
                        </p>
                        <h3 className="text-2xl font-bold">Reservice</h3>
                        <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                            Reservice is a sleek service booking web app that lets you book
                            anything from barbershops to massage centers in seconds. Built
                            with <span className="text-textGreen">Next.js</span>,{" "}
                            <span className="text-textGreen">React.js</span>, and{" "}
                            <span className="text-textGreen">JavaScript</span>, it leverages{" "}
                            <span className="text-textGreen">GraphQL</span> and a{" "}
                            <span className="text-textGreen">Hygraph database</span> for a
                            seamless experience. It features effortless service discovery,
                            instant booking, secure authentication with{" "}
                            <span className="text-textGreen">Authscope</span>, and a
                            personalized dashboard to manage your bookings and favorites, all
                            in one place.
                        </p>
                        <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
                        md:gap-5 justify-between text-textDark'>
                            <li className='hover:text-textGreen cursor-pointer duration-300'>NextJs</li>
                            <li className='hover:text-textGreen cursor-pointer duration-300'>React</li>
                            <li className='hover:text-textGreen cursor-pointer duration-300'>JavaScript</li>
                            <li className='hover:text-textGreen cursor-pointer duration-300'>GraphQL</li>
                            <li className='hover:text-textGreen cursor-pointer duration-300'>Hygraph</li>
                            <li className='hover:text-textGreen cursor-pointer duration-300'>Vercel</li>
                        </ul>
                        <div className='text-2xl flex gap-4'>
                            <a 
                            className='hover:text-textGreen duration-300'
                            href="https://github.com/ZakDeveloperAI/Reservice"
                            target='_blank'
                            >
                                <TbBrandGithub/>
                            </a>

                            <a 
                            className='hover:text-textGreen duration-300'
                            href="https://github.com/ZakDeveloperAI/Reservice"
                            target='_blank'
                            >
                                <RxOpenInNewWindow/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects