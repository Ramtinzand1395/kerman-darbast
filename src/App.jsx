import { Route, Routes } from "react-router";
import Page404 from "./components/utils/Page404";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/pages/home/Home";
import Aboutus from "./components/pages/Aboutus";
import Gallery from "./components/pages/Gallery";
import ContactUs from "./components/pages/ContactUs";
import Blogs from "./components/pages/blog/Blogs";
import Blog from "./components/pages/blog/Blog";
import Blog2 from "./components/pages/blog/Blog2";

const App = () => {
  return (
    <div className="">
      <Routes>
        {/* Routes that use MainLayout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
           <Route
          path="/about-us"
          element={
            <MainLayout>
              <Aboutus />
            </MainLayout>
          }
        />
          <Route
          path="/gallery"
          element={
            <MainLayout>
              <Gallery />
            </MainLayout>
          }
        />
           <Route
          path="/contact-us"
          element={
            <MainLayout>
              <ContactUs />
            </MainLayout>
          }
        />
         <Route
          path="/blogs"
          element={
            <MainLayout>
              <Blogs />
            </MainLayout>
          }
        />
        <Route
          path={`/blogs/blog/نصب داربست فلزی در کرمان: راهنمای جامع و کاربردی`}
          element={
            <MainLayout>
              <Blog />
            </MainLayout>
          }
        />
         <Route
          path={`/blogs/blog/اجزای اصلی داربست فلزی: راهنمای جامع برای آشنایی با قطعات داربست فلزی`}
          element={
            <MainLayout>
              <Blog2 />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <Page404 />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
