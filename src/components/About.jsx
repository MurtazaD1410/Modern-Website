import React from 'react';

const About = () => {
    return (
        <div name='about' className='mx-2 my-32 '>
            <div className='max-w-[1240px] mx-auto '>
                <div className='text-center '>
                    <h2 className='text-4xl  sm:text-5xl font-bold'>Trusted by Developers across the world</h2>
                    <p className='text-2xl sm:text-3xl py-6 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem minima quaerat </p>
                </div>
                <div className='grid sm:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl my-2'>
                        <p className='text-indigo-600 text-6xl font-bold'>100%</p>
                        <p className='text-gray-400 mt-2'>Completion</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl my-2'>
                        <p className='text-indigo-600 text-6xl font-bold'>24/7</p>
                        <p className='text-gray-400 mt-2'>Delivery</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl my-2'>
                        <p className='text-indigo-600 text-6xl font-bold'>100K</p>
                        <p className='text-gray-400 mt-2'>Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
