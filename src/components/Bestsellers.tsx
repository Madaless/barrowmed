import React from 'react'
import IconProduct from './IconProduct'
import Image1 from '../assets/images/product1b.png'
import { xiaomi_product } from '../assets/images'


export const Bestsellers = () => {
    return (
        <section id="our bestsellers" className="pt-6 px-12 mb-6">
            <h1 className="text-3xl pb-2">Nasze bestsellery</h1>
            <div className='flex w-full justify-center max-md:flex-col'>
                <IconProduct image={Image1} height={550} description='Oddychaj lepiej dzięki paskom BETTER BREATH, które są rozwiązaniem problemu chrapania. Opatentowane "sprężyny" elastyczne w pasach delikatnie podnoszą nozdrza, rozszerzając kanały nosowe.' title='Plastry na nos ułatwiające oddychanie' className='mb-8 min-w-[200px] mr-8' />
                <IconProduct image={xiaomi_product} height={550} description='ala' title='ma kota' className="mr-8 grow-0 mb-8 p-3 min-w-[200px]" />
            </div>
            <div className='pt-6 flex w-full '>
            </div>

        </section>
    )
}
