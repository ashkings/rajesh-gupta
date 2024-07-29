import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../../utils/constants';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
      .then((response) => {
        alert('Message sent successfully!');
        setIsSubmitting(false);
        reset();
      })
      .catch((err) => {
        alert('Failed to send message, please try again later.');
        setIsSubmitting(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-4 p-4 max-w-md mx-auto bg-[#B5B3F9] border-fuchsia-200 border-solid border-2 rounded-lg'
    >
      <h1 className='text-2xl'>Get in touch</h1>
      <div className='flex gap-8'>
        <div>
          <label className='block mb-1 text-white'>First Name</label>
          <input
            placeholder='First Name'
            {...register('firstName', { required: true })}
            className='border rounded-lg p-2 w-full'
          />
          {errors.firstName && <p className='text-red-500'>First Name is required</p>}
        </div>

        <div>
          <label className='block mb-1 text-white'>Last Name</label>
          <input
            placeholder='Last Name'
            {...register('lastName', { required: true })}
            className='border rounded-lg p-2 w-full'
          />
          {errors.lastName && <p className='text-red-500'>Last Name is required</p>}
        </div>
      </div>

      <div className='flex gap-8'>
        <div>
          <label className='block mb-1 text-white'>Email</label>
          <input
            placeholder='Email'
            {...register('email', {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
            })}
            className='border rounded-lg p-2 w-full'
          />
          {errors.email && <p className='text-red-500'>Valid Email is required</p>}
        </div>

        <div>
          <label className='block mb-1 text-white'>Mobile Number</label>
          <input
            placeholder='Mobile Number'
            {...register('phoneNumber', { required: true, pattern: /^[0-9]{10}$/ })}
            className='border rounded-lg p-2 w-full'
          />
          {errors.phoneNumber && <p className='text-red-500'>Valid Mobile Number is required</p>}
        </div>
      </div>
      <div>
        <label className='block mb-1 text-white'>Subject</label>
        <input
          placeholder='Subject'
          {...register('subject', { required: true })}
          className='border rounded-lg p-2 w-full'
        />
        {errors.subject && <p className='text-red-500'>Subject is required</p>}
      </div>
      <div>
        <label className='block mb-1 text-white'>Message</label>
        <textarea
          placeholder='Message'
          {...register('message', { required: true })}
          className='border rounded-lg p-2 w-full'
          rows='5'
        ></textarea>
        {errors.message && <p className='text-red-500'>Message is required</p>}
      </div>

      <button type='submit' className='bg-blue-500 text-white p-2 rounded' disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
