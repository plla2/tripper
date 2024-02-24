import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Mypage from "./pages/mypage/Mypage";
import { useState } from "react";
import Footer from "./components/common/footer/Footer";
import Location from "./pages/location/Location";
import Theme from "./pages/theme/Theme";
import Map from "./pages/map/Map";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loginType, setLoginType] = useState(true);

  return (
    <BrowserRouter>
      <Header
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        setLoginType={setLoginType}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/location" element={<Location />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/map" element={<Map />} />
        <Route
          path="/login"
          element={
            <Login
              setIsLogin={setIsLogin}
              loginType={loginType}
              setLoginType={setLoginType}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
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
  );
};

export default App;
