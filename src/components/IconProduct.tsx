import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { title } from 'process'

const IconProduct: React.FC<{ className?: string, image: StaticImageData, description: string, title: string, height?: number, main?: boolean }> = ({ className, image, description, title, height, main }) => {
    return (
        // <div className={className + ' bg-cyan-100 w-full min-h-[100px]'}></div>
        <div className={className + " bg-white group relative block pb-2 overflow-hidden rounded-lg transform transition duration-500 hover:scale-105"}>
            <a href="#">

                <Image src={image} height={height} className={`object-contain w-full ${!main ? 'max-h-[300px]' : ''}`} quality={100} alt="" />

                <div className="mt-3 flex justify-between p-2 text-lg">
                    <div>
                        <h3
                            className="text-gray-900 group-hover:underline-offset-4"
                        >
                            {title}
                        </h3>
                    </div>

                    <p className="text-gray-900 text-lg">$299</p>
                </div>
            </a>
        </div>
    )
}

export default IconProduct