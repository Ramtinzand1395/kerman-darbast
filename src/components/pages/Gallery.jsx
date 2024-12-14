import contact from "../../assets/contact.jpg";
import aboutus from "../../assets/aboutUs.jpg";
import baner from "../../assets/Baner.jpg";

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 container md:mx-auto mx-2">
      <img src={contact} className="w-full h-[40vh]" alt="" />
      <img src={aboutus} className="w-full h-[40vh]" alt="" />
      <img src={baner} className="w-full h-[40vh]" alt="" />
    </div>
  );
};

export default Gallery;
