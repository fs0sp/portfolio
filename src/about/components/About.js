import React, { useContext } from 'react';
import { FaCaretRight } from "react-icons/fa";
import { ThemeContext } from '../../providers/ThemeContext';

function About() {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'dark' : ""}>
      <div className='dark:bg-gray-900 pb-10'>
        <div className='pt-10 px-10 max-w-4xl my-0 mx-auto md:pt-20'>
          <div className='mt-10'>
            <h2 className='text-3xl font-semibold font-roboto text-gray-900 dark:text-gray-300'>Experience</h2>
            <div className='mt-5'>
              <div className='flex items-center'>
                <FaCaretRight className='dark:text-gray-400' />
                <h3 className='font-roboto text-2xl text-gray-800 dark:text-gray-400'>Accenture</h3>
              </div>
              <p className='pl-4 font-roboto mt-2 text-gray-700 dark:text-gray-500'>As a Software engineer at Accenture, I specialize in frontend development using Angular and ReactJS. With a strong background in computer science and a passion for building intuitive and visually appealing user interfaces, I am well-equipped to tackle a wide range of projects and challenges. I thrive in collaborative environments and am always eager to learn new technologies and techniques to improve my skills and better serve my clients. In my current role, I have gained valuable experience working on large-scale projects for clients in a variety of industries, and I am excited to continue growing and contributing as a valuable member of the Accenture team.</p>
            </div>
          </div>
          <div className='mt-10'>
            <h2 className='text-3xl font-semibold font-roboto text-gray-900 dark:text-gray-300'>Education</h2>
            <div className='mt-5'>
              <div className='flex items-center'>
                <FaCaretRight className='dark:text-gray-400' />
                <h3 className='font-roboto text-2xl text-gray-800 dark:text-gray-400'>Btech CSE</h3>
              </div>
              <p className='pl-4 font-roboto mt-2 text-gray-700 dark:text-gray-500'>Completing a Bachelor's degree in Technology in the field of Computer Science has been a challenging and rewarding experience. Over the course of my studies, I have gained a strong foundation in the principles and practices of computer science, including programming languages, data structures, algorithms, and software development methodologies. I have also had the opportunity to apply my knowledge through hands-on projects and internships, which have allowed me to develop valuable technical skills and experience working on real-world problems. I am now well-prepared to enter the workforce as a competent and knowledgeable software engineer, ready to make a meaningful contribution to the field.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;