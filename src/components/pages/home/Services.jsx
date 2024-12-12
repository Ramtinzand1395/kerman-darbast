import aboutus from "../../../assets/aboutUs.jpg";
const Services = () => {
  return (
    <div className="md:ml-32 ml-5 bg-primary grid grid-cols-1 md:grid-cols-2 text-white p-5 md:p-20 gap-10">
      <div className="flex flex-col items-start justify-around h-[70vh] md:h-auto">
        <h2>خدمات ما</h2>
        <div className="">
          <h3>نصب و راه اندازی داربست فلزی در کرمان</h3>
          <p className="mt-5">
            ارائه خدمات نصب داربست‌های فلزی برای پروژه‌های ساختمانی، صنعتی و
            تبلیغاتی با رعایت اصول ایمنی و استانداردهای لازم.
          </p>
        </div>
        <div className="">
          <h3>اجاره داربست فلزی</h3>
          <p className="mt-5">
            اجاره انواع داربست‌های فلزی با سایز و طراحی‌های مختلف برای استفاده
            کوتاه‌مدت یا بلندمدت در پروژه‌ها.
          </p>
        </div>
        <div className="">
          <h3>تعمیر و نگهداری داربست</h3>
          <p className="mt-5">
            بازبینی، تعمیر و تعویض قطعات آسیب‌دیده داربست برای اطمینان از ایمنی
            و عملکرد صحیح آن
          </p>{" "}
        </div>
        <div className="">
          <h3>طراحی و اجرای داربست خاص</h3>
          <p className="mt-5">
            طراحی و اجرای داربست‌های سفارشی برای کاربردهای خاص مانند نمای
            ساختمان، دکوراسیون‌های ویژه یا استفاده در نمایشگاه‌ها و رویدادها
          </p>{" "}
        </div>
      </div>
      <div className="justify-self-end">
        <img src={aboutus} alt="aboutUs.jpg" />
      </div>
    </div>
  );
};

export default Services;
