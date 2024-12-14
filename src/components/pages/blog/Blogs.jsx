const Blogs = () => {
  return (
    <div className="md:container md:mx-auto mx-2 my-10">
      <div className="w-auto bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
        <div className="col-span-2 text-lg font-bold capitalize rounded-md">
          نصب داربست فلزی در کرمان: راهنمای جامع و کاربردی
        </div>
        <div className="col-span-2 rounded-md">
          داربست فلزی یکی از مهم‌ترین اجزای پروژه‌های ساخت‌وساز و نوسازی است که
          برای دسترسی به نقاط مرتفع ساختمان‌ها و سازه‌ها استفاده می‌شود. با توجه
          به رشد روزافزون ساخت‌وساز در کرمان، نیاز به خدمات حرفه‌ای نصب داربست
          فلزی بیش از پیش احساس می‌شود. در این مقاله، به بررسی اصول، مزایا، و
          نکات کلیدی نصب داربست فلزی در کرمان می‌پردازیم.
        </div>
        <div className="col-span-1">
          <button className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-external-link"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
