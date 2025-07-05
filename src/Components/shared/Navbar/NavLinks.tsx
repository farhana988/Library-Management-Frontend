import { NavLink } from "react-router";
const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
  `text-sm lg:text-base xl:text-xl ${
    isActive
      ? "font-medium underline underline-offset-8"
      : " hover:text-gray-300"
  } `;
const NavLinks = () => {
  return (
    <>
      <NavLink to="/books" className={getLinkClassName}>
        All Book
      </NavLink>
      <NavLink to="/create-book" className={getLinkClassName}>
        Add Books
      </NavLink>
      <NavLink to="/borrow-summary" className={getLinkClassName}>
        Borrow Summary
      </NavLink>
    </>
  );
};

export default NavLinks;
