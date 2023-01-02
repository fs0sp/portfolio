import React, { useContext } from 'react';

import { projectDetails } from '../../config/config';

import { BsGithub } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import { ThemeContext } from '../../providers/ThemeContext';


function Projects() {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'dark' : ""}>
      <div className='dark:bg-gray-900'>
        <div className='pb-5 pt-10 px-10 max-w-5xl my-0 mx-auto md:pt-20'>
          <div>
            <h2 className='mb-5 text-4xl font-semibold font-roboto text-gray-900 dark:text-gray-300'>Projects.</h2>
            {projectDetails.map((item, index) => {
              return (
                <div key={index} className='mt-20 md:mt-10 flex flex-col md:flex-row gap-5'>
                  <div className='basis-1/3 flex-1'>
                    <img alt='project icon' src={item.image} />
                  </div>
                  <div className='flex flex-col basis-1/3 flex-1'>
                    <h4 className='font-semibold font-roboto text-2xl dark:text-gray-300'>{item.title}</h4>
                    <div className='flex'>
                      {projectDetails[index].tech.map((tech, index2) => {
                        return (
                          <p key={index2} className='p-1 px-2 mr-2 my-2 bg-orange-100 font-roboto rounded-md'>{tech}</p>
                        );
                      })}
                    </div>
                    <p className='font-roboto mb-4 dark:text-gray-400'>{item.desc}</p>
                    <div className='flex gap-3'>
                      <BsGithub className='text-xl cursor-pointer dark:text-gray-300' />
                      <FiLink className='text-xl cursor-pointer dark:text-gray-300' />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;