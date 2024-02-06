import AuthForm from "../../components/authform/AuthForm";
import { FormProps } from "../../types";

const Login = ({ setIsLogin, loginType, setLoginType }: FormProps) => {
  return (
    <AuthForm
      setIsLogin={setIsLogin}
      loginType={loginType}
      setLoginType={setLoginType}
    />
  );
};

export default Login;
