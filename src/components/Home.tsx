import React from 'react';
import truck from '../assets/truck.png';
import about from '../assets/about.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const Home: React.FC = () => {
    return (
        <div className='bg-white'>
            <div className='container mx-auto px-40 flex items-center h-full'>
                <div className='w-1/2 '>
                    <div className="md:w-3/2 relative">
                        <div className='relative'>
                            <div className='bg-Revbox h-[30px] w-[340px] absolute left-[-30px] bottom-0 z-0'></div>
                                <h1 className=" text-[46px] font-bold mb-4 leading-snug relative z-10">Revolutionizing</h1>
                            </div>
                            <h1 className="text-[46px] font-bold mb-4 leading-snug">The Supply Chain.</h1>
                        </div>
                        <p className='mt-4 text-base text-justify w-[426px]'>
                            Welcome to Rosstech, the ultimate platform for seamless, transparent, and 
                            efficient trading of fruits and vegetables. Connect producers, suppliers, 
                            transport providers, and retailers in a unified system to manage quality, 
                            track deliveries, and resolve disputes effortlessly.
                        </p>
                        <button className=' text-1xl mt-5 py-3 px-5 bg-black text-white rounded-xl 
                                transition-all duration-300 hover:bg-brandPrimary hover:text-white'> 
                                Get Started 
                        </button>
                    </div>
                    <div className='w-1/2 flex justify-end'>
                        <img src={truck} alt="Truck" className='h-auto max-w-full' />
                    </div>
                </div>
            <div className='container mx-auto px-40 flex items-center h-full '>
                <div className='flex items-center'>
                    <div className=''>
                        <img src={about} alt="About" />
                    </div>
                    <div className='flex-col ml-20'>
                        <h1 className='text-4xl font-bold mb-10'>
                            Key <span className="text-brandPrimary">Features</span> Of Rosstech
                        </h1>
                        <ul>
                            <li className='text-2xl flex items-center mb-10'>
                                <img src={image1} alt="Small Img" className='mr-2' />
                                <span>Centralized Data Repository</span>
                            </li>
                            <li className='text-2xl flex items-center mb-10'>
                                <img src={image2} alt="Small Img" className='mr-2' />
                                <span>Seamless Communication</span>
                            </li>
                            <li className='text-2xl flex items-center'>
                                <img src={image3} alt="Small Img" className='mr-2' />
                                <span>Real-Time Updates</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;
