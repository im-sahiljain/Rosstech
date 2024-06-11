import React, { useState } from 'react';
import signupWork from '../assets/signupWork.png';
import centralizedWork from '../assets/centralizedWork.png';
import effwork from '../assets/effWork.png';
import realWork from '../assets/realWork.png';

const Works: React.FC = () => {
  const [playVideo1, setPlayVideo1] = useState(false);
  const [playVideo2, setPlayVideo2] = useState(false);
  const [playVideo3, setPlayVideo3] = useState(false);
  const [playVideo4, setPlayVideo4] = useState(false);

  return (
    <div>
       <div className='container mx-auto flex h-full mt-5 justify-center'>
        <div className='w-full max-w-3xl text-center'>
          <h1 className='text-5xl font-bold mb-10'>
            How It <span className="text-green">Works</span> ?
          </h1>                   
          <p className="leading-loose text-base text-center px-12">
            Learn how Rosstech transforms the trading of fruits and vegetables by connecting producers, 
            suppliers, transport providers, and retailers through our unified platform. Our step-by-step video 
            guides will walk you through the entire process, ensuring you understand how to make the most of 
            FreshTrade.
          </p>
        </div>
      </div>
      <div className='signup container mx-auto px-40 flex h-full mt-10'>
        <div className='w-1/2'>
            <h1 className="font-bold mb-4 leading-snug text-brandPrimary underline text-3xl">Sign Up</h1>
          <p className='mt-4 text-lg text-justify mr-20'>
            Create Your Account Tailored To Your Role—Producer, Supplier, Transport Provider, or Retailer.
          </p>
          <p className='text-brandPrimary mt-7 text-base underline font-bold'>“Watch The Video To See How easy it is to get started.”</p>
        </div>
        <div className='w-1/2'>
          {playVideo1 ? (
            <div className="relative w-[560px] h-[315px] rounded-xl overflow-hidden">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/C0DPdy98e4c?autoplay=1&controls=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          ) : (
            <div
              className="relative w-[560px] h-[315px] bg-black rounded-xl cursor-pointer flex items-center justify-center"
              onClick={() => setPlayVideo1(true)}
            >
              <img 
                src={signupWork}
                alt="Thumbnail" 
                className="absolute w-full h-full object-cover" 
              />
            </div>
          )}
        </div>
      </div>

      <div className='centralized container mx-auto px-40 flex h-full mt-10'>
        <div className='w-1/2 flex justify-start relative'>
          {playVideo2 ? (
            <div className="relative w-[560px] h-[315px] rounded-xl overflow-hidden">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/C0DPdy98e4c?autoplay=1&controls=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          ) : (
            <div
              className="relative w-[560px] h-[315px] bg-black rounded-xl cursor-pointer flex items-center justify-center"
              onClick={() => setPlayVideo2(true)}
            >
              <img 
                src={centralizedWork}
                alt="Thumbnail" 
                className="absolute w-full h-full object-cover" 
              />
            </div>
          )}
        </div>
        <div className=' ml-2 w-[500px]'>
          <div className="md:w-3/2">
            <h2 className="font-bold mb-4 leading-snug text-brandPrimary underline text-3xl">Centralized Dashboard</h2>
          </div>
          <p className='mt-4 text-lg text-justify'>
          Access your personalized dashboard to manage orders, track deliveries, and communicate seamlessly with other parties involved in the supply chain.
          </p>
          <p className='text-brandPrimary mt-7 text-lg underline font-bold'>“See how the centralized dashboard simplifies your workflow.”</p>
        </div>
      </div>

      <div className='realtime container mx-auto px-40 flex h-full mt-10'>
        <div className='w-1/2'>
          <div className="md:w-3/2">
            <h1 className="font-bold mb-4 leading-snug text-brandPrimary underline text-3xl">Real-Time Updates</h1>
          </div>
          <p className='mt-4 text-lg text-justify mr-20'>
          Stay informed with real-time notifications and live transaction views. Receive instant updates on order statuses, delivery confirmations, and any issues that arise.
          </p>
          <p className='text-brandPrimary mt-7 text-lg underline font-bold'>“Learn how real-time updates keep you informed.”</p>
        </div>
        <div className='w-1/2 flex relative'>
          {playVideo3 ? (
            <div className="relative w-[560px] h-[315px] rounded-xl overflow-hidden">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/C0DPdy98e4c?autoplay=1&controls=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          ) : (
            <div
              className="relative w-[560px] h-[315px] bg-black rounded-xl cursor-pointer flex items-center justify-center"
              onClick={() => setPlayVideo3(true)}
            >
              <img 
                src={realWork}
                alt="Thumbnail" 
                className="absolute w-full h-full object-cover" 
              />
            </div>
          )}
        </div>
      </div>

      <div className='efficient container mx-auto px-40 flex  h-full mt-10'>
        <div className='w-1/2 flex justify-start relative'>
          {playVideo4 ? (
            <div className="relative w-[560px] h-[315px] rounded-xl overflow-hidden">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/C0DPdy98e4c?autoplay=1&controls=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          ) : (
            <div
              className="relative w-[560px] h-[315px] bg-black rounded-xl cursor-pointer flex  justify-center"
              onClick={() => setPlayVideo4(true)}
            >
              <img 
                src={effwork}
                alt="Thumbnail" 
                className="absolute w-full h-full object-cover" 
              />
            </div>
          )}
        </div>
        <div className=' ml-2 w-[500px]'>
          <div className="md:w-3/2">
            <h2 className="font-bold mb-4 leading-snug text-brandPrimary underline text-3xl">Efficient Dispute Resolution</h2>
          </div>
          <p className='mt-4 text-lg'>
          Handle quality or quantity disputes swiftly through our streamlined support case system. Upload documents, communicate with relevant parties, and work towards automated resolutions.
          </p>
          <p className='text-brandPrimary mt-7 text-lg underline font-bold'>“Understand our efficient dispute resolution process.”</p>
        </div>
      </div>
    </div>
  );
};

export default Works;
