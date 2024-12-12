import { Route, Routes } from "react-router";
import Page404 from "./components/utils/Page404";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/pages/home/Home";

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
