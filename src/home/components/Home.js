import React, { useContext } from 'react';

import { HiArrowLongRight } from "react-icons/hi2";
import { BsGithub } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { RedirectToAboutPage, redirectToBlog, redirectToGithub, redirectToLinkedin, redirectToResume } from '../../utils/utils';
import { ThemeContext } from '../../providers/ThemeContext';

function Home() {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'dark' : ""}>
      <div className='h-[calc(100vh-6rem)] dark:bg-gray-900'>
        <div className='pt-20 h-[400px] flex justify-center items-center dark:bg-gray-900'>
          <div className='pt-52 px-10 max-w-4xl my-0 mx-auto md:pt-0'>
            <h2 className=' font-roboto font-bold text-3xl mb-5 dark:text-gray-200 md:text-6xl'>I'm Shivam Pokhriyal</h2>
            <h4 className='font-roboto leading-8 text-gray-800 mb-5 dark:text-gray-300'>Frontend developer and Javascript engineer, Fitness enthusiast, avid gamer. On a mission to level up in all aspects of life. Follow along as I share my journey towards a healthy lifestyle, dive into the latest gaming trends, and showcase my coding projects. Let's conquer the world, one pixel at a time.</h4>
            <h4 className='font-roboto text-gray-800 mb-5 leading-10 dark:text-gray-300'>Working with my hands to make magic happen on the internet. View my <span className='font-roboto text-sm rounded-lg py-2 px-2 bg-orange-50 cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-50'>Projects</span>, <span className='font-roboto text-sm rounded-lg py-2 px-2 bg-orange-50 cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-50'>Articles</span>,<span onClick={redirectToResume} className='font-roboto text-sm rounded-lg py-2 px-2 bg-orange-50 cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-50'>Resumé</span>, or send me an email at <span className='font-roboto text-sm rounded-lg py-2 px-2 bg-orange-50 cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-50'>shivampokhriyal@rocketmail</span>.</h4>
            <div onClick={RedirectToAboutPage} className='flex items-center gap-5 cursor-pointer mb-5'>
              <p className='text-gray-800 font-roboto leading-8 dark:text-gray-300'>See More About Me </p>
              <span><HiArrowLongRight className='dark:text-gray-300' /></span>
            </div>
            <div className='flex gap-5'>
              <BsGithub onClick={redirectToGithub} className='cursor-pointer text-gray-700 dark:text-gray-300' />
              <FaBloggerB onClick={redirectToBlog} className='cursor-pointer text-gray-700 dark:text-gray-300' />
              <FaLinkedinIn onClick={redirectToLinkedin} className='cursor-pointer text-gray-700 dark:text-gray-300' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;