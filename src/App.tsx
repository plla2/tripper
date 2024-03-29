import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import Mypage from "./pages/mypage/Mypage";
import { Suspense, lazy, useState } from "react";
import Footer from "./components/common/footer/Footer";
import Map from "./pages/map/Map";
import Main from "./pages/main/Main";

const SplitLogin = lazy(() => import("./pages/login/Login"));
const SplitLocation = lazy(() => import("./pages/location/Location"));
const SplitTheme = lazy(() => import("./pages/theme/Theme"));
const SplitSignup = lazy(() => import("./pages/signup/Signup"));
const SplitStay = lazy(() => import("./pages/stay/Stay"));
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loginType, setLoginType] = useState(true);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Header
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          setLoginType={setLoginType}
        />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/location" element={<SplitLocation />} />
          <Route path="/theme" element={<SplitTheme />} />
          <Route path="/stay" element={<SplitStay />} />
          <Route path="/map" element={<Map />} />
          <Route
            path="/login"
            element={
              <SplitLogin
                setIsLogin={setIsLogin}
                loginType={loginType}
                setLoginType={setLoginType}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <SplitSignup
                setIsLogin={setIsLogin}
                loginType={loginType}
                setLoginType={setLoginType}
              />
            }
          />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
