import React from 'react'
import baner from "../../assets/baner.webp";

const Header = () => {
  return (
    <>
     {/* banner */}
     <header className="my-10">
     <div className="">
       <img src={baner} className="w-full h-auto md:h-[60vh]" height={"60vh"} width={"100vw"} alt="baner.webp" />
     </div>
     {/* blue-part */}
     <div className="bg-primary h-[30vh] w-full p-10 flex flex-col items-center justify-center text-white">
       <h2 className="text-base md:text-6xl shadow">
       خدمات نصب و اجرای داربست فلزی در کرمان
          </h2>
       <p className="mt-10 ">بیش از دو دهه تجربه در اجرای داربست فلزی در کرمان</p>
     </div>
   </header>
    </>
  )
}

export default Header