import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { title } from 'process'

const IconProduct: React.FC<{ className?: string, image: StaticImageData, description: string, title: string, height: number }> = ({ className, image, description, title, height }) => {
    return (
        // <div className={className + ' bg-cyan-100 w-full min-h-[100px]'}></div>
        <div className={className + " bg-white group relative block pb-2 overflow-hidden rounded-lg"}>
            <a href="#" className="">
                <button
                    className="absolute end-4 top-4 z-10 rounded-full text-gray-900 transition hover:text-gray-900/75 "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className='bg-white'
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                </button>
                <Image src={image} height={height} className="object-contain group-hover:scale-105 transition duration-500 w-full max-h-[300px]" quality={100} alt="" />

                <div className="mt-3 flex justify-between p-2 text-lg">
                    <div>
                        <h3
                            className="text-gray-900 group-hover:underline group-hover:underline-offset-4"
                        >
                            {title}
                        </h3>

                        <p className="mt-1.5  text-xs text-gray-500">
                            {description}
                        </p>
                    </div>

                    <p className="text-gray-900 text-lg">299zł</p>
                </div>
            </a>
        </div>
    )
}

export default IconProduct