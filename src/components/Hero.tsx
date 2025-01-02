import React from 'react';
import Navbar from  './Navbar';

const Hero = () => {
  return (
    <div
      id='hero'
      className='min-h-screen bg-no-repeat bg-[url(/banner_bg.jpeg)] bg-left lg:bg-[2%] bg-cover'
      style={{ backgroundSize: '20%' }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[clac(100vh-60px)]'>
     <div className='hidden lg:block'></div>
     <div className='text-[100px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
      <div>
        <p>I'm</p>
        <p>Samna</p>
        <p>Babar</p>
      </div>
     </div>
      </div>
    </div>
  );
};

export default Hero;
