
import Link from "next/link";

interface Navs {
    slug:string
    title:string
    scrapable:boolean
    topicId:string | null
    url:string
}


const Navlinks = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories"
  );

  const data = await res.json();
  const categoryLinks:Navs[] = data.data;
  const filterNews=categoryLinks.filter(n=>n.scrapable)

  return (
    <div className="w-full border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex items-center gap-3 sm:gap-4
            overflow-x-auto
            py-3
            whitespace-nowrap
            scrollbar-hide
            justify-start
            sm:justify-center
          "
        >
            <Link
        href={"/"}
        className="shrink-0 px-3 py-1.5 text-sm sm:text-base font-medium hover:text-blue-600"
      >
        হোম
      </Link>
          {filterNews.map((ct: { slug: string; title: string }) => (
            <Link
              key={ct.slug}
              href={`/category/${ct.slug}`}
              className="
                shrink-0
                px-3 py-1.5
                text-sm sm:text-base
                font-medium
                text-gray-700
                hover:text-blue-600
                hover:bg-gray-100
                rounded-md
                transition
              "
            >
              {ct.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navlinks;
