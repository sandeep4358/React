import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

import { BsFillPersonFill } from "react-icons/bs";

import styles from "./Sidebar.module.css";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list_item}>
        <NavLink to="/">
          <AiFillHome size={25} />
          <div>Dashboard</div>
        </NavLink>
      </li>
      <li className={styles.list_item}>
        <NavLink to="/add">
          <BiAddToQueue size={25} />
          <div>Add Expense</div>
        </NavLink>
      </li>
      <li className={styles.list_item}>
        <NavLink to="/search">
          <FiSearch size={25} />
          <div>Search Expense</div>
        </NavLink>
      </li>
      <li className={styles.list_item}>
        <NavLink to="/profile">
          <BsFillPersonFill size={25} />
          <div>Profile</div>
        </NavLink>
      </li>
      <li className={styles.list_item}>
        <Link to="/logout">
          <AiOutlineLogout size={25} />
          <div>Logout</div>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
