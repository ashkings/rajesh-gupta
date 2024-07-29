import React from 'react';
import ContactForm from './contactForm';

const Contact = () => {
  return (
    <div className='contact flex flex-col gap-8 content-center bg-[#324E6E] p-10'>
      <h2 className='text-2xl text-white'>Contact Us</h2>
      <div className='text-xl text-white w-[500px]'>
        100 feet road, Shriram complex, near Saket College, Kalyan (East). District - Thane,
        Maharashtra. radonmaxillofacial@gmail.com
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
