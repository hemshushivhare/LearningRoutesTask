import React from 'react';

const Feedbackform = () => {
  return (
    <div className='w-full h-64 mt-10 bg-gradient-to-r from-green-100 to-cyan-500'>
      <div className="w-[70%] mx-auto">
        <div className='mt-10'>
          <h1 className="text-lg bg-blue-50 text-blue-600 font-semibold w-40 px-6 py-1 rounded-lg">
            Still in Doubt
          </h1>
        </div>

        <div className="flex mt-6">
          <h1 className="text-3xl font-extrabold"></h1>
          <p className="text-3xl text-black font-extrabold ml-1">Get</p>
          <p className="text-3xl text-cyan-500 ml-1 font-extrabold">Personalized Guidance</p>
          <p className="text-3xl ml-1 text-black font-extrabold">for Free!</p>
        </div>

        <div className="flex mt-6 mb-20 space-x-6">
          <input type="text" className="rounded-sm border border-gray-600 p-2" placeholder="First Name" />
          <input type="text" className="rounded-sm border border-gray-600 p-2" placeholder="Last Name" />
          <input type="tel" className="rounded-sm border border-gray-600 p-2" placeholder="Phone Number" />
          <select className="rounded-sm border border-gray-600 p-2" placeholder="Select Course">
            <option>Select Course</option>
            <option>Course 1</option>
            <option>Course 2</option>
            <option>Course 3</option>
          </select>
          <button className="h-12 w-40 p-3 bg-blue-300 rounded-md text-lg text-blue">Submit Now</button>
        </div>
      </div>
    </div>
  );
}

export default Feedbackform;


