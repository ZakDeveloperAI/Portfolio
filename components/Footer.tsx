import React from 'react'
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiWhatsapp } from 'react-icons/si';
import { BiPhoneCall } from "react-icons/bi";
const Footer = () => {
    return (
        <div className='mt-10'>   
        <div className=' inline-flex  items-center justify-center w-full 
        py-6 gap-4'>
            <a href="https://github.com/ZakDeveloperAI" target='_blank'>
                <span className='w-10 h-10 text-xl  bg-hoverColor rounded-full inline-flex 
                        items-center justify-center hover:text-textGreen cursor-pointer
                        hover:-translate-y-2 transition-all duration-300'>
                    <TbBrandGithub size={20} />
                </span>
            </a>
            <a href="https://github.com/ZakDeveloperAI" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex 
                        items-center justify-center hover:text-textGreen cursor-pointer
                        hover:-translate-y-2 transition-all duration-300'>
                    <SlSocialLinkedin size={20} />
                </span>
            </a>
            <a href="https://wa.me/+393517929011" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex 
                        items-center justify-center hover:text-textGreen cursor-pointer
                        hover:-translate-y-2 transition-all duration-300'>
                    <SiWhatsapp size={20} />
                </span>
            </a>
            <a href="tel:+393517929011">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex 
                        items-center justify-center hover:text-textGreen cursor-pointer
                        hover:-translate-y-2 transition-all duration-300'>
                    <BiPhoneCall size={20} />
                </span>
            </a>
            
        </div>
        <div className='flex flex-col  items-center justify-center w-full 
        py-6 gap-4 text-xs'>
                <h2>Designed & Developed by Belfakhir Zakaria</h2>
                <p className='text-textGreen'>belfakhirzakaria@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer