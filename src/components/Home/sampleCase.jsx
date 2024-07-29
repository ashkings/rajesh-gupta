import React from 'react';

const SampleCase = ({ title, src, desc }) => {
  return (
    <div className='flex flex-col items-center gap-4 w-56'>
      <h2 className='underline italic text-xl'>{title}</h2>
      <img src={src} alt='case' />
      <div className='text-center text-lg sm:text-xl'>{desc}</div>
    </div>
  );
};

export default SampleCase;
