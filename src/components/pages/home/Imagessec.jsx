import contact from "../../../assets/contact.webp";
import aboutus from "../../../assets/aboutUs.webp";
import baner from "../../../assets/baner.webp";

const Imagessec = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
      <img height={"60vh"} width={"100vw"} src={contact} className="w-full h-[40vh]" alt="contact.webp" />
      <img height={"60vh"} width={"100vw"} src={aboutus} className="w-full h-[40vh]" alt="aboutUs.webp" />
      <img height={"60vh"} width={"100vw"} src={baner} className="w-full h-[40vh]" alt="Baner.webp" />
    </div>
  );
};

export default Imagessec;
