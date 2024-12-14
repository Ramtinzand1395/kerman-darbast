import { Route, Routes } from "react-router";
import Page404 from "./components/utils/Page404";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/pages/home/Home";
import Aboutus from "./components/pages/Aboutus";
import Gallery from "./components/pages/Gallery";
import ContactUs from "./components/pages/ContactUs";
import Blogs from "./components/pages/blog/Blogs";

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
          path="/articles"
          element={
            <MainLayout>
              <Blogs />
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
