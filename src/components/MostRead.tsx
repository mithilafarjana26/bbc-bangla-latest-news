import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string | null;
  link: string;
  imageUrl: string | null;
  imageAlt: string | null;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string | null;
  lastPublished: string | null;
  source: string;
  rank: number;
}

const MostRead = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read"
  );

  const data = await res.json();
  const news: News[] = data.data;
  console.log(news)

  return (
    <div className="card p-2 bg-base-100 border border-gray-300">
      <h1 className="text-red-800 font-bold mb-4">
        সর্বাধিক পঠিত
      </h1>

      
      <div className="grid gap-3">
        {news.map((n, i) => (
          <div className="flex gap-2" key={n.id}>
            <p className="text-2xl font-bold text-red-600">
              {i + 1}.
            </p>

            <h2>{n.title}</h2>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default MostRead;