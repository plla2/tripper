import { Link, useNavigate } from "react-router-dom";
import logoIcon from "../../assets/icons/logoIcon.png";
import { HEADER_LIST } from "../../constants";
import Button from "../common/button/Button";
import { IoSearch } from "@react-icons/all-files/io5/IoSearch";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import "./header.scss";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="container">
      <Link className="logo-container" to={"/"}>
        <img src={logoIcon} className="logoIcon" />
        <span className="logoText">Tripper</span>
      </Link>
      <div className="list-container">
        <ul className="list">
          {HEADER_LIST.map((item) => (
            <li key={item.id} className="item">
              <Link to={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <label htmlFor="search">
          <IoSearch />
        </label>
        <input type="text" id="search" placeholder="검색" />
      </div>
      <div className="info-container">
        {isLogin ? (
          <>
            <Button
              onClick={() => console.log("로그아웃!")}
              className="header-btn"
            >
              로그아웃
            </Button>
            <Button onClick={() => navigate("/mypage")}>
              <FaUserCircle />
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => navigate("/login")} className="header-btn">
              로그인
            </Button>
            <Button onClick={() => navigate("/signup")} className="header-btn">
              회원가입
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
