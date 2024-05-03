import React from 'react';
import {FaShippingFast} from 'react-icons/fa'
import {BiSolidCheckShield, BiSolidOffer} from 'react-icons/bi'
import {TbTruckReturn} from 'react-icons/tb'

const Milestoneblock = () => {
  return (
    <div className="flex flex-row shadow-md rounded-md w-full px-11 py-10 bg-white">
      <div className='flex-auto flex justify-center'>
        <div className='flex flex-row items-center gap-2'>
        <div><FaShippingFast size={40} color='var(--primary-main-color)' /></div>
        <div>
          <p className="text-black text-[15px] font-semibold tracking-wide mb-1">Free Shipping</p>
        <p className="text-sm text-qgray font-light">When ordering over ₹900</p>
        </div>
        </div>
      </div>
      <div className='flex-auto flex justify-center'>
        <div className='flex flex-row items-center gap-2'>
        <div><BiSolidCheckShield size={40} color='var(--primary-main-color)' /></div>
        <div>
          <p className="text-black text-[15px] font-semibold tracking-wide mb-1">Order Protection</p>
        <p className="text-sm text-qgray font-light">Secured Information</p>
        </div>
        </div>
      </div>
      <div className='flex-auto flex justify-center'>
        <div className='flex flex-row items-center gap-2'>
        <div><BiSolidOffer size={40} color='var(--primary-main-color)' /></div>
        <div>
          <p className="text-black text-[15px] font-semibold tracking-wide mb-1">Best Deals</p>
        <p className="text-sm text-qgray font-light">Special Offers</p>
        </div>
        </div>
      </div>
      <div className='flex-auto flex justify-center'>
        <div className='flex flex-row items-center gap-2'>
        <div><TbTruckReturn size={40} color='var(--primary-main-color)' /></div>
        <div>
          <p className="text-black text-[15px] font-semibold tracking-wide mb-1">Free Return</p>
        <p className="text-sm text-qgray font-light">Money Back Gurrenty</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Milestoneblock