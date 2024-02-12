import footerImg from "/images/emo.png";
import { FOOTER_LIST } from "../../../constants";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={footerImg} alt="푸터 이미지" />
      <div className="footer-info">
        {FOOTER_LIST.map((item) => (
          <div className="footer-item" key={item.id}>
            <a href={item.url}>{item.text}</a>
          </div>
        ))}
      </div>
      <div className="copyright">
        <span>ⓒ 2024. Plla2. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
