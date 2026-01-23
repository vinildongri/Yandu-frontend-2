import React from 'react'
import Link from "next/link"

export const CTA = () => {
  return (

    <section className="w-full flex justify-center px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col-reverse md:flex-row w-full max-w-7xl h-auto md:h-[390px] rounded-2xl overflow-hidden bg-[#0B132B]">

          {/* LEFT SIDE: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-16 gap-6">
            <h2 className="text-blue-500 font-bold uppercase tracking-wider text-sm md:text-base">
              Grow your business
            </h2>

            <h1 className="text-xl md:text-4xl font-bold text-white leading-tight pb-5">
              Trusted globally by over 1 million businesses, small to large
            </h1>

            <button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer font-bold py-3 px-8 rounded text-sm md:text-base transition-colors">
              START NOW FOR FREE
            </button>
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="w-full md:w-1/2 relative h-64 md:h-full bg-gray-200">
            <img
              src="/servicesPics/women.jpg" alt="Business owner"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        <div className='py-10'></div>

        {/* <div className="w-full max-w-7xl mx-auto px-4 mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            What success with Yandu looks like
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-blue-600">Visionary founders</span> turn to Yandu freelancers to bring their vision to life.
          </p>
        </div> */}
        {/* video block */}

        {/* <div className="relative w-full max-w-7xl h-[360px] md:h-[420px] lg:h-[580px] rounded-2xl overflow-hidden">
          <video
            className="w-full h-full object-cover relative z-10" // Added relative and z-10
            src="/videos/yandu.mp4"
            autoPlay loop muted controls
          /> */}

          {/* Overlay */}
          {/* <div className="absolute inset-0  flex flex-col items-center justify-center gap-4 text-center px-4">
          </div>

        </div> */}

      </div>
    </section>
  );
};
