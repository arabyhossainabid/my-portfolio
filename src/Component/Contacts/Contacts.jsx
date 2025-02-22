import React, { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
<section>
<div className="flex flex-col items-center justify-center min-h-screen text-neutral-900 dark:text-stone-50 transition-all">
      <h1 className="text-5xl font-bold mb-8 animate-pulse">
        Get in touch
      </h1>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-opacity-50 bg-white bg-opacity-20 border-gray-300 border-opacity-50 leading-tight focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105 dark:text-stone-50 dark:text-opacity-50 dark:bg-neutral-900 dark:bg-opacity-20 dark:border-stone-50 dark:border-opacity-50"
  id="name"
  type="text"
  name="name"
  placeholder="Your Name"
  value={formData.name}
  onChange={handleChange}
  required
/>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-opacity-50 bg-white bg-opacity-20 border-gray-300 border-opacity-50 leading-tight focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105 dark:text-stone-50 dark:text-opacity-50 dark:bg-neutral-900 dark:bg-opacity-20 dark:border-stone-50 dark:border-opacity-50"
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-opacity-50 bg-white bg-opacity-20 border-gray-300 border-opacity-50 leading-tight focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105 dark:text-stone-50 dark:text-opacity-50 dark:bg-neutral-900 dark:bg-opacity-20 dark:border-stone-50 dark:border-opacity-50"
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
  className="shadow appearance-none border rounded w-full h-64 py-2 px-3 text-gray-700 text-opacity-50 bg-white bg-opacity-20 border-gray-300 border-opacity-50 leading-tight focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105 dark:text-stone-50 dark:text-opacity-50 dark:bg-neutral-900 dark:bg-opacity-20 dark:border-stone-50 dark:border-opacity-50"
  id="message"
  name="message"
  placeholder="Your Message"
  value={formData.message}
  onChange={handleChange}
  required
/>
        </div>
        <a href="mailto:arabyhossainabid@gmail.com"type="submit"className="btn flex gap-3 items-center mx-auto mt-10 px-6 py-2 text-stone-50 bg-black dark:bg-stone-50 dark:hover:bg-neutral-300 dark:text-neutral-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all transform hover:scale-105 rounded-lg"
        >
       
  Send Message

        </a>
      </form> 
      </div>
      <div className="my-8 text-center">
        <h2 className="text-xl font-bold">Contact Information</h2>
        <p className="mt-2">Email : <a href="mailto:arabyhossainabid@gmail.com" className="text-blue-500 hover:underline">arabyhossainabid@gmail.com</a></p>
        <p>Phone: <span className="text-blue-500">+8801923807556</span></p>
      </div>

</section>
  );
};

export default Contacts;
