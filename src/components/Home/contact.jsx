import React from 'react';
import ContactForm from './contactForm';

const Contact = () => {
  return (
    <div className='contact flex flex-col gap-8 content-center bg-[#212121]'>
      <h2 className='text-2xl text-white'>Contact Us</h2>
      <div className='text-lg sm:text-xl text-white max-w-[500px]'>
        <div>DR RAJESH KUMAR GUPTA</div>
        <div>CONSULTANT</div>
        <div>ORAL AND MAXILLOFACIAL RADIOLOGIST</div>
        <div>Contact - +91 -9815711852</div>
        <div>India</div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
