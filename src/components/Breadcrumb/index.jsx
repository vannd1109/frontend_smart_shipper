import { NavLink } from "react-router-dom";
import { BsHouse } from 'react-icons/bs';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./styles.css";

const BreadcrumbComponent = ( {title = ''} ) => {
  return (
    <Breadcrumb className="d-flex p-2 !mb-0 border-bottom mb-2">
      <NavLink to="/" className="breadcrumb-item d-flex align-items-center text-success">
        <BsHouse/>
      </NavLink>
      <Breadcrumb.Item active>{title}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
