import { Link } from "react-router-dom";
import blog from "./blogData";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <div className="md:container md:mx-auto mx-2 my-10">
       <Helmet>
              <title>  مقالات | داربست فلزی در کرمان</title>
              <meta
                name="description"
                content="شرکت خدمات داربست فلزی کرمان ارائه‌دهنده خدمات نصب، اجاره، و طراحی داربست فلزی با کیفیت بالا و مطابق استانداردهای ایمنی ایران. با ما بیشتر آشنا شوید."
              />
              <meta
                name="keywords"
                content=" داربست فلزی در کرمان ، درباره ما, شرکت خدمات داربست فلزی, نصب داربست کرمان, اجاره داربست, طراحی داربست فلزی"
              />
              <link rel="canonical" href="https://kermandarbast.ir/blogs" />
            </Helmet>
      {blog.map((blog) => (
        <div
          key={blog.id}
          className="w-auto h-[40vh] my-10 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md"
        >
          <div className="col-span-2 text-lg font-bold capitalize rounded-md">
            {blog.tittle}
          </div>
          <div className="col-span-2 rounded-md">{blog.cardinfo}</div>
          <Link to={blog.link}>
            <div className="col-span-1">
              <button type="button" className="moreBtn">
                مشاهده یشتر
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
