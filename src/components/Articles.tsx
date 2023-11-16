import React from 'react'
import ArticleCard from './ArticleCard'
import { ARTICLES } from '../constants'

const Articles = () => {
    return (
        <section id="articles" className="pt-6 px-12">
            <h1 className="text-3xl pb-2">Artykuły</h1>

            <div className='flex flex-col md:flex-row justify-between'>

                {ARTICLES.map(article => <ArticleCard article={article} />)}

            </div>
        </section>
    )
}

export default Articles