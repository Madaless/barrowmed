import React from 'react'
import Image from 'next/image'
import { aboutUsJoga, aboutUsSky } from '@/assets/images'
import AboutUsSlider from '@/components/AboutUsSlider'

const About = () => {

    return (
        <section id="about-us" className='px-24 pt-12 bg-white'>
            <h1 className='font-normal text-4xl pb-6'>Akceptuj wyzwania. Odrzuć normy. Przesuwaj granice.</h1>
            <p key={"short_intro"} className='text-lg/7'>
                Jesteśmy firmą która chce ci pomóc oddychać. Twórca Barrowmed inżynier i entuzjasta fizjoterapii, osoba mająca całe życie problemy z oddechem i płucami dzieli się swoją wiedzą jak pożegnał się z tym problemem na zawsze. Bądzmy szczerzy zmiana wyuczonych mechanizmów to tygodnie pracy nad sobą. Zebraliśmy dużą wiedzę na temat ćwiczeń i metodyk ich wdrążania, aby proces byś czuł/a się lepiej był jak najkrótszy.
            </p>
            <Image alt='sky' src={aboutUsJoga} height={500} className='w-full pt-5' />
            <p key='quote' className='text-2xl/7 pt-48 pb-48 font-sherif italic text-center'>„Wszystko co robimy i czym jesteśmy, zaczyna się od naszego Oddechu” – dr Joy Manne</p>

            <AboutUsSlider />
        </section>
    )
}

export default About