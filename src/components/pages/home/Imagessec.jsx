import contact from "../../../assets/contact.webp";
import aboutus from "../../../assets/aboutUs.webp";
import baner from "../../../assets/baner.webp";

const Imagessec = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
      <img
        src={contact}
        className="w-full aspect-[15/9] object-cover"
        alt="contact.webp"
      />
      <img
        src={aboutus}
        className="w-full aspect-[15/9] object-cover"
        alt="aboutUs.webp"
      />
      <img
        src={baner}
        className="w-full aspect-[15/9] object-cover"
        alt="Baner.webp"
      />
    </div>
  );
};

export default Imagessec;
