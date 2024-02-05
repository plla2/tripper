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
      <ul className="list">
        {HEADER_LIST.map((item) => (
          <li key={item.id} className="item">
            <Link to={item.url} className="item-text">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="search-container">
        <input
          type="text"
          id="search"
          placeholder="지역,테마 등 키워드 입력"
          className="search-input"
        />
        <span className="underline"></span>
        <Button onClick={() => console.log("검색!")} className="searchBtn">
          <IoSearch />
        </Button>
      </div>
      {isLogin ? (
        <div className="info-container">
          <Button onClick={() => navigate("/mypage")} className="user">
            <FaUserCircle />
          </Button>
          <Button onClick={() => console.log("로그아웃!")}>로그아웃</Button>
        </div>
      ) : (
        <div className="info-container">
          <Button onClick={() => navigate("/login")} className="first">
            로그인
          </Button>
          <Button onClick={() => navigate("/signup")}>회원가입</Button>
        </div>
      )}
    </div>
  );
};

export default Header;
