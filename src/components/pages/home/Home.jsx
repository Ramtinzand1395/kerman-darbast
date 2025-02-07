import { Helmet } from "react-helmet-async";
import Header from "../../header/Header";
import Article from "./Article";
import Contact from "./Contact";
import Firstdiv from "./Firstdiv";
import Imagessec from "./Imagessec";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> صفحه نخست | داربست فلزی در کرمان</title>
        <meta
          name="description"
          content="شرکت خدمات داربست فلزی کرمان ارائه‌دهنده خدمات نصب، اجاره، و طراحی داربست فلزی با کیفیت بالا و مطابق استانداردهای ایمنی ایران. با ما بیشتر آشنا شوید."
        />
        <meta
          name="keywords"
          content=" داربست فلزی در کرمان ، درباره ما, شرکت خدمات داربست فلزی, نصب داربست کرمان, اجاره داربست, طراحی داربست فلزی"
        />
        <link rel="canonical" href="https://kermandarbast.ir" />
      </Helmet>
      <Header />
      <Firstdiv />
      <Services />
      <Article />
      <Imagessec />
      <Contact />
    </div>
  );
};

export default Home;
