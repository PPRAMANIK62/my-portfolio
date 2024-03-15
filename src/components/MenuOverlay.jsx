import Navlink from "./Navlink.jsx";

function MenuOverlay({ links, navBarOpen, setNavBarOpen }) {
  return (
    <ul
      className={`flex flex-col pb-4 items-center origin-top duration-300 ${
        navBarOpen ? "scale-y-100" : "scale-y-0"
      }`}
    >
      {links.map((link, index) => (
        <li key={index}>
          <Navlink
            href={link.path}
            title={link.title}
            setNavBarOpen={setNavBarOpen}
          />
        </li>
      ))}
    </ul>
  );
}

export default MenuOverlay;
