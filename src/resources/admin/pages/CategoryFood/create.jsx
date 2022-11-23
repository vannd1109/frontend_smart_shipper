import { useEffect, useState } from "react";
import { axios } from "axios";
import { Button } from "react-bootstrap";
import { IoReload } from "react-icons/io5";

const CreateCategoryFood = () => {
  const [codeCategory, setCodeCategory] = useState("");
  const [nameCategory, setNameCategory] = useState("");
  const [imageCategory, setImageCategory] = useState("");
  // const [parentCategory, setParent] = useState("");
  const [isValidName, setValidName] = useState(false);
  const [isValidCode, setValidCode] = useState(false);
  const [isValidImage, setValidImage] = useState(false);

  useEffect(() => {
    document.title = "Thêm mới món ăn";
  });

  const handleChangeName = (event) => {
    const value = event.target.value;
    setNameCategory(value);
    setValidName(value ? false : true);
  };

  const handleChangeCode = (event) => {
    const value = event.target.value;
    setCodeCategory(value);
    setValidCode(value ? false : true);
  };

  const handleChangeImage = (event) => {
    const value = event.target.files[0];
    setImageCategory(value);
    setValidImage(value ? false : true);
    console.log(value);
  };

  const handleReload = () => {
    setCodeCategory("");
    setNameCategory("");
    setValidCode(false);
    setValidName(false);
    setValidImage(false);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setValidCode(codeCategory ? false : true);
    setValidName(nameCategory ? false : true);
    setValidImage(imageCategory ? false : true);
    const category = {
      code: codeCategory,
      name: nameCategory,
    };

    await fetch('http://localhost:8000/categories-food/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category }),
    });
  };

  const handleCancel = () => {};

  return (
    <>
      <div className="card card-default">
        <div className="card-header">
          <h3 className="card-title d-flex gap-2 align-items-center">
            Thêm món danh mục món ăn
            <strong style={{ cursor: "pointer" }} onClick={handleReload}>
              <IoReload color="blue" />
            </strong>
          </h3>
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
              <form method="POST" onSubmit={handleCreate}>
                <div className="form-group">
                  <label className="d-flex" htmlFor="code-category">
                    Mã danh mục
                  </label>
                  <input
                    type="text"
                    className={`form-control border ${
                      isValidCode ? "border-danger" : ""
                    }`}
                    id="code-category"
                    placeholder="Nhập mã danh mục"
                    name="code-category"
                    value={codeCategory}
                    onChange={(event) => handleChangeCode(event)}
                  />
                  {isValidCode && (
                    <small className="d-flex mt-2 text-danger">
                      Vui lòng mã danh mục
                    </small>
                  )}
                </div>
                <div className="form-group">
                  <label className="d-flex" htmlFor="name-category">
                    Tên danh mục
                  </label>
                  <input
                    type="text"
                    className={`form-control border ${
                      isValidName ? "border-danger" : ""
                    }`}
                    id="name-category"
                    placeholder="Nhập tên danh mục"
                    name="name-category"
                    value={nameCategory}
                    onChange={(event) => handleChangeName(event)}
                  />
                  {isValidName && (
                    <small className="d-flex mt-2 text-danger">
                      Vui lòng nhập danh mục
                    </small>
                  )}
                </div>
              </form>
              {/* <div className="form-group">
                <label className="d-flex">Danh mục cha</label>
                <select
                  className="form-control select2"
                  style={{ width: "100%" }}
                  defaultValue=""
                  onChange={handleChange}
                  value={parentCategory}
                >
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>California</option>
                  <option>Delaware</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </select>
              </div> */}
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="d-flex" htmlFor="inputSuccess">
                  Ảnh danh mục
                </label>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                    // value={imageCategory.name}
                    name="image-category"
                    onChange={handleChangeImage}
                  />
                  <label
                    className={`custom-file-label ${
                      isValidImage ? "border border-danger" : ""
                    }`}
                    htmlFor="customFile"
                  >
                    Chọn ảnh
                  </label>
                  {isValidImage && (
                    <small className="d-flex mt-2 text-danger">
                      Vui lòng chọn ảnh
                    </small>
                  )}
                </div>
              </div>
              <div className="form-group">
                <img src="https://via.placeholder.com/180" alt="" />
              </div>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-end">
            <Button variant="outline-danger" onClick={handleCancel}>
              Hủy bỏ
            </Button>
            <Button variant="outline-success" onClick={handleCreate}>
              Thêm mới
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCategoryFood;
