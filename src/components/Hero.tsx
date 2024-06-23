import React from 'react'


const Hero = () => {
    return (
        <section className="bg-secondary bg-[url('/dessert-landscape-2000x1125.jpg')] bg-[50%] bg-cover" id="hero">
            <div className='text-white text-3xl absolute top-[25vh] left-[12%] font-medium'>
                <p className='bg-primary/30 inline-block mb-6'>Pomagamy z oddychaniem</p>
                <p className='bg-primary/30 backdrop-filter backdrop-blur-lg mb-6'>Chcesz poprawić swoje oddychanie ?</p>
                <p className=' bg-opacity-10 backdrop-filter backdrop-blur-lg inline-block'>Sprawdz nasze artykuły i sklep</p>
            </div>
            <div className='justify-end flex ml-[60%] h-[65vh] flex-wrap flex-col pb-14 pr-10 pt-14'>
                <a className='hidden sm:flex min-h-[10vw] min-w-[50%] flex-[1_1_50%] bg-opacity-10 backdrop-filter backdrop-blur-lg items-center'>
                    <span className='mx-auto text-white text-2xl underline'>Zdrowie</span></a>
                <a className='hidden sm:flex bg-gray-950 min-h-[10vw] min-w-[50%] flex-[1_1_50%] bg-opacity-10 backdrop-filter backdrop-blur-lg items-center'>
                    <span className='mx-auto text-white text-2xl underline'>Wiedza</span></a>
                <a className='hidden sm:flex bg-gray-950 min-h-[10vw] min-w-[50%] flex-[1_1_50%] bg-opacity-10 backdrop-filter backdrop-blur-lg items-center'>
                    <span className='mx-auto rounded text-white text-2xl underline'>Produkty</span></a>
                <a className='hidden sm:flex min-h-[10vw] min-w-[50%] flex-[1_1_50%] bg-opacity-10 backdrop-filter backdrop-blur-lg items-center'>
                    <span className='mx-auto text-white text-2xl underline'>Ćwiczenia</span></a>
            </div>
        </section>
    )
}

export default Hero