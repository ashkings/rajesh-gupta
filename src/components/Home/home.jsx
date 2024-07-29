import React, { useRef } from 'react';
import SampleCase from './sampleCase';
import Introduction from './introduction';
import About from './about';
import { SAMPLE_CASES } from '../../utils/constants';
import Contact from './contact';
import Services from './services';

const Home = () => {
  const contactRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Introduction />
      <About handleClick={scrollToContact} />
      <Services />
      <div className='service-1 text-white flex  content-center'>
        <div className='w-1/2 bg-[#293C53] p-20 flex flex-col gap-4'>
          <h2 className='text-2xl bg-[#24499C] w-max'>Reporting Services</h2>
          <ul className='list-disc pl-5 text-xl'>
            <li>Alveolar bone assessment for implant placement and planning.</li>
            <li>Endodontic assessment</li>
            <li>
              Interpretation of cyst, tumor and other abnormalities in the maxillofacial region.
            </li>
            <li>Interpretation of fractures of the maxillofacial region</li>
          </ul>
          <div className='text-xl'>
            Submit a Cone beam CT, Panoramic (OPG), or Dental radiographic image for interpretation.
            It is our keen intent to continue to provide quality reports in a timely manner that are
            tailored to the specific needs of our referring dental practitioners and their patients.
          </div>
        </div>
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0N7C1K8ZbrYGu4u3yO84Sh6Su2FlOHVjmDg&s')] bg-cover bg-center h-screen w-1/2"></div>
      </div>

      <div className='reporting-process text-white p-40 flex flex-col items-center bg-[#4C637F] opacity-[0.8215] gap-8 justify-center h-96'>
        <h2 className='text-2xl'>Reporting Process</h2>
        <div className='text-center text-xl'>
          The interpretation services are customized to meet the specific needs of each case. We
          work collaboratively throughout the entire process. Contact us to find out how we can help
          today. Cone Beam CT volume examinations can be uploaded to our secure website with the
          click of a mouse. Web or Internet access, is all that is required to fully utilize our
          services. We accept DICOM files through our secure Cloud drive and provide the
          corresponding report through the same portal or at your desired email address provided.
          Reports are delivered within 12-24 hours of study (DICOM) upload and order confirmation.
        </div>
      </div>

      <div className='cases flex flex-col bg-[#263F5B] h-screen text-white p-10 gap-8'>
        <h2 className='text-center text-2xl'>Sample cases</h2>
        <div className='flex gap-8 items-center justify-center'>
          {SAMPLE_CASES.map((item, ind) => (
            <SampleCase title={item.title} src={item.src} desc={item.desc} key={ind} />
          ))}
        </div>
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default Home;
