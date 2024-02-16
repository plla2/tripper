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

export interface LocalItemsType {
  data: {
    addr1: string;
    addr2: string;
    areacode: string;
    booktour: string;
    cat1: string;
    cat2: string;
    cat3: string;
    contentid: string;
    contenttypeid: string;
    cpyrhtDivCd: string;
    createdtime: string;
    firstimage: string;
    firstimage2: string;
    mapx: string;
    mapy: string;
    mlevel: string;
    modifiedtime: string;
    sigungucode: string;
    tel: string;
    title: string;
    zipcode: string;
  }[];
  header: string;
  headerTitle: string;
}
