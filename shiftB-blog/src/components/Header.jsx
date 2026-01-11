import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.headerLink}>
        Blog
      </Link>
      <div className={classes.headerLink}>お問い合わせ</div>
    </header>
  );
};

export default Header;
