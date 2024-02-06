import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logoIcon from "../../assets/icons/logoIcon.png";
import Button from "../../components/common/button/Button";
import "./login.scss";

type dataType = {
  id: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataType>();
  const navigate = useNavigate();

  const successFn = () => {
    navigate("/");
    localStorage.setItem("userInfo", "login");
  };

  const failFn = () => {
    alert("해당 아이디는 존재하지 않습니다.");
  };

  const submitForm: SubmitHandler<dataType> = (data) => {
    data.id === "test123" && data.password === "12345" ? successFn() : failFn();
  };
  return (
    <div className="login-container">
      <div className="formHeader">
        <img src={logoIcon} className="logoIcon" />
        <span className="logoText">Tripper</span>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit(submitForm)}>
        <div className="id-container">
          <input
            type="text"
            id="id"
            placeholder="아이디"
            {...register("id", { required: true, maxLength: 10, minLength: 6 })}
          />
          {errors.id && <p className="err-message">아이디는 6~10자입니다.</p>}
        </div>
        <div className="password-container">
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            {...register("password", { required: true, minLength: 5 })}
          />
          {errors.id && (
            <p className="err-message">비밀번호는 5자이상입니다.</p>
          )}
        </div>
        <Button type="submit" className="login-btn">
          로그인
        </Button>
      </form>
      <div className="formInfo">
        <a href="#">계정찾기</a> {"/"} <a href="#">비밀번호 찾기</a>
      </div>
    </div>
  );
};

export default Login;
