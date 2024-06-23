import React from 'react'
import NewsCard from './NewsCard'
import { NEW_PRODUCTS } from '@/constants'
const NewProducts = () => {
    return (
        <section id="articles" className="pt-8 px-16">
            <h1 className="text-3xl pb-2">Nowości.<span className='text-primary'> Sprawdź, co nowego mamy dla Ciebie. </span></h1>

            <div className='flex flex-col md:flex-row justify-between'>

                {NEW_PRODUCTS.map(i => {
                    return <NewsCard news={i} />
                })}


            </div>
        </section>
    )
}

export default NewProducts