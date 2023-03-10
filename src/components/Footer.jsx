import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='-mt-56 w-full bg-slate-800 text-gray-300 p-2 '>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-2 border-b-2 border-gray-600 py-8'>
                <div className=''>
                    <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analytics</li>
                        <li className='py-1'>Commerce</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Cloud</li>
                    </ul>
                </div>
                <div className=''>
                    <h6 className='font-bold uppercase pt-2'>Support</h6>
                    <ul>
                        <li className='py-1'>Pricing</li>
                        <li className='py-1'>Documentation</li>
                        <li className='py-1'>Guides</li>
                        <li className='py-1'>API Status</li>
                    </ul>
                </div>
                <div className=''>
                    <h6 className='font-bold uppercase pt-2'>Company</h6>
                    <ul>
                        <li className='py-1'>About</li>
                        <li className='py-1'>Blog</li>
                        <li className='py-1'>Jobs</li>
                        <li className='py-1'>Press</li>
                        <li className='py-1'>Partners</li>
                    </ul>
                </div>
                <div className=''>
                    <h6 className='font-bold uppercase pt-2'>Legal</h6>
                    <ul>
                        <li className='py-1'>Claims</li>
                        <li className='py-1'>Privacy</li>
                        <li className='py-1'>Terms</li>
                        <li className='py-1'>Policies</li>
                        <li className='py-1'>Conditions</li>
                    </ul>
                </div>

                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase'>subscribe to our newsletter</p>
                    <p className='py-4 '>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <form action='' className='flex flex-col sm:flex-row'>
                        <input type='email' className='w-full p-2 mr-4 rounded-md mb-4' placeholder='Enter your Email' />
                        <button className='py-2 mb-4  px-2'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className=' flex flex-col sm:flex-row sm:justify-between justify-center  px-2 py-4 items-center max-w-[1240px] m-auto text-gray-400 text-center'>
                <p className=''>2022 Workflow, LLC. All rights reserved</p>
                <div className='flex space-x-2 justify-between w-[300px] pt-4 text-2xl'>
                    <FaFacebook />
                    <FaTwitch />
                    <FaTwitter />
                    <FaInstagram />
                    <FaGithub />
                </div>
            </div>
        </div>
    );
};

export default Footer;
