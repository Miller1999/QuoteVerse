import { Fragment } from "react";
import Logo from "../../Assets/github.svg";

const Footer = () => {
  return (
    <Fragment>
      <footer className="flex items-center fixed bottom-2 left-[35vw] gap-1">
        <span>Developed by Miller Arias -</span>
        <a
          href="https://github.com/Miller1999"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1"
        >
          <img src={Logo} alt="Github" className="w-4 h-4" />
          @miller1999
        </a>
      </footer>
    </Fragment>
  );
};

export default Footer;
