import React from 'react';
import service from '../../images/service.png';

const Introduction = () => {
  return (
    <div className='introduction bg-[#212121] text-white h-screen w-full flex gap-4 content-center '>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
          Precision CBCT Reporting
        </h1>
        <h6 className='text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl underline italic'>
          Cone Beam CT Interpretation Services
        </h6>
        <p className='text-lg sm:text-xl'>
          Welcome you all where we provide quality CBCT interpretation services and Reporting
          services for maxillofacial radiographs that help dental practitioners provide the highest
          quality care for their patients. Take a look around and explore the various services we
          offer, and the samples of our work. Dedicated online reporting service for Cone Beam
          Computed Tomography (CBCT) Imaging, and various Dental imaging studies. Our dental
          radiology reports focus on the best diagnostic interpretation of your clinical concerns.
        </p>
      </div>
      <img src={service} alt='service' className='w-60 h-60' />
    </div>
  );
};

export default Introduction;
