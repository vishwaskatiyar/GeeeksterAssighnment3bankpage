import PropTypes from "prop-types";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-white">Your Bank</h1>
        <nav>
          <ul className="flex space-x-4">
            <NavItem link="#" text="Home" />
            <NavItem link="#" text="About" />
            <NavItem link="#" text="Services" />
            <NavItem link="#" text="Contact" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

const NavItem = ({ link, text }) => (
  <li>
    <a
      href={link}
      className="px-3 py-2 rounded-md text-white hover:bg-blue-600 transition-colors duration-300"
    >
      {text}
    </a>
  </li>
);

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Header;
