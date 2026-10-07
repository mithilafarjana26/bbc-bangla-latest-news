import Image from "next/image";
import Link from "next/link";

type News = {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  source: string;
};

interface MainNewsProps {
  mainNews: News[];
}

const MainNews = ({ mainNews }: MainNewsProps) => {
  const [firstNews, ...othersNews] = mainNews;
console.log(firstNews)
  if (!firstNews) return null;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">

      {/* Main News */}
    <Link href={`/news/${firstNews.id}`}>
      <div className="w-full card bg-base-100 shadow-sm border border-gray-200 overflow-hidden">
        
        <figure className="w-full">
          <Image
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt || firstNews.title}
            width={640}
            height={400}
            className="w-full h-64 sm:h-72 md:h-80 object-cover"
          />
        </figure>

        <div className="card-body p-4 sm:p-5">
          <p className="text-red-600 text-sm font-medium">
            {firstNews.category}
          </p>

          <h2 className="text-xl sm:text-2xl font-bold leading-snug">
            {firstNews.title}
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-6 line-clamp-3">
            {firstNews.description}
          </p>
        </div>
      </div>
    </Link>

      {/* Other News */}
      <div className="w-full grid gap-3">
        {othersNews.slice(0, 5).map((news) => (
          <div
            key={news.id}
            className="w-full border border-gray-200 rounded-lg p-4"
          >
            <p className="text-red-600 text-sm font-medium mb-1">
              {news.category}
            </p>

            <h2 className="font-semibold text-base sm:text-lg leading-snug">
              {news.title}
            </h2>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MainNews;