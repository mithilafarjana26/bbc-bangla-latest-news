import Image from "next/image";

interface BodyItem {
  type: "text" | "image" | "subheading";
  text?: string;
  url?: string;
  width?: number;
  height?: number;
  caption?: string;
  altText?: string;
}

interface Byline {
  name: string;
  role: string;
}

interface Topic {
  id: string;
  name: string;
}

interface News {
  id: string;
  title: string;
  description: {
    blocks: {
      type: string;
      model: {
        blocks: {
          type: string;
          model: {
            text: string;
          };
        }[];
      };
    }[];
  };
  link: string;
  firstPublished: string;
  lastPublished: string;
  byline: Byline[];
  topics: Topic[];
  tags: string[];
  imageUrl: string;
  body: BodyItem[];
  text: string;
  wordCount: number;
  source: string;
  sourceUrl: string;
}

interface NewsPageDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const NewsPageDetails = async ({ params }: NewsPageDetailsProps) => {
  const { id } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${id}`
  );

  const data = await res.json();
  const news: News = data.data;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10">
      <article className="bg-white rounded-xl shadow-md overflow-hidden">

        {/* Main Image */}
        {news.imageUrl && (
          <div className="w-full">
            <Image
              src={news.imageUrl}
              alt={news.title}
              width={1200}
              height={650}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="p-5 sm:p-8 md:p-10">

          {/* Category */}
          {news.topics.length > 0 && (
            <p className="text-red-600 font-semibold mb-3">
              {news.topics[0].name}
            </p>
          )}

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            {news.title}
          </h1>

          {/* Author & Date */}
          <div className="flex flex-wrap gap-3 items-center text-sm text-gray-500 mt-5 pb-5 border-b">
            {news.byline.length > 0 && (
              <span>
                {news.byline[0].name}
              </span>
            )}

            <span>•</span>

            <span>
              {new Date(news.firstPublished).toLocaleDateString("bn-BD")}
            </span>

            <span>•</span>

            <span>{news.source}</span>
          </div>

          {/* Article Body */}
          <div className="mt-7">

            {news.body.map((item, index) => {

              {/* Text */}
              if (item.type === "text") {
                return (
                  <p
                    key={index}
                    className="text-gray-700 text-base sm:text-lg leading-8 mb-6 whitespace-pre-line"
                  >
                    {item.text}
                  </p>
                );
              }

              {/* Subheading */}
              if (item.type === "subheading") {
                return (
                  <h2
                    key={index}
                    className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4"
                  >
                    {item.text}
                  </h2>
                );
              }

              {/* Image */}
              if (item.type === "image" && item.url) {
                return (
                  <figure key={index} className="my-7">
                    <Image
                      src={item.url}
                      alt={item.altText || item.caption || news.title}
                      width={item.width || 1024}
                      height={item.height || 600}
                      className="w-full h-auto rounded-lg"
                    />

                    {item.caption && (
                      <figcaption className="text-sm text-gray-500 mt-2">
                        {item.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              return null;
            })}

          </div>

          {/* Tags */}
          {news.tags.length > 0 && (
            <div className="border-t mt-8 pt-5">
              <h3 className="font-bold mb-3">ট্যাগ</h3>

              <div className="flex flex-wrap gap-2">
                {news.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </article>
    </div>
  );
};

export default NewsPageDetails;