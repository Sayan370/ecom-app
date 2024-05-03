import Image from 'next/image';
import React from 'react'

const MainImageSlider = () => {
    return (

        <div className="flex flex-col bg-[#f8f8f8] md:flex-row py-6 px-11 gap-4">
            <div className="flex-auto">
                <Image loading='lazy' width={1000} height={800} quality={100} className="h-full w-full rounded-lg" src="/assests/images/banner-1.png" alt="" />
            </div>
            <div className="flex flex-1 flex-col gap-4">
                <div className="flex-auto">
                    <Image loading='lazy' className="h-full w-full rounded-lg"  width={800} height={700} quality={100} src="/assests/images/banner-2.png" alt="" />
                </div>
                <div className="flex-auto">
                    <Image loading='lazy' className="h-full w-full rounded-lg" width={800} height={700} quality={100} src="/assests/images/banner-3.png" alt="" />
                </div>
            </div>
        </div>


    )
}

export default MainImageSlider;