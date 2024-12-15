import { Link } from "react-router-dom";
import blog from "./blogData";

const Blogs = () => {
  return (
    <div className="md:container md:mx-auto mx-2 my-10">
      {blog.map((blog) => (
        <div
          key={blog.id}
          className="w-auto h-[40vh] bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md"
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
