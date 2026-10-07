
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface HeadLine{
id:string
title:string

}


const Marquee = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news?limit=10"
  );

  const data = await res.json();
  const latestNews:HeadLine[] = data.data;

  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6">
      <div className="flex items-center w-full overflow-hidden rounded-md shadow-sm">
        
        {/* Latest Badge */}
        <div className="shrink-0 bg-red-700 text-white font-bold">
          <div className="bg-red-800 px-3 sm:px-5 py-2.5 text-sm sm:text-base whitespace-nowrap">
            সর্বশেষ
          </div>
        </div>

        {/* Marquee */}
        <div className="flex-1 min-w-0 bg-red-600 text-white py-2.5">
          <MarqueeText duration={25} direction="left">
            {latestNews.map(
              (news: { id: string | number; title: string }) => (
                <span
                  key={news.id}
                  className="inline-flex items-center text-sm sm:text-base font-medium"
                >
                  <span className="mx-2 sm:mx-3">
                    {news.title}
                  </span>

                  <span className="text-red-200 font-bold">
                    •
                  </span>
                </span>
              )
            )}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
