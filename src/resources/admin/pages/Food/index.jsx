import { Button } from "react-bootstrap";
import { BsPencilSquare, BsXSquare, BsPlusSquare, BsFillEyeFill } from "react-icons/bs";
import PaginationComponent from "../../../../components/Pagination";

const FoodPage = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h3 className="card-title d-flex" style={{ flex: "1" }}>
                Danh sách món ăn
              </h3>
              <Button
                variant="outline-success"
                className="d-flex gap-2 align-items-center"
              >
                <BsPlusSquare />
                Thêm mới
              </Button>
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
                      Rendering engine
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="example2"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Browser: activate to sort column ascending"
                    >
                      Browser
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="example2"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Platform(s): activate to sort column ascending"
                    >
                      Platform(s)
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="example2"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Engine version: activate to sort column ascending"
                    >
                      Engine version
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="example2"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="CSS grade: activate to sort column ascending"
                    >
                      CSS grade
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
                  <tr className="odd">
                    <td className="dtr-control sorting_1" tabIndex="0">
                      Gecko
                    </td>
                    <td>Firefox 1.0</td>
                    <td>Win 98+ / OSX.2+</td>
                    <td>1.7</td>
                    <td>A</td>
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

export default FoodPage;
