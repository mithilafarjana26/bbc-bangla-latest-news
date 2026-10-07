import Image from 'next/image';
import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div>
            <div className=" card bg-base-100 shadow-sm border border-gray-200 overflow-hidden">
                    
                    <figure className="w-full">
                      <Image
                        src={news.imageUrl}
                        alt={news.imageAlt || news.title}
                        width={400}
                        height={400}
                        className="w-full h-64 sm:h-72 md:h-80 object-cover"
                      />
                    </figure>
            
                    <div className="card-body p-4 sm:p-5">
                      <p className="text-red-600 text-sm font-medium">
                        {news.category}
                      </p>
            
                      <h2 className="text-xl sm:text-2xl font-bold leading-snug">
                        {news.title}
                      </h2>
            
                      <p className="text-gray-500 text-sm sm:text-base leading-6 line-clamp-3">
                        {news.description}
                      </p>
                    </div>
                  </div>
        </div>
    );
};

export default NewsCard;