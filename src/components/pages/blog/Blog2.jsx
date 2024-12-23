import { Helmet } from "react-helmet-async";
import img1 from "../../../assets/IMG-20241217-WA0014.webp";
import img2 from "../../../assets/IMG-20241217-WA0019.webp";
import img3 from "../../../assets/IMG-20241217-WA0028.webp";

import { Link } from "react-router-dom";

const Blog2 = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "اجزای اصلی داربست فلزی: راهنمای جامع برای آشنایی با قطعات داربست فلزی",
    image: [
      "https://kerman-darbast.vercel.app/assets/IMG-20241217-WA0014.webp",
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
        url: "https://kerman-darbast.vercel.app/assets/logo.webp",
      },
    },
    datePublished: "2024-12-23",
    dateModified: "2024-12-23",
    description:
      "آشنایی با اجزای داربست فلزی و قطعات آن. در این مقاله به بررسی انواع لوله‌ها، اتصالات، پایه‌ها و جک‌ها در داربست فلزی پرداخته می‌شود.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://example.com/your-article-url",
    },
  };

  return (
    <div className="md:container md:mx-auto mx-2">
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="آشنایی با اجزای داربست فلزی و قطعات آن. در این مقاله به بررسی انواع لوله‌ها، اتصالات، پایه‌ها و جک‌ها در داربست فلزی پرداخته می‌شود."
        />
        <meta
          name="keywords"
          content="اجزای داربست فلزی, داربست فلزی, قطعات داربست فلزی, داربست فلزی در کرمان, لوله‌های فلزی, اتصالات داربست فلزی"
        />
        <meta name="author" content="کرمان داربست" />
        <meta
          property="title"
          content="اجزای اصلی داربست فلزی: راهنمای جامع برای آشنایی با قطعات داربست فلزی"
        />
        <meta
          name="description"
          content="در این مقاله به بررسی اجزای اصلی داربست فلزی و کاربردهای آن‌ها پرداخته می‌شود."
        />
        <meta
          property="og:image"
          content="https://kerman-darbast.vercel.app/assets/IMG-20241217-WA0014.webp"
        />
        <meta
          property="og:url"
          content="https://kerman-darbast.vercel.app/blog2/kerman-scaffolding-components"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          اجزای اصلی داربست فلزی: راهنمای جامع برای آشنایی با قطعات داربست فلزی
        </title>
        <link
          rel="canonical"
          href="https://kerman-darbast.vercel.app/blog2/kerman-scaffolding-components"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Helmet>

      <article>
        <section className="my-10">
          <header>
            <h1 className="my-5 text-primary text-4xl">
              اجزای اصلی داربست فلزی: راهنمای جامع برای آشنایی با قطعات داربست
              فلزی
            </h1>
            <img
              src={img2}
              alt="لوله‌های فلزی برای داربست در کرمان"
              title="لوله‌های فلزی برای داربست در کرمان"
              width={"100vw"}
              height={"400px"}
              className="w-full h-[400px] my-4"
              loading="lazy"
            />
          </header>
          <p>
            داربست فلزی یکی از اجزای ضروری در پروژه‌های ساختمانی و صنعتی است.
            این سازه‌های فلزی به منظور فراهم آوردن دسترسی به قسمت‌های مرتفع
            ساختمان‌ها و پروژه‌های عمرانی استفاده می‌شوند. در این مقاله به بررسی
            اجزای اصلی داربست فلزی خواهیم پرداخت و به شما کمک خواهیم کرد تا
            بیشتر با این قطعات و کاربردهای آن‌ها آشنا شوید.
          </p>
        </section>

        <section className="my-10">
          <h2 className="text-xl font-bold my-6">اجزای اصلی داربست فلزی:</h2>
          <ul className="list-disc ml-5 flex flex-col gap-5">
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
        <img
              src={img1}
              alt="لوله‌های فلزی برای داربست در کرمان"
              title="لوله‌های فلزی برای داربست در کرمان"
              width={"100vw"}
              height={"400px"}
              className="w-full h-[400px] my-4"
              loading="lazy"
            />
          <h2 className="text-xl font-bold my-6">
            چرا اجزای داربست فلزی اهمیت دارند؟
          </h2>
          <p>
            هر یک از اجزای داربست فلزی نقش حیاتی در ایمنی و کارایی این سازه‌ها
            دارند. استفاده صحیح از این اجزا می‌تواند خطرات ناشی از سقوط و آسیب
            را کاهش دهد.
          </p>
        </section>

        <section>
        <img
              src={img3}
              alt="لوله‌های فلزی برای داربست در کرمان"
              title="لوله‌های فلزی برای داربست در کرمان"
              width={"100vw"}
              height={"400px"}
              className="w-full h-[400px] my-4"
              loading="lazy"
            />
          <h2 className="text-xl font-bold my-6">
            <Link to="/">خدمات نصب و اجزای داربست فلزی در کرمان</Link>
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
        </section>

        <section>
          <h2 className="text-xl font-bold my-6">سخن پایانی</h2>
          <p className="mb-5">
            آشنایی با اجزای داربست فلزی برای هر کسی که در پروژه‌های ساخت‌وساز
            و صنعتی فعال است، ضروری است. با انتخاب تیم‌های حرفه‌ای و استفاده
            از تجهیزات استاندارد، می‌توانید ایمنی و کیفیت کار را تضمین کنید.
            برای مشاوره رایگان،{" "}
            <Link to="/contact-us" className="text-blue-500 underline">
              همین امروز با ما تماس بگیرید.
            </Link>
          </p>
        </section>
      </article>
    </div>
  );
};

export default Blog2;
