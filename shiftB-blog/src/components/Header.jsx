import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-title">
        Blog
      </Link>
      <div className="header-nav">お問い合わせ</div>
    </header>
  );
};

export default Header;
