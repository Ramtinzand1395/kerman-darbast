import contact from "../../assets/contact.webp";
import aboutus from "../../assets/aboutUs.webp";
import baner from "../../assets/baner.webp";
import img1 from "../../assets/IMG-20241217-WA0019.webp";
import img2 from "../../assets/IMG-20241217-WA0010.webp";
import img3 from "../../assets/IMG-20241217-WA0014.webp";
import img4 from "../../assets/IMG-20241217-WA0014.webp";
import img5 from "../../assets/IMG-20241217-WA0019.webp";
import img6 from "../../assets/IMG-20241217-WA0028.webp";
import { Helmet } from "react-helmet-async";
const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 container md:mx-auto mx-2">
      <Helmet>
        <title> گالری تصاویر| داربست فلزی در کرمان</title>

        <meta
          name="description"
          content="مشاهده گالری تصاویر مربوط به نصب، اجاره، و طراحی داربست فلزی استاندارد در کرمان و شهرستان‌ها. ارائه خدمات با کیفیت و تجهیزات مدرن."
        />
        <meta
          name="keywords"
          content="داربست فلزی, نصب داربست, داربست در کرمان, اجاره داربست, طراحی داربست, پروژه‌های ساختمانی, پروژه‌های تبلیغاتی"
        />
        <link
          rel="canonical"
          href="https://kerman-darbast.vercel.app/gallery"
        />
      </Helmet>
      <img
        height={"400px"}
        width={"400px"}
        src={contact}
        className="w-full h-[400px]"
        alt="لوله‌های فلزی برای داربست در کرمان"
        title="لوله‌های فلزی برای داربست در کرمان"
        loading="lazy"
      />
      <img
        height={"400px"}
        width={"400px"}
        src={aboutus}
        className="w-full h-[400px]"
        alt="لوله‌های فلزی برای داربست در کرمان"
        title="لوله‌های فلزی برای داربست در کرمان"
        loading="lazy"
      />
      <img
        height={"400px"}
        width={"400px"}
        src={baner}
        className="w-full h-[400px]"
        alt="لوله‌های فلزی برای داربست در کرمان"
        title="لوله‌های فلزی برای داربست در کرمان"
        loading="lazy"
      />
      <img
        height={"400px"}
        width={"400px"}
        src={img1}
        className="w-full h-[400px]"
        alt="لوله‌های فلزی برای داربست در کرمان"
        title="لوله‌های فلزی برای داربست در کرمان"
        loading="lazy"
      />{" "}
      <img
        height={"400px"}
        width={"400px"}
        src={img2}
        className="w-full h-[400px]"
        alt="لوله‌های فلزی برای داربست در کرمان"
        title="لوله‌های فلزی برای داربست در کرمان"
        loading="lazy"
      />{" "}
      <img
        height={"400px"}
        width={"400px"}
        src={img3}
        className="w-full h-[400px]"
        alt="لوله‌های فلزی برای داربست در کرمان"
        title="لوله‌های فلزی برای داربست در کرمان"
        loading="lazy"
      />{" "}
      <img
        height={"400px"}
        width={"400px"}
        src={img4}
        className="w-full h-[400px]"
        alt="لوله‌های فلزی برای داربست در کرمان"
        title="لوله‌های فلزی برای داربست در کرمان"
        loading="lazy"
      />{" "}
      <img
        height={"400px"}
        width={"400px"}
        src={img5}
        className="w-full h-[400px]"
        alt="لوله‌های فلزی برای داربست در کرمان"
        title="لوله‌های فلزی برای داربست در کرمان"
        loading="lazy"
      />{" "}
      <img
        height={"400px"}
        width={"400px"}
        src={img6}
        className="w-full h-[400px]"
        alt="لوله‌های فلزی برای داربست در کرمان"
        title="لوله‌های فلزی برای داربست در کرمان"
        loading="lazy"
      />
    </div>
  );
};

export default Gallery;
