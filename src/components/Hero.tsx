import React from 'react'
import Image from 'next/image'
import heroImage from '../assets/images/hero.svg'

const Hero = () => {
    return (
        <section className="bg-secondary bg-[url('/dessert-landscape-2000x1125.jpg')] h-[65vh] bg-[50%] bg-cover" id="hero">
            {/* <Image src={heroImage} alt='image' className='w-screen h-[36vh] sm:h-[65vh]' /> */}
            <div className='justify-end h-[65vh] flex ml-[70%] flex-wrap pb-14 pr-3 pt-10'>

                <a className='min-h-[10vw] min-w-[50%] flex-1 bg-opacity-10 backdrop-filter backdrop-blur-lg flex items-center'>
                    <span className='mx-auto text-white text-2xl '>Zdrowie</span></a>
                <a className='bg-gray-950 min-h-[10vw] min-w-[50%] flex-1 bg-opacity-10 backdrop-filter backdrop-blur-lg  flex items-center'>
                    <span className='mx-auto text-white text-2xl'>Wiedza</span></a>
                <a className='bg-gray-950 min-h-[10vw] min-w-[50%] flex-1 bg-opacity-10 backdrop-filter backdrop-blur-lg  flex items-center'>
                    <span className='mx-auto rounded text-white text-2xl'>Produkty</span></a>
                <a className='min-h-[10vw] min-w-[50%] flex-1 bg-opacity-10 backdrop-filter backdrop-blur-lg  flex items-center'>
                    <span className='mx-auto text-white text-2xl'>Ćwiczenia</span></a>


            </div>


        </section>
    )
}

export default Hero