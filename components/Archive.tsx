import React from 'react'
import ArchiveCard from './ArchiveCard'

const Archive = () => {
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
        </div>
    </div>
  )
}

export default Archive