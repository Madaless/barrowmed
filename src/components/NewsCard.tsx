import React from 'react'
import Image, { StaticImageData } from 'next/image';

export type ArticleInfo = {
    id: number,
    title: string,
    content: string,
    imageURL: StaticImageData
    imageURL2: StaticImageData
}

type Prop = {
    news: ArticleInfo;
}

const NewsCard: React.FC<Prop> = ({ news }: Prop) => {
    return (
        <div className='flex-1 mr-8'>
            <a href="#" className="group relative block">
                <div className="relative h-[350px] sm:h-[450px]">

                    <Image
                        alt="Office"
                        width={500}
                        src={news.imageURL}
                        className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <Image
                        alt="Office"
                        width={500}
                        src={news.imageURL2}
                        className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium xs bg-black/70 inline-block text-white p-1">{news.title}</h3>

                    <p className="mt-1.5 text-pretty text-xs bg-black/70 inline-block mb-6 text-white p-1">
                        {news.content}
                    </p>

                    <span
                        className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                    >
                        Shop Now
                    </span>
                </div>
            </a></div>)
}

export default NewsCard