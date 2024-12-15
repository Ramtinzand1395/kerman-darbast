import contact from "../../assets/contact.webp";
import aboutus from "../../assets/aboutUs.webp";
import baner from "../../assets/Baner.webp";

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 container md:mx-auto mx-2">
      <img src={contact} className="w-full h-[40vh]" alt="contact.webp" />
      <img src={aboutus} className="w-full h-[40vh]" alt="aboutUs.webp" />
      <img src={baner} className="w-full h-[40vh]" alt="Baner.webp" />
    </div>
  );
};

export default Gallery;
