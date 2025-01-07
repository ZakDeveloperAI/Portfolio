import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { FaDatabase, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import { SiJavascript, SiTensorflow } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";

const Abouthome = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 lgl:gap-8 "
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        {/* Contenitore immagine */}
        <div className="w-full lgl:w-1/3 h-80 relative group sm:order-1">
          {/* Bordo */}
          <div
            className="hidden lgl:inline-flex w-full h-full border-2 border-textGreen
            rounded-md absolute top-0 left-0 group-hover:-translate-x-2 
            group-hover:-translate-y-2 transition-transform duration-300 z-0"
          ></div>
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg z-10 max-md:mx-auto">
            <Image
              className="rounded-lg h-full object-cover bg-white sm:h-[300px] sm:w-[290px] lg:h-[320px] lg:w-[320px] max-lg:mx-auto "
              src="/assets/images/ZakCVphoto (1).png"
              alt="profileImg"
              width={500}
              height={500}
            />
            {/* Overlay */}
            <div
              className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20
              rounded-md top-0 left-0 group-hover:bg-transparent duration-300"
            ></div>
          </div>
        </div>

        {/* Descrizione */}
        <div
          className="w-full lgl:w-2/3 text-base text-textDark font-medium flex
        flex-col gap-4 mdl:text-base"
        >
          <p>
            Hello! My name is Belfakhir Zakaria, and I enjoy creating projects
            that bring ideas to life through technology. I am currently pursuing
            a degree in <span className="text-textGreen">Software and AI Engineering</span>, where I focus on building a
            strong foundation in <span className="text-textGreen">Software development and machine learning.</span>
            <br />
            <br />
            My interest in machine learning has grown as I’ve explored how
            data-driven algorithms can solve complex problems. I’ve worked on
            projects that apply AI principles to real-world scenarios, deepening
            my understanding of both the theoretical and practical aspects of
            the field. Recently, I’ve also been exploring{" "}
            <span className="text-textGreen">quantum computing</span>,
            combining my curiosity for emerging technologies with my background
            in AI and software engineering.
            <br />
            <br />I’m excited to continue learning, building, and contributing
            to projects that blend innovation with practicality.
          </p>
          <br />
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="max-w-[450px]  text-sm font-titleFont grid grid-cols-2 gap-2 mt-6 max-lg:mx-auto max-lg:gap-x-40 max-md:gap-x-20">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiJavascript />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaReact />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaNodeJs />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <RiNextjsFill />
              </span>
              Next Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <RiTailwindCssFill />
              </span>
              TailWind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <TbBrandCSharp />
              </span>
              C#
            </li>

            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiTensorflow />
              </span>
              TensorFlow V2
            </li>

            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaPython />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaDatabase />
              </span>
              SQL Database
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
             Machine Learning
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Abouthome;
