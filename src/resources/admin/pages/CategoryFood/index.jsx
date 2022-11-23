import { useEffect, useState } from "react";
import FormatDate from "../../../../utils/FormatDate";
import { Button } from "react-bootstrap";
import {
  BsPencilSquare,
  BsXSquare,
  BsPlusSquare,
  BsFillEyeFill,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import PaginationComponent from "../../../../components/Pagination";
const CategoryFoodList = () => {
  let [categoryFoodList, setCategoryFoodList] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    await fetch("http://localhost:8000/categories-food", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    }).then(res => 
      res.json()
    ).then(result => {
      setCategoryFoodList([...result]);
    })
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h3 className="card-title d-flex" style={{ flex: "1" }}>
                Danh sách danh mục
              </h3>
              <NavLink
                to="/admin/food/category/add"
                className="btn btn-outline-success d-flex gap-2 align-items-center"
              >
                <BsPlusSquare />
                Thêm mới
              </NavLink>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table
                id="example2"
                className="table table-bordered table-hover dataTable dtr-inline"
                aria-describedby="example2_info"
              >
                <thead>
                  <tr>
                    <th
                      className="sorting sorting_asc"
                      tabIndex="0"
                      aria-controls="example2"
                      rowSpan="1"
                      colSpan="1"
                      aria-sort="ascending"
                      aria-label="Rendering engine: activate to sort column descending"
                    >
                      Mã danh mục
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="example2"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Browser: activate to sort column ascending"
                    >
                      Tên danh mục
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="example2"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Platform(s): activate to sort column ascending"
                    >
                      Ảnh danh mục
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="example2"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Platform(s): activate to sort column ascending"
                    >
                      Thời gian tạo
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="example2"
                      rowSpan="1"
                      colSpan="1"
                    >
                      Hành động
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categoryFoodList.map((item, i) => (
                    <tr className={i % 2 === 0 ? 'odd' : 'even'} key={i}>
                      <td className="dtr-control sorting_1" tabIndex="0">
                        {item.code}
                      </td>
                      <td>{item.name}</td>
                      <td>1.7</td>
                      <td>{ <FormatDate dateToFormat={item.createdAt}/>}</td>
                      <td className="d-flex gap-2 justify-content-center">
                        <Button variant="outline-info" size="sm">
                          <BsFillEyeFill />
                        </Button>
                        <Button variant="outline-warning" size="sm">
                          <BsPencilSquare />
                        </Button>
                        <Button variant="outline-danger" size="sm">
                          <BsXSquare />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <PaginationComponent />
        </div>
      </div>
    </>
  );
};

export default CategoryFoodList;
