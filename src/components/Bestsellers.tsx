import React from 'react'
import IconProduct from './IconProduct'
import Image1 from '../assets/images/product1b.png'
import { xiaomi_product, breathvilleAdventures } from '../assets/images'


export const Bestsellers = () => {
    return (
        <section id="our bestsellers" className="pt-6 px-12 mb-6">
            <h1 className="text-3xl pb-2">Nasze bestsellery</h1>
            <div className='flex w-full justify-center max-md:flex-col'>
                <IconProduct image={Image1} height={1800} description='Oddychaj lepiej dzięki paskom BETTER BREATH, które są rozwiązaniem problemu chrapania. Opatentowane "sprężyny" elastyczne w pasach delikatnie podnoszą nozdrza, rozszerzając kanały nosowe.' title='Plastry na nos ułatwiające oddychanie' className='flex-[5_1_0%] mb-8 min-w-[200px] mr-8' />
                <IconProduct image={xiaomi_product} height={550} description='ala mmm mmm mmm mmm mmm mmm mmm mmm mmm mmm mm mmmm mmm mmmm mmmm mmm mmm mmm mmm mmm mm mmmm mmmmm mmmm mmmm' title='ma kota' className="flex-[3_0_0%] mr-8  mb-8 min-w-[250px]" />
                <IconProduct image={breathvilleAdventures} height={550} description='ala mmm mmm mmm mmm mmm mmm mmm mmm mmm mmm mm mmmm mmm mmmm mmmm mmm mmm mmm mmm mmm mm mmmm mmmmm mmmm mmmm' title='ma kota' className="flex-[3_0_0%] mr-8  mb-8 min-w-[250px]" />
            </div>
            <div className='pt-6 flex w-full '>
            </div>

        </section>
    )
}
