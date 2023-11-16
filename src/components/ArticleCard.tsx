import { StaticImageData } from 'next/image';
import Image from 'next/image';

import React from 'react'

export type ArticleInfo = {
    id: number,
    title: string,
    date: string,
    content: string,
    imageURL: StaticImageData
}

type Prop = {
    article: ArticleInfo;
}

const ArticleCard: React.FC<Prop> = ({ article }: Prop) => {
    return (
        <article className="flex-1 min-w-[250px] mr-8 mb-8 overflow-hidden rounded-lg  transition hover:shadow-lg w-full ">
            <Image
                alt="Office"
                width={500}
                src={article.imageURL}
                className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
                <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                    {article.date}
                </time>

                <a href="#">
                    <h3 className="mt-0.5 text-lg text-gray-900">
                        {article.title}
                    </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {article.content}
                </p>
            </div>
        </article>
    )
}

export default ArticleCard