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
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-200 dark:bg-black text-neutral-900 dark:text-stone-50 transition-all">
      <h1 className="text-5xl font-bold mb-8 animate-pulse text-[rgb(255,0,0)]"> {/* Adjust RGB as needed */}
        Get in touch
      </h1>
      <p className='bg-stone-50 dark:text-stone-50 text-neutral-900 dark:bg-black'>Let’s build something awesome.</p>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
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
            className="shadow appearance-none border rounded w-full h-[323px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn flex gap-3 items-center mx-auto mt-10 lg:w-[140px] lg:h-[32px] text-stone-50 bg-black dark:bg-stone-50 dark:text-neutral-900 hover:text-black transition-transform transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-start">
        <h2 className="text-xl font-bold">Contact Information</h2>
        <p className="mt-2">Email: <a href="mailto:arabyhossainabid@gmail.com" className="text-blue-500 hover:underline">arabyhossainabid@gmail.com</a></p>
        <p>Phone: <span className="text-blue-500 hover:underline">+8801923807556</span></p>
      </div>
    </div>
  );
};

export default Contacts;
