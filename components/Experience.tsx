import React from 'react'
import SectionTitle from './SectionTitle'
import Reservice from './works/Reservice'
import Hevolus from './works/Hevolus';
import Iti from './works/Iti';

const Experience = () => {
    const [workReservice, setWorkReservice] = React.useState(true);
    const [workHevolus, setWorkHevolus] = React.useState(false);
    const [workIti, setWorkIti] = React.useState(false);

    const handleReservice=() => {
        setWorkReservice(true);
        setWorkHevolus(false);
        setWorkIti(false);
    };
    const handleHevolus=() => {
        setWorkReservice(false);
        setWorkHevolus(true);
        setWorkIti(false);
    };
    const handleIti=() => {
        setWorkReservice(false);
        setWorkHevolus(false);
        setWorkIti(true);
    };

    return (
    <section
        id='experience'
        className='max-w-containerXs mx-auto py-10 lgl:py-24 px-4 '
    >
        <SectionTitle title='Experience' titleNo='02' />
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-32 flex flex-col'>
                <li 
                onClick={handleReservice} 
                className={`${
                    workReservice 
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                    } 
                border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm
                cursor-pointer duration-300 px-8 font-medium`}
                >
                    Reservice
                </li>
                <li 
                    onClick={handleHevolus}
                    className={`${
                        workHevolus
                        ? "border-l-textGreen text-textGreen"
                        : "border-l-hoverColor text-textDark"
                        } 
                    border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm
                    cursor-pointer duration-300 px-8 font-medium`}>
                        Microsoft Hevolus
                </li>
                <li  
                onClick={handleIti}
                className={`${
                    workIti
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                    } 
                border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm
                cursor-pointer duration-300 px-8 font-medium`}>
                    ITI
                </li> 
            </ul>
            {workReservice && <Reservice/>}
            {workHevolus && <Hevolus/>}
            {workIti && <Iti/>}
        </div>
    </section>
  )
}

export default Experience