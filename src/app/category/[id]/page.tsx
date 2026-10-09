
import NewsCard from "@/components/NewsCard";
import React from "react";

interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  category?: string;
}

interface CategoryDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const CategoryDetails = async ({ params }: CategoryDetailsProps) => {
  const { id } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${id}`
  );

  const data = await res.json();
  const category: News[] = data.data;

  console.log(category);

  return (
    <div>
      <h1 className="text-2xl font-bold border-b-4 border-red-900 mb-5">
        {data.title}
      </h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {category.map((news: News) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
