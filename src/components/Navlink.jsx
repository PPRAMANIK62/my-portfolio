import Link from "next/link.js";
import { useEffect } from "react";

function Navlink({
  href,
  title,
  setNavBarOpen = () => {
    return null;
  },
}) {
  useEffect(() => {
    window.onscroll = () => {
      setNavBarOpen(false);
    };
  }, [setNavBarOpen]);

  return (
    <Link
      href={href}
      onClick={() => setNavBarOpen(false)}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}

export default Navlink;
