import Image from 'next/image';
import { FaRegPaperPlane } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer>
            <div className="">
                <div className='flex flex-row px-9 py-8'>
                    <div className='p-4 w-1/3'>
                        <h4 className='mb-4 font-bold'>OUR CONTACT</h4>
                        <div className='flex flex-col'>
                            <span className='text-sm inline-flex mb-4'><GrLocation size={40} /> <span className='ml-2'>San Luis Potosí, Centro Historico, 78000 San Luis Potosí, SLP, Mexico</span></span>
                            <span className='text-sm inline-flex mb-4'><FiPhoneCall size={20} /> <span className='ml-2'>(+0214)0 315 215 - (+0214)0 315 215</span></span>
                            <span className='text-sm inline-flex mb-4'><MdEmail size={20} /> <span className='ml-2'>Support_emarket@domain.com</span></span>
                            <span className='text-sm inline-flex mb-4'><BiTimeFive size={20} /> <span className='ml-2'>Open time: 8:00AM - 16:PM</span></span>
                        </div>
                    </div>
                    <div className='p-4 w-1/4'>
                        <h4 className='mb-4 font-bold'>CATEGORIES</h4>
                        <div className='flex flex-col'>
                        <span className='text-sm inline-flex mb-4 font-medium hover:text-[var(--primary-main-color)]'><Link href="#"><span className='ml-2'>Mobile</span></Link></span>
                            <span className='text-sm inline-flex mb-4 font-medium hover:text-[var(--primary-main-color)]'><Link href="#"><span className='ml-2'>Accessories</span></Link></span>
                            <span className='text-sm inline-flex mb-4 font-medium hover:text-[var(--primary-main-color)]'><Link href="#"><span className='ml-2'>Smart Watch</span></Link></span>
                            <span className='text-sm inline-flex mb-4 font-medium hover:text-[var(--primary-main-color)]'><Link href="#"><span className='ml-2'>Laptop</span></Link></span>
                        </div>
                    </div>
                    <div className='p-4 w-1/4'>
                        <h4 className='mb-4 font-bold'>Quick Links</h4>
                        <div className='flex flex-col'>
                            <span className='text-sm inline-flex mb-4 font-medium hover:text-[var(--primary-main-color)]'><Link href="#"><span className='ml-2'>About Us</span></Link></span>
                            <span className='text-sm inline-flex mb-4 font-medium hover:text-[var(--primary-main-color)]'><Link href="#"><span className='ml-2'>Product</span></Link></span>
                            <span className='text-sm inline-flex mb-4 font-medium hover:text-[var(--primary-main-color)]'><Link href="#"><span className='ml-2'>Contact Us</span></Link></span>
                            <span className='text-sm inline-flex mb-4 font-medium hover:text-[var(--primary-main-color)]'><Link href="#"><span className='ml-2'>Privacy Policy</span></Link></span>
                            <span className='text-sm inline-flex mb-4 font-medium hover:text-[var(--primary-main-color)]'><Link href="#"><span className='ml-2'>Terms & Condition</span></Link></span>
                        </div>
                    </div>
                    <div className='p-4 w-1/3'>
                        <h4 className='mb-4 font-bold'>Gallery</h4>
                        <div className="flex flex-row md:flex-row pr-11 gap-2">
                            <div className="flex flex-col gap-2">
                                <Image loading='lazy' width={1000} height={800} quality={100} className="h-full w-full rounded-lg" src="/assests/images/banner-1.png" alt="" />
                                <Image loading='lazy' width={1000} height={800} quality={100} className="h-full w-full rounded-lg" src="/assests/images/banner-1.png" alt="" />
                                <Image loading='lazy' width={1000} height={800} quality={100} className="h-full w-full rounded-lg" src="/assests/images/banner-1.png" alt="" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Image loading='lazy' width={1000} height={800} quality={100} className="h-full w-full rounded-lg" src="/assests/images/banner-1.png" alt="" />
                                <Image loading='lazy' width={1000} height={800} quality={100} className="h-full w-full rounded-lg" src="/assests/images/banner-1.png" alt="" />
                                <Image loading='lazy' width={1000} height={800} quality={100} className="h-full w-full rounded-lg" src="/assests/images/banner-1.png" alt="" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Image loading='lazy' width={1000} height={800} quality={100} className="h-full w-full rounded-lg" src="/assests/images/banner-1.png" alt="" />
                                <Image loading='lazy' width={1000} height={800} quality={100} className="h-full w-full rounded-lg" src="/assests/images/banner-1.png" alt="" />
                                <Image loading='lazy' width={1000} height={800} quality={100} className="h-full w-full rounded-lg" src="/assests/images/banner-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-gray-300 mx-12" />
                <div className='px-9 py-5'>
                    <div className='flex flex-row p-4'>
                        <div className='flex w-1/2'>
                            <span className='w-[10%]'><FaRegPaperPlane size={40} /></span>
                            <span className='w-auto leading-3'>
                                <h3 className='font-bold text-lg'>Signup for Newsletter</h3>
                                <span className='text-xs text-[var(--muted-text-color)]'>We will never share your email address width third-party</span>
                            </span>
                        </div>
                        <div className='flex w-1/2'>
                            <div className="flex items-center w-full">
                                <input
                                    type="text"
                                    className="w-full border py-3 px-4 border-gray-300 rounded-l-md focus:outline-none"
                                    placeholder="Enter your email..."
                                />
                                <button
                                    className="bg-[var(--primary-main-color)] text-white py-3 px-4 rounded-r-md hover:bg-[var(--primary-main-color)] focus:outline-none"
                                    type="button"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-gray-300" />
                <div className='flex flex-row py-4 px-12'>
                    <div className='text-sm w-[70%]'>
                        © Copyright 2017 Emarket Templates. Designed by MagenTech.com. All Rights Reserved
                    </div>
                    <div className='flex items-end w-[30%]'>
                        <Image loading='lazy' width={1500} height={1000} quality={100} className="h-full w-full rounded-lg" src="/assests/images/payments-1.png" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;