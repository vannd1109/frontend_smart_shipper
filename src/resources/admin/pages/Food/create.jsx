import { useEffect } from "react";

const CreateFood = () => {
  useEffect(() => {
    document.title = "Thêm mới món ăn";
  });

  const handleChange = () => {};
  return (
    <>
      <div className="card card-default">
        <div className="card-header">
          <h3 className="card-title">Thêm món mới</h3>
          <div className="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
            >
              <i className="fas fa-minus" />
            </button>
          </div>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="d-flex" htmlFor="inputSuccess">
                  Tên món ăn
                </label>
                <input
                  type="text"
                  className="form-control is-valid"
                  id="inputSuccess"
                  placeholder="Enter ..."
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="d-flex">Danh mục</label>
                <select
                  className="form-control select2"
                  style={{ width: "100%" }}
                  defaultValue=""
                  onChange={handleChange}
                >
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>California</option>
                  <option>Delaware</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateFood;
