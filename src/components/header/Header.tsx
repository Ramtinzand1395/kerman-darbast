import React from 'react'
import baner from "../../assets/Baner.jpg";

const Header = () => {
  return (
    <>
     {/* banner */}
     <header className="my-10">
     <div className="">
       <img src={baner} className="w-full h-auto md:h-[60vh]" alt="" />
     </div>
     {/* blue-part */}
     <div className="bg-primary p-10 flex flex-col items-center justify-center text-white">
       <h1 className="text-2xl md:text-6xl shadow">اجرا داربست فلزی در کرمان</h1>
       <p className="mt-5 ">بیش از یک دهه تجربه در اجرای داربست فلزی در کرمان</p>
     </div>
   </header>
    </>
  )
}

export default Header