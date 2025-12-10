import React, { useRef } from 'react';
import SampleCase from './sampleCase';
import Introduction from './introduction';
import About from './about';
import Contact from './contact';
import { SAMPLE_CASES } from '../../utils/constants';
import './home.scss';

const Home = () => {
  const contactRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Introduction />
      <About handleClick={scrollToContact} />
      <div className='services text-white flex  content-center'>
        <div className='info p-5 w-1/2 bg-[#212121] flex flex-col gap-4'>
          <h2 className='text-2xl bg-[#24499C] w-max'>Services</h2>
          <ul className='list-disc pl-5 text-lg sm:text-xl'>
            <li>GET ONLINE - Cone Beam CT reporting within 24 hours.</li>
          </ul>
          <div className='text-lg sm:text-xl'>
            Submit a Cone beam CT, Panoramic (OPG), or Dental radiographic image for interpretation.
            Upload DICOM files @ rajesh42gupta@gmail.com
          </div>
        </div>
        <div className='reporting-prices w-1/2 text-white bg-black p-5'>
          <h2 className='text-2xl bg-[#24499C] w-max'>Reporting Prices</h2>
          <div className='prices flex text-center p-2'>
            <ul className='list-disc text-left text-lg sm:text-xl'>
              <li>FULL MOUTH CBCT - $75 USD</li>
              <li>ONE ARCH CBCT - $50 USD</li>
              <li>ONE QUADRANT CBCT REPORTS - $30 USD</li>
              <br />
              <li>FULL Panoramic(OPG) REPORTS - $20 USD</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='cases flex flex-col bg-neutral-700 h-screen text-white gap-8'>
        <h2 className='text-2xl'>Sample cases</h2>
        <div className='sample-cases flex flex-col gap-4'>
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
