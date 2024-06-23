import React from 'react'
import IconProduct from './IconProduct'
import Image1 from '../assets/images/product1b.png'
import { xiaomi_product, breathvilleAdventures } from '../assets/images'


export const Bestsellers = () => {
    return (
        <section id="our bestsellers" className="pt-8 px-16">
            <h1 className="text-3xl pb-4">Nasze bestselery. <span className='text-primary'>Nasi klienci kochają te produkty. </span></h1>
            <IconProduct main={true} image={Image1} description='Oddychaj lepiej dzięki paskom BETTER BREATH, które są rozwiązaniem problemu chrapania. Opatentowane "sprężyny" elastyczne w pasach delikatnie podnoszą nozdrza, rozszerzając kanały nosowe.' title='Plastry na nos ułatwiające oddychanie' className='flex-[5_1_0%] mb-8 min-w-[200px] mr-8' />
            <div className='flex w-full justify-center max-md:flex-col '>
                <IconProduct main={false} image={xiaomi_product} description='Oczyszczacz powietrza Xiaomi z jonizatorem. Oddychaj czystym i zdrowym powietrzem. Filtracja sierści zwierząt i pyłków. Wyświetlacz OLED. Efektywna powierzchnia krycia 24-48m². Wlot powietrza 360°. Sterowanie Wi-Fi' title='Oczyszczacz Powietrza z jonizatorem' className="flex-[3_0_0%] mr-8  mb-8 min-w-[250px]" />
                <IconProduct image={breathvilleAdventures} height={550} description='“Kto ma nosa do zdrowia?” to pięknie zilustrowana książka na temat prawidlowego oddychania dzieci i młodzieży. 95% krzywych zębów nie jest wynikiem złych genów, ale nieprawidłowego oddychania i niewłaściwej pracy języka. Każde dziecko ma potencjał, by rozwinąć ładną twarz i mieć proste zęby.' title='E-book dla dzieci o oddychaniu' className="flex-[3_0_0%] mr-8  mb-8 min-w-[250px]" />
                <IconProduct image={xiaomi_product} description='Oczyszczacz powietrza Xiaomi z jonizatorem. Oddychaj czystym i zdrowym powietrzem. Filtracja sierści zwierząt i pyłków. Wyświetlacz OLED. Efektywna powierzchnia krycia 24-48m². Wlot powietrza 360°. Sterowanie Wi-Fi' title='Oczyszczacz Powietrza z jonizatorem' className="flex-[3_0_0%] mr-8  mb-8 min-w-[250px]" />

            </div>
            <div className='pt-6 flex w-full '>
            </div>

        </section>
    )
}
