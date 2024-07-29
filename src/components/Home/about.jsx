import React from 'react';

const About = ({ handleClick }) => {
  return (
    <div className="about text-white pt-10 bg-[url('https://mlqyin6muymb.i.optimole.com/cb:oyP5.1537/w:1536/h:583/q:90/f:best/https://instituteofdigitaldentistry.com/wp-content/uploads/2023/09/iDD-cbct-image-panoramic-patient-scan.png')] bg-cover bg-center h-screen w-full flex flex-col gap-4 content-center">
      <h2 className='ml-40 text-4xl'>Consultant Maxillofacial Radiologist</h2>
      <h6 className='ml-40 text-3xl underline italic'>Dr Rajesh Gupta</h6>
      <p className='ml-40 mr-20 text-xl'>
        Dr Rajesh completed his graduation from Govt. Dental College and Hospital, Mumbai in 2008
        and his Post-graduate degree in Oral Medicine and Radiology from YMT Dental College and
        Hospital, Kharghar in 2013. During the post-graduate program he conducted studies related to
        interpretation of dental and extra-oral radiographs with the intent to retrieve maximum
        diagnostic information from basic radiographic examinations. He focused his dissertation on
        the Clinical applications of Cone beam Computed Tomography in Dentistry.
      </p>
      <p className='ml-40 mr-20 text-xl'>
        Since 2014, he has been reporting for dental practitioners in Mumbai, Thane and Panvel. -
        get in touch to experience our reporting services today.
      </p>
      <button className='ml-40 bg-blue-500 text-white p-2 rounded w-fit' onClick={handleClick}>
        Contact
      </button>
    </div>
  );
};

export default About;
