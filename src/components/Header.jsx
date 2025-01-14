import { useState, useEffect } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { MdOutlineExitToApp } from "react-icons/md";
import { useSignOut } from "../hooks/useSignOut";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDocument } from "../hooks/useDocument";
import { useThemeToggler } from "../hooks/useThemeToggler";

const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "light";
};

function Header() {
  const { user } = useGlobalContext();
  const { document: _document } = useDocument("users", user.uid);
  const { signout } = useSignOut();
  const [isScrolled, setIsScrolled] = useState(false);
  const { changeTheme, theme } = useThemeToggler();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

}

export default Header;
