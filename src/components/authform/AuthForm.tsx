import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import logoIcon from "../../assets/icons/logoIcon.png";
import { useNavigate } from "react-router-dom";
import { FormData, FormProps } from "../../types";
import Button from "../common/button/Button";
import "./authForm.scss";

const AuthForm = ({ setIsLogin, loginType, setLoginType }: FormProps) => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const successFn = () => {
    if (loginType) {
      navigate("/");
      localStorage.setItem("userInfo", "login");
      setIsLogin(true);
    } else {
      navigate("/login");
      alert("회원가입 완료");
      setLoginType(true);
    }
  };

  const failFn = () => {
    if (loginType) {
      alert("해당 아이디는 존재하지 않습니다.");
    } else {
      alert("회원가입 실패");
    }
  };

  const submitForm: SubmitHandler<FormData> = (data) => {
    data.id === "test123" && data.password === "12345" ? successFn() : failFn();
  };

  useEffect(() => {
    setFocus("id");
  }, [setFocus]);

  return (
    <div className="login-container">
      <div className="wrapper">
        <div className="formHeader">
          <img src={logoIcon} className="logoIcon" />
          <span className="logoText">Tripper</span>
          <h1 className="type-info">{loginType ? "로그인" : "회원가입"}</h1>
        </div>
        <form autoComplete="off" onSubmit={handleSubmit(submitForm)}>
          <div className="id-container">
            <input
              type="text"
              id="id"
              placeholder="아이디"
              className="loginInp"
              {...register("id", {
                required: true,
                maxLength: 10,
                minLength: 6,
              })}
            />
            {errors.id && <p className="err-message">아이디는 6~10자입니다.</p>}
          </div>
          <div className="password-container">
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              className="loginInp"
              {...register("password", { required: true, minLength: 5 })}
            />
            {errors.id && (
              <p className="err-message">비밀번호는 5자이상입니다.</p>
            )}
          </div>
          <Button type="submit" className="login-btn">
            {loginType ? "로그인" : "회원가입"}
          </Button>
        </form>
        <div className="formInfo">
          <a href="#">계정찾기</a> {"/"} <a href="#">비밀번호 찾기</a>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
