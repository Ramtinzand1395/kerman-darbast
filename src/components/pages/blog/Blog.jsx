import { Helmet } from "react-helmet-async";
import img1 from "../../../assets/IMG-20241217-WA0019.webp";
import img2 from "../../../assets/IMG-20241217-WA0010.webp";
import img3 from "../../../assets/IMG-20241217-WA0014.webp";
import { Link } from "react-router-dom";
const Blog = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "نصب داربست فلزی در کرمان: راهنمای جامع و کاربردی",
    // !ادرس درست شه
    image: [
      "https://kermandarbast.ir/assets/IMG-20241217-WA0019.webp",
      "https://kermandarbast.ir/assets/IMG-20241217-WA0010.webp",
    ],
    author: {
      "@type": "Person",
      name: "کرمان داربست",
      url: "https://example.com",
    },
    publisher: {
      "@type": "Organization",
      name: "کرمان داربست",
      logo: {
        "@type": "ImageObject",
        url: "https://kermandarbast.ir/assets/logo.webp",
      },
    },
    datePublished: "2024-12-23",
    dateModified: "2024-12-23",
    description:
      "نصب داربست فلزی در کرمان با بهترین کیفیت و قیمت مناسب. خدمات حرفه‌ای شامل طراحی، نصب و مشاوره برای پروژه‌های ساختمانی و صنعتی.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://example.com/your-article-url",
    },
  };
  return (
    <div className=" md:container md:mx-auto mx-2">
      <Helmet>
        <meta
          name="description"
          content="نصب داربست فلزی در کرمان با بهترین کیفیت و قیمت مناسب. خدمات حرفه‌ای شامل طراحی، نصب و مشاوره برای پروژه‌های ساختمانی و صنعتی.داربست فلزی در کرمان"
        />
        <meta
          name="keywords"
          content="نصب داربست فلزی, داربست کرمان, اجاره داربست, داربست فلزی استاندارد, طراحی داربست, حمل و نقل داربست, نصب داربست صنعتی , داربست فلزی در کرمان"
        />

        <meta name="author" content="کرمان داربست" />
        <meta
          property="title"
          content="نصب داربست فلزی در کرمان: راهنمای جامع و کاربردی"
        />
        <meta
          name="description"
          content="نصب داربست فلزی در کرمان با بهترین قیمت و کیفیت. خدمات حرفه‌ای شامل طراحی، نصب، و مشاوره پروژه‌های ساختمانی و صنعتی مطابق استانداردهای ایمنی."
        />

        {/*
        ادرس درست شه
        */}
        <meta
          property="og:image"
          content="https://kermandarbast.ir/assets/IMG-20241217-WA0019.webp"
        />
        <meta
          property="og:url"
          content="https://kermandarbast.ir/blog/kerman-scaffolding-installation"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title> راهنمای جامع و کاربردی | داربست فلزی در کرمان</title>
        <link
          rel="canonical"
          href="https://kermandarbast.ir/contact-us"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Helmet>
      <article>
        <header>
          <h1 className="my-5 text-primary">
            نصب داربست فلزی در کرمان: راهنمای جامع و کاربردی
          </h1>
          <p>تاریخ انتشار: 23 دسامبر 2024</p>
          <img
            src={img3}
            alt="لوله‌های فلزی برای داربست در کرمان"
            title="لوله‌های فلزی برای داربست در کرمان"
            width={"100vw"}
            height={"400px"}
            className="w-full h-[400px] my-4"
            loading="lazy"
          />
        </header>
        <section className="my-10">
          <p>
            داربست فلزی یکی از مهم‌ترین اجزای پروژه‌های ساخت‌وساز و نوسازی است
            که برای دسترسی به نقاط مرتفع ساختمان‌ها و سازه‌ها استفاده می‌شود. با
            توجه به رشد روزافزون ساخت‌وساز در کرمان، نیاز به خدمات حرفه‌ای نصب
            داربست فلزی بیش از پیش احساس می‌شود. در این مقاله، به بررسی اصول،
            مزایا، و نکات کلیدی نصب داربست فلزی در کرمان می‌پردازیم.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold my-6">داربست فلزی چیست؟</h2>
          <p>
            داربست فلزی یک سازه موقت است که معمولاً از لوله‌های فولادی یا
            گالوانیزه ساخته می‌شود. این سازه با اتصال قطعات مختلف، امکان دسترسی
            به بخش‌های مرتفع ساختمان را برای کارگران فراهم می‌کند.
          </p>

          <img
            src={img1}
            width={"100vw"}
            height={"400px"}
            alt="لوله‌های فلزی برای داربست در کرمان"
            title="لوله‌های فلزی برای داربست در کرمان"
            className="w-full h-[400px] my-4"
            loading="lazy"
          />
        </section>

        <section className="my-10">
          <h3 className="text-lg font-bold my-4">
            <Link className="text-blue-500 underline" to={`/blogs/blog/اجزای اصلی داربست فلزی: راهنمای جامع برای آشنایی با قطعات داربست فلزی`}>
            اجزای اصلی داربست فلزی:
            </Link>

          </h3>
          <ul className="list-disc ml-5  flex flex-col gap-5">
            <li>
              <strong>لوله‌های فلزی:</strong> برای تحمل بار و ساختار اصلی
              داربست.
            </li>
            <li>
              <strong>اتصالات و بست‌ها:</strong> برای اتصال ایمن لوله‌ها.
            </li>
            <li>
              <strong>پایه‌ها و جک‌ها:</strong> برای ایجاد تعادل و ثبات.
            </li>
            <li>
              <strong>تخته‌ها و سکوی کار:</strong> برای ایستادن و انجام کارهای
              مختلف.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold my-6">
            چرا داربست فلزی در کرمان محبوب است؟
          </h2>
          <p className="my-5">
            با توجه به شرایط آب‌وهوایی و رشد پروژه‌های عمرانی در کرمان، داربست
            فلزی به دلایل زیر محبوبیت دارد:
          </p>
          <ul className="list-disc ml-5 flex flex-col gap-5">
            <li>
              <strong>استحکام و ایمنی بالا:</strong> داربست‌های فلزی توانایی
              تحمل بارهای سنگین را دارند و در برابر شرایط مختلف مقاوم هستند.
            </li>
            <li>
              <strong>نصب سریع و آسان:</strong> با وجود ابزارهای مدرن، نصب
              داربست فلزی به‌سرعت انجام می‌شود.
            </li>
            <li>
              <strong>قابلیت استفاده مجدد:</strong> لوله‌ها و اتصالات داربست
              فلزی دوام بالایی دارند و می‌توان آن‌ها را در پروژه‌های مختلف
              استفاده کرد.
            </li>
            <li>
              <strong>مقاومت در برابر خوردگی:</strong> استفاده از لوله‌های
              گالوانیزه باعث افزایش طول عمر داربست در شرایط آب‌وهوایی مختلف
              می‌شود.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold my-6">
            <Link to="/">خدمات نصب داربست فلزی در کرمان</Link>
          </h2>
          <ul className="list-disc ml-5 flex flex-col gap-5">
            <li>
              <strong>طراحی و مشاوره:</strong> ارائه طرح‌های مناسب برای
              پروژه‌های مختلف با توجه به نیاز مشتریان.
            </li>
            <li>
              <strong>نصب و اجرای حرفه‌ای:</strong> نصب داربست با استفاده از
              تجهیزات استاندارد و تیم مجرب.
            </li>
            <li>
              <strong>بازرسی و تعمیر:</strong> بررسی مداوم و تعمیر قطعات
              آسیب‌دیده برای افزایش ایمنی.
            </li>
          </ul>

          <img
            src={img2}
            alt="لوله‌های فلزی برای داربست در کرمان"
            title="لوله‌های فلزی برای داربست در کرمان"
            width={"100vw"}
            height={"400px"}
            className="w-full h-[400px] my-4"
            loading="lazy"
          />
        </section>
        <section>
          <h2 className="text-xl font-bold my-6">سخن پایانی</h2>
          <p className="mb-5">
            نصب داربست فلزی در کرمان یک خدمت ضروری برای پروژه‌های عمرانی و صنعتی
            است. با انتخاب تیمی حرفه‌ای و استفاده از تجهیزات استاندارد،
            می‌توانید ایمنی و کیفیت کار را تضمین کنید. برای مشاوره رایگان،{" "}
            <Link to="/contact-us" className="text-blue-500 underline">
              همین امروز با ما تماس بگیرید.
            </Link>
          </p>
        </section>
      </article>
    </div>
  );
};

export default Blog;
