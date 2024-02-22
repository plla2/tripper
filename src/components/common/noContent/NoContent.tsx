import noContents from "/images/noContents.jpg";
import "./nocontent.scss";

type PropsType = {
  title: string;
};

const NoContent = ({ title }: PropsType) => {
  return (
    <div className="noContents-container">
      <img src={noContents} alt="컨텐츠 없음" width={"300px"} />
      <span>정보를 찾을 수 없습니다.</span>
      <span>{`${title}를 변경해주세요.`}</span>
    </div>
  );
};

export default NoContent;
