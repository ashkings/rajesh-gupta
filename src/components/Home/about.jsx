import React from 'react';

const About = ({ handleClick }) => {
  return (
    <div className='about text-white bg-neutral-700 bg-cover bg-center h-screen w-full flex flex-col gap-4 content-center'>
      <h2 className='text-2xl'>Consultant Maxillofacial Radiologist</h2>
      <h6 className='text-2xl underline italic'>Dr Rajesh Gupta</h6>
      <p className='text-lg sm:text-xl'>
        DR RAJESH K GUPTA Completed his graduation from Himachal Pradesh University, India in 2008
        and post graduation from MM University, in 2013 in Oral Medicine & Radiology. He has keen
        interest in Oral Radiology and conducted many studies in Radiology in last 15 years. He is
        presently working as Professor In Dept. Of Oral Medicine & Radiology with 13 years of
        experience of expertise in guiding many postgraduate doctors in field of Oral radiology. He
        has been doing CBCT reporting from past many years with renounced centres across country.
      </p>
      <button className='bg-[#FFBE3C] text-black p-2 rounded w-fit' onClick={handleClick}>
        Contact
      </button>
    </div>
  );
};

export default About;
