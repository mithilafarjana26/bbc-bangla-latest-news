import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

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

type Section = {
  curationId: string;
  title: string;
  articles: News[];
};

export default async function Home() {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  const data: { data: Section[] } = await res.json();

  const sections = data.data;

  const mainNews: News[] = sections[0]?.articles || [];
  const othersSection: Section[] = sections.slice(1);

  return (
    <div>
      <Marquee />

      {/* Home Section */}
      <div className="grid grid-cols-3">

        {/* News Section */}
        <div className="col-span-2 p-4 md:p-10">
          <MainNews mainNews={mainNews} />

          <div className="grid gap-5 mt-5">
            {othersSection.map((os) => (
              <div key={os.curationId}>

                {/* Section Title */}
                <h1
                  className="
                    font-bold text-2xl md:text-3xl
                    text-red-900
                    border-b-2 pb-1 mb-6
                    border-red-800
                    text-center md:text-left
                  "
                >
                  {os.title}
                </h1>

                {/* News Cards */}
                <div
                  className="
                    grid md:grid-cols-3 grid-cols-1 gap-7
                    justify-items-center md:justify-items-stretch
                  "
                >
                  {os.articles.map((news) => (
                    <NewsCard
                      key={news.id}
                      news={news}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Read Section */}
        <div>
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
}