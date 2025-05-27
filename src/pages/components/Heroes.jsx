import React from 'react';
import "../../styles/main.css";

const Heroes = () => {
  return (
    <div className='flex flex-wrap w-full '>

      <div className='flex flex-wrap flex-col justify-center w-1/2 '>
        <h1 className='typing-text'>Hi I'm shweta.</h1>
        <p className='mt-5 text-wrap'>My name is shweta. I am 2nd year computer engineer student from coep tech university pune.
             i am enthusiastic about learning new technologies. I am enthusiastic to learn more about 
             FOSS & linux kernel distibutions. I am aspiring web developer who recently i startted new 
             position as web & app cord in mindspark'24 which is a national level technical fest. </p>
        <div className='mt-10'>
            <ul className='mt-4'>
                <li className='inline-block mx-2'><a href="https://github.com/shwetaj-05"><img className='w-13 h-13   ' src='assets/GithubIcon.png' /></a></li>
                <li className='inline-block mx-2'><a href="https://www.linkedin.com/in/shweta-jadhav-837820284/"><img className='w-13 h-13' src='assets/LinkedinIcon.jpeg' /></a></li>
            </ul>
        </div>
      </div>

      <div className='flex justify-center items-center w-1/2'>
        <img className='h-100 w-80 items-center border-4 rounded-2xl border-amber-50' src="/assets/photo.jpeg" alt="" />
      </div>

    </div>
  )
}

export default Heroes
