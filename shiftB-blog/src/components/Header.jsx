import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.headerLink}>
        Blog
      </Link>
      <Link to="contact">
        <div className={classes.headerLink}>お問い合わせ</div>
      </Link>
    </header>
  );
};

export default Header;
