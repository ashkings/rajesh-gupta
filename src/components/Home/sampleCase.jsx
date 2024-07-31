import React from 'react';

const SampleCase = ({ title, src, desc }) => {
  return (
    <>
      <h2 className='underline italic text-xl'>{title}</h2>
      <div className='flex items-start gap-4'>
        <div>
          <img src={src} alt='case' className='w-max h-max' />
        </div>
        <div className='text-lg sm:text-xl'>{desc}</div>
      </div>
    </>
  );
};

export default SampleCase;
