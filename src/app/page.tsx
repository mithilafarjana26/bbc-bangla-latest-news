import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  const sections = data.data
  const mainNews = sections[0].articles
  const othersSection = sections.slice(1)
  console.log(othersSection)
  console.log(mainNews)
  return (
    <div>
      <Marquee></Marquee>


{/* home Section */}
<div className="grid grid-cols-3 max-w-[1440px] mx-auto">
  {/* news section */}
  <div className="col-span-2 p-10">
<MainNews mainNews={mainNews}></MainNews>
<div className="grid gap-5 mt-5">
  {
  othersSection.map(os=><div className="border-b-2 pb-1 border-red-700" key={os.curationId}>
    <h1 className="font-bold">{os.title}</h1>
   <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
     {
      os.articles.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
    }
   </div>
  </div>)
}
</div>
  </div>
  {/* most read section */}
  <div >

  </div>
</div>

    </div>
  );
}
