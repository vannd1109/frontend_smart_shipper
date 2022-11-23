import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const NotFound = () => {
  return (
    <>
      <h2>Page Not Found</h2>
      <NavLink
        to="/"
        className="d-flex gap-2 justify-content-center align-items-center text-success"
      >
        <BsArrowLeft />
        Trở lại trang chủ
      </NavLink>
    </>
  );
};

export default NotFound;
