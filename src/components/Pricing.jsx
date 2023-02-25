import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const Pricing = () => {
    return (
        <div name='pricing' className=' '>
            <div className='bg-gray-800 h-[750px]'>
                <div className='p-6'>
                    <h2 className='pt-8 text-slate-300 uppercase text-center  text-2xl sm:text-3xl'>Pricing</h2>
                    <h3 className='sm:text-5xl text-4xl text-white font-bold py-6 text-center'>The right pricing for your research</h3>
                    <p className='text-center text-2xl sm:text-3xl text-slate-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto molestias libero aliquam omnis ratione nulla possimus soluta doloribus aspernatur vel!</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 max-w-[1240px] mx-auto '>
                <div className='bg-white m-5 rounded-xl p-8 shadow-2xl -translate-y-1/2 '>
                    <span className='bg-indigo-400 font-semibold px-2 py-1 rounded-full uppercase text-sm'>Standard</span>
                    <div className=''>
                        <p className='text-6xl font-bold my-8'>
                            $49 <span className='font-bold text-base text-slate-600  -mx-5'>/mo</span>{' '}
                        </p>
                    </div>
                    <p className='text-2xl md:text-3xl my-7'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className=''>
                        <p className='flex my-4'>
                            <CheckIcon className='w-7 mr-2 text-green-600' /> Lorem, ipsum dolor.
                        </p>
                        <p className='flex my-4'>
                            <CheckIcon className='w-7 mr-2 text-green-600' /> Lorem, ipsum dolor.
                        </p>
                        <p className='flex my-4'>
                            <CheckIcon className='w-7 mr-2 text-green-600' /> Lorem, ipsum dolor.
                        </p>
                        <p className='flex my-4'>
                            <CheckIcon className='w-7 mr-2 text-green-600' /> Lorem, ipsum dolor.
                        </p>
                        <p className='flex my-4'>
                            <CheckIcon className='w-7 mr-2 text-green-600' /> Lorem, ipsum dolor.
                        </p>
                        <p className='flex my-4'>
                            <CheckIcon className='w-7 mr-2 text-green-600' /> Lorem, ipsum dolor.
                        </p>
                        <button className=' text-white rounded-md w-full py-3 font-semibold text-xl '>Get Started</button>
                    </div>
                </div>
                <div className='bg-white m-5 rounded-xl p-8 shadow-2xl -translate-y-1/2 '>
                    <span className='bg-indigo-400 font-semibold px-2 py-1 rounded-full uppercase text-sm'>Enterprise</span>
                    <div className=''>
                        <p className='text-6xl font-bold my-8'>
                            $99 <span className='font-bold text-base text-slate-600 -mx-5'>/mo</span>{' '}
                        </p>
                    </div>
                    <p className='text-2xl md:text-3xl my-7'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className=''>
                        <p className='flex my-4'>
                            <CheckIcon className='w-7 mr-2 text-green-600' /> Lorem, ipsum dolor.
                        </p>
                        <p className='flex my-4'>
                            <CheckIcon className='w-7 mr-2 text-green-600' /> Lorem, ipsum dolor.
                        </p>
                        <p className='flex my-4'>
                            <CheckIcon className='w-7 mr-2 text-green-600' /> Lorem, ipsum dolor.
                        </p>
                        <p className='flex my-4'>
                            <CheckIcon className='w-7 mr-2 text-green-600' /> Lorem, ipsum dolor.
                        </p>
                        <p className='flex my-4'>
                            <CheckIcon className='w-7 mr-2 text-green-600' /> Lorem, ipsum dolor.
                        </p>
                        <p className='flex my-4'>
                            <CheckIcon className='w-7 mr-2 text-green-600' /> Lorem, ipsum dolor.
                        </p>
                        <button className=' text-white rounded-md w-full py-3 font-semibold text-xl '>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
