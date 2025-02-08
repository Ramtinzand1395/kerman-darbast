import { Helmet } from "react-helmet-async";
import img1 from "../../assets/IMG-20241217-WA0019.webp";

const ContactUs = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => alert(`"${text}" به کلیپ‌بورد کپی شد!`),
      (err) => console.error("خطا در کپی کردن: ", err)
    );
  };
  return (
    <>
      <Helmet>
        <title>تماس ما | داربست فلزی در کرمان</title>
        <meta
          name="description"
          content="شرکت خدمات داربست فلزی کرمان ارائه‌دهنده خدمات نصب، اجاره، و طراحی داربست فلزی با کیفیت بالا و مطابق استانداردهای ایمنی ایران. با ما بیشتر آشنا شوید."
        />
        <meta
          name="keywords"
          content="، داربست فلزی در کرمان ، تماس با ما, شرکت خدمات داربست فلزی, نصب داربست کرمان, اجاره داربست, طراحی داربست فلزی"
        />
        <link
          rel="canonical"
          href="https://kermandarbast.ir/contact-us"
        />
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  md:container md:mx-auto mx-2">
        <div className="flex flex-col items-start gap-14">
          <h1 className="font-bold mt-3 text-3xl">با ما در تماس باشید</h1>
          <p>جهت در یافت مشاوره رایگان تماس بگیرید.</p>
          <button
            onClick={() => copyToClipboard("09399943527")}
            className=" rounded-lg"
            type="button"
          >
            اطلاعات تماس 1 :09131968481
          </button>
          <button
            onClick={() => copyToClipboard("09399943527")}
            className=" rounded-lg"
            type="button"
          >
            اطلاعات تماس 2 :09399943527
          </button>
          <p>آدرس :کرمان - بلوار فرزانگان</p>
        </div>
        <div className="">
          <img
           
            src={img1}
            className="w-full aspect-[16/9] object-cover"
            alt="لوله‌های فلزی برای داربست در کرمان"
            title="لوله‌های فلزی برای داربست در کرمان"
            loading="lazy"
          />{" "}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
