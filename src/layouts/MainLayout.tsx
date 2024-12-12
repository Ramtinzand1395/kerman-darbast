import React, { ReactNode } from "react";
import Navbar from "../components/header/navbar/Navbar";
import Footer from "../components/pages/footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => alert(`"${text}" به کلیپ‌بورد کپی شد!`),
      (err) => console.error("خطا در کپی کردن: ", err)
    );
  };
  return (
    <div>
      <Navbar />
      {children}
      <div className="fixed bottom-0 left-0 bg-blue-900 rounded-md flex items-center justify-around p-2 md:p-5 w-full text-white border-t-white border-t-2">
        <h4 className="layout-text absolute right-10 top-0 md:top-4"></h4>
        <div className="h-[14vh] md:h-auto"></div>
        <button onClick={() => copyToClipboard("09399943527")} type="button">
          اطلاعات تماس 1 :09131968481
        </button>
        <button onClick={() => copyToClipboard("09399943527")} type="button">
          اطلاعات تماس 2 :09399943527
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
