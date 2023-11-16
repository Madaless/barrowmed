import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { title } from 'process'

const IconProduct: React.FC<{ className?: string, image: StaticImageData, description: string, title: string, height: number }> = ({ className, image, description, title, height }) => {
    return (
        <div className={className + " bg-white"}>
            <a href="#" className="group block pb-4 overflow-hidden">
                {/* <img
                    src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="h-[350px] w-full object-cover sm:h-[450px]"
                /> */}
                <Image src={image} height={height} className="object-covertransition duration-500 group-hover:scale-105" quality={100} alt="" />

                <div className="mt-3 flex justify-between text-sm p-2">
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