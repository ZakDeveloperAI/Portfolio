import { logo } from '@/public/assets';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { motion } from "framer-motion";
import { div } from 'motion/react-client';
import { MdOutlineClose } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';
import { SiWhatsapp } from 'react-icons/si';
import { SlSocialLinkedin } from 'react-icons/sl';
import { TbBrandGithub } from 'react-icons/tb';

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  };

  function handleClick(e:any) {
    if(e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }

  return (
    <div className='w-full  h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor 
    px-4'>
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center 
        justify-between'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Image className='w-14' src={logo} alt="logo" />
        </motion.div>

        <div className='hidden mdl:inline-flex items-center gap-7'>
          <ul className='flex text-[13px] gap-7'>
            <Link href="#home"
              onClick={handleScroll}
              className='flex items-center gap-1 font-medium text-textDark
              hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>Home</motion.li>
            </Link>

            <Link href="#about"
              onClick={handleScroll}
              className='flex items-center gap-1 font-medium text-textDark
              hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className='text-textGreen'>01.{" "}</span>
                About
              </motion.li>
            </Link>

            <Link href="#experience"
              onClick={handleScroll}
              className='flex items-center gap-1 font-medium text-textDark
              hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className='text-textGreen'>02.{" "}</span>
                Experience
              </motion.li>
            </Link>

            <Link href="#projects"
              onClick={handleScroll}
              className='flex items-center gap-1 font-medium text-textDark
              hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className='text-textGreen'>03.{" "}</span>
                Project
              </motion.li>
            </Link>

            <Link href="#contact"
              onClick={handleScroll}
              className='flex items-center gap-1 font-medium text-textDark
              hover:text-textGreen cursor-pointer duration-300 nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className='text-textGreen'>04.{" "}</span>
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/zak_resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen
                hover:bg-hoverColor duration-300'
            >
              Curriculum
            </motion.button>
          </a>
        </div>
        {/* Burger Icon */}
        <div onClick={() => setShowMenu(true)} className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen
          cursor-pointer overflow-hidden group'>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform 
            group-hover:translate-x-2 transition-all ease-in-out duration-300'>
          </span>

          <span className='w-full h-[2px] bg-textGreen inline-flex transform 
            translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'>
          </span>

          <span className='w-full h-[2px] bg-textGreen inline-flex transform 
            translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'>
          </span>
        </div>
        {
          showMenu && (
            <div ref={ref}
              onClick={handleClick}
              className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black 
                bg-opacity-50 flex flex-col items-end'
            >
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
                className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240]
                  flex flex-col items-center px-4 py-20 relative'
              >
                <MdOutlineClose
                  onClick={() => setShowMenu(false)}
                  className='text-3xl text-textGreen 
                  cursor-pointer hover:text-red-500 absolute top-4 right-4'
                />
                <div>
                  <ul className='flex flex-col text-base gap-7 items-center '>
                    <Link href="#home"
                      onClick={handleScroll}
                      className='flex items-center gap-1 font-medium text-textDark
                  hover:text-textGreen cursor-pointer duration-300 nav-link'>
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.1,
                          ease: "easeIn",
                        }}
                      >
                        Home
                      </motion.li>
                    </Link>

                    <Link href="#about"
                      onClick={handleScroll}
                      className='flex items-center gap-1 font-medium text-textDark
                  hover:text-textGreen cursor-pointer duration-300 nav-link'>
                      <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: 0.3 }}
                      >
                        <span className='text-textGreen'>01.{" "}</span>
                        About
                      </motion.li>
                    </Link>

                    <Link href="#experience"
                      onClick={handleScroll}
                      className='flex items-center gap-1 font-medium text-textDark
                  hover:text-textGreen cursor-pointer duration-300 nav-link'>
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.2,
                          ease: "easeIn",
                        }}
                      >
                        <span className='text-textGreen'>02.{" "}</span>
                        Experience
                      </motion.li>
                    </Link>

                    <Link href="#projects"
                      onClick={handleScroll}
                      className='flex items-center gap-1 font-medium text-textDark
              hover:text-textGreen cursor-pointer duration-300 nav-link'>
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.3,
                          ease: "easeIn",
                        }}
                      >
                        <span className='text-textGreen'>03.{" "}</span>
                        Project
                      </motion.li>
                    </Link>

                    <Link href="#contact"
                      onClick={handleScroll}
                      className='flex items-center gap-1 font-medium text-textDark
              hover:text-textGreen cursor-pointer duration-300 nav-link'>
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.4,
                          ease: "easeIn",
                        }}
                      >
                        <span className='text-textGreen'>04.{" "}</span>
                        Contact
                      </motion.li>
                    </Link>
                    <a href="/assets/zak_resume.pdf" target="_blank">
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen
                          hover:bg-hoverColor duration-300 ml-2'
                      >
                        Curriculum
                      </motion.button>
                    </a>
                  </ul>
                  
                  <div className='flex mt-9 gap-4 '>
                    <motion.a
                      initial={{y:20, opacity: 0 }}
                      animate={{y:0, opacity: 1 }}
                      transition={{ delay: 1,ease:"easeIn" }} 
                      href="https://github.com/ZakDeveloperAI" 
                      target='_blank'
                    >
                      <span className='w-10 h-10 text-xl  bg-hoverColor rounded-full inline-flex 
                                  items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:-translate-y-2 transition-all duration-300'>
                        <TbBrandGithub size={20} />
                      </span>
                    </motion.a>
                    <motion.a
                      initial={{y:20, opacity: 0 }}
                      animate={{y:0, opacity: 1 }}
                      transition={{ delay: 1,ease:"easeIn" }}
                      href="https://github.com/ZakDeveloperAI" 
                      target='_blank'
                    >
                      <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex 
                                  items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialLinkedin size={20} />
                      </span>
                    </motion.a>
                    <motion.a
                      initial={{y:20, opacity: 0 }}
                      animate={{y:0, opacity: 1 }}
                      transition={{ delay: 1,ease:"easeIn" }}
                      href="https://wa.me/+393517929011" 
                      target='_blank'
                    >
                      <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex 
                                  items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:-translate-y-2 transition-all duration-300'>
                        <SiWhatsapp size={20} />
                      </span>
                    </motion.a>
                    <motion.a
                      initial={{y:20, opacity: 0 }}
                      animate={{y:0, opacity: 1 }}
                      transition={{ delay: 1,ease:"easeIn" }}
                      href="tel:+393517929011"
                      target='_blank'
                    >
                      <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex 
                                  items-center justify-center hover:text-textGreen cursor-pointer
                                  hover:-translate-y-2 transition-all duration-300'>
                        <BiPhoneCall size={20} />
                      </span>
                    </motion.a>
                  </div>
                </div>
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, ease: "easeIn" }}
                  href="mailto:belfakhirzakaria@gmail.com"
                  target='_blank'
                  className='text-sm w-72 tracking-widest text-textGreen text-center mt-6 cursor-pointer'
                >
                  <p>belfakhirzakaria@gmail.com</p>
                </motion.a>
              </motion.div>
            </div>
          )
        }
      </div>
    </div>
  )
};

export default Navbar