import { Helmet } from "react-helmet-async";

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
        <link rel="canonical" href="https://kerman-darbast.vercel.app/contact-us" />
      </Helmet>
    <div className="flex flex-col items-start justify-evenly h-[40vh] md:container md:mx-auto mx-2">
      <h5 className="font-bold text-3xl">با ما در تماس باشید</h5>
      <p>جهت در یافت مشاوره رایگان تماس بگیرید.</p>
      <button
        onClick={() => copyToClipboard("09399943527")}
        className=" p-5 rounded-lg"
        type="button"
      >
        اطلاعات تماس 1 :09131968481
      </button>
      <button
        onClick={() => copyToClipboard("09399943527")}
        className=" p-5 rounded-lg"
        type="button"
      >
        اطلاعات تماس 2 :09399943527
      </button>
      <p>
      آدرس :کرمان -  بلوار فرزانگان
      </p>
    </div>
    </>
  );
};

export default ContactUs;
