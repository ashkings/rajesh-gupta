import React from 'react';

const Introduction = () => {
  return (
    <div className="introduction text-white pt-10 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0N7C1K8ZbrYGu4u3yO84Sh6Su2FlOHVjmDg&s')] bg-cover bg-center h-screen w-full flex flex-col gap-4 content-center ">
      <h1 className='ml-40 text-7xl'>Radon Maxillofacial Diagnostics</h1>
      <h6 className='ml-40 text-3xl underline italic'>Cone Beam CT Interpretation Services</h6>
      <p className='ml-40 mr-20 text-xl'>
        Welcome! to Radon Maxillofacial Diagnostics website, where we provide quality CBCT
        interpretation services and Reporting services for maxillofacial radiographs that help
        dental practitioners provide the highest quality care for their patients. Take a look around
        and explore the various services we offer, and the samples of our work.
      </p>
      <p className='ml-40 mr-20 text-xl'>
        Dedicated online reporting service for Cone Beam Computed Tomography (CBCT) Imaging, and
        various Dental imaging studies. Our dental radiology reports focus on the best diagnostic
        interpretation of your clinical concerns.
      </p>
    </div>
  );
};

export default Introduction;
