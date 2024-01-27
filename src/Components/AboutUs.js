import React from 'react'
import LEETCODE_LOGO from "../assets/LeetCode_Logo.png"
import { EMAIL_ID, GITHUB_URL, LEETCODE_URL, LINKEDIN_URL } from '../constants'
const AboutUs = () => {
  return (
    <div className='py-3 border-t-2 '>

      <h3 className='flex justify-center'><a href={"mailto:" + EMAIL_ID}><i className="fa fa-envelope fa-2x text-gray-600 m-2"></i></a> <a href={LINKEDIN_URL}><i className="fa fa-linkedin-square fa-2x text-blue-700 m-2"></i></a> <a href={GITHUB_URL}><i className="fa fa-github fa-2x m-2"></i></a><a href={LEETCODE_URL}><img src={LEETCODE_LOGO} alt="leetcode" className='h-8 m-2 bg-black rounded-lg text-white' /></a></h3>
      <h2 className='mb-2 text-gray-600 w-full mx-auto'>Made with <i className="fa fa-heart text-red-500"></i> <span className='font-semibold'>by Ritik Goyal</span></h2>

    </div>
  )
}

export default AboutUs