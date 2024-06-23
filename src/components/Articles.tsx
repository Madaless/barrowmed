import React from 'react'
import ArticleCard from './ArticleCard'
import { ARTICLES } from '../constants'

const Articles = () => {
    return (
        <section id="articles" className="pt-8 px-16">
            <h1 className="text-3xl pb-4">Artykuły.<span className='text-primary'> Dowiedz się wiecej. </span></h1>

            <div className='flex flex-col md:flex-row justify-between'>

                {ARTICLES.map(article => <ArticleCard article={article} key={article.id} />)}

            </div>
        </section>
    )
}

export default Articles