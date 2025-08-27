import login_icon from "../../assets/login_icon.svg";
import book_icon from "../../assets/book_icon.svg";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const Nav = () => {
  return (
    <nav className="flex flex-col sticky top-0 h-1/2 w-1/4 bg-black gap-y-32 px-8 py-16 z-20">
      <h1 className="text-white text-7xl text-center">Doth</h1>
      <div className="flex gap-y-24 items-center w-full flex-col">
        <div className="flex flex-row gap-16">
          <img src={login_icon} alt="Log in Icon" width={35} />
          <div className="flex flex-col w-max gap-8">
            <motion.button
              whileHover={{ scale: 1.15 }}
              className="text-white text-4xl text-center cursor-pointer"
            >
              Log In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15 }}
              className="text-white text-4xl text-center cursor-pointer"
            >
              Sign Up
            </motion.button>
          </div>
        </div>
        <div className="flex flex-row w-max gap-16">
          <img src={book_icon} alt="Book List Icon" width={35} />
          <Link to="/">
            <motion.button
              className="text-white text-4xl text-center cursor-pointer"
              whileHover={{ scale: 1.15 }}
            >
              Book List
            </motion.button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
