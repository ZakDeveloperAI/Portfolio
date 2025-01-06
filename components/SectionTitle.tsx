import React from 'react'
interface Props{
    title:string;
    titleNo:string;
}

const SectionTitle = ({title, titleNo}: Props) => {
  return (
    <h2 className='font-titleFont text-3xl font-semibold flex items-center'>
        <span className='text-2xl md:text-xl text-textGreen mr-2 mt-1'>{titleNo}.</span>{" "}
        {title}
        <span className=' md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6'></span>
    </h2>

  )
}

export default SectionTitle