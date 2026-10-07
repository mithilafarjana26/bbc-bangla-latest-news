import NewsCard from '@/components/NewsCard';
import React from 'react';

const CategoryDetails =async ({params}) => {
    const {id} = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`)
    const data = await res.json()
    const category = data.data
    console.log(category)
    return (
        <div>
            <h1 className='text-2xl font-bold border-b-4 border-red-900  mb-5'>{data.title}</h1>
      
      <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
        {
            category.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
      
        </div>
    );
};

export default CategoryDetails;