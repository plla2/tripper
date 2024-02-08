export type FormData = {
  id: string;
  password: string;
};

export interface FormProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  loginType: boolean;
  setLoginType: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HeaderProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginType: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface itemType {
  contentid: string;
  firstimage: string;
  title: string;
}
