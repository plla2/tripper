import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Mypage from "./pages/mypage/Mypage";
import { useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
