import AuthForm from "../../components/authform/AuthForm";
import { FormProps } from "../../types";

const Signup = ({ setIsLogin, loginType, setLoginType }: FormProps) => {
  return (
    <div>
      <AuthForm
        setIsLogin={setIsLogin}
        loginType={loginType}
        setLoginType={setLoginType}
      />
    </div>
  );
};

export default Signup;
