import Header from "../../header/Header";
import Article from "./Article";
import Contact from "./Contact";
import Firstdiv from "./Firstdiv";
import Imagessec from "./Imagessec";
import Services from "./Services";

const Home = () => {
  return (
    <div>
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
