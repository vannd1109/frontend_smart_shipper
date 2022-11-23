import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidUser, setValidUser] = useState(false);
  const [isValidPass, setValidPass] = useState(false);
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    document.title = "Đăng nhập";
  });

  const handleChangeUsername = (event) => {
    const { value } = event.target;
    if (value === "") {
      setValidUser(true);
    } else {
      setValidUser(false);
      setUsername(value);
    }
    setDisabled(value === "" || password === "" ? true : false);
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    if (value === "") {
      setValidPass(true);
    } else {
      setValidPass(false);
      setPassword(value);
    }
    setDisabled(value === "" || username === "" ? true : false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidUser(username === "" ? true : false);
    setValidPass(password === "" ? true : false);
    if (!isValidUser && !isValidPass) {
      console.log("ok");
    }
  };

  return (
    <div className="container">
      <div className="row offset-lg-3 offset-md-2">
        <div className="col col-lg-6 col-md-8">
          <Form className="border p-3" onSubmit={handleSubmit}>
            <div className="mb-3 text-uppercase fs-5">
              Đăng nhập tại{" "}
              <strong className="fw-bold text-success">GHTM</strong>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="d-flex fs-6">Tên đăng nhập</Form.Label>
              <Form.Control
                onChange={handleChangeUsername}
                type="email"
                placeholder="Nhập tên đăng nhập"
              />
              {isValidUser && (
                <Form.Text className="d-flex text-danger fst-italic">
                  Vui lòng nhập tên đăng nhập.
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="d-flex">Mật khẩu</Form.Label>
              <Form.Control
                onChange={handleChangePassword}
                type="password"
                placeholder="Nhập mật khẩu"
              />
              {isValidPass && (
                <Form.Text className="d-flex text-danger fst-italic">
                  Vui lòng nhập mật khẩu.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Ghi nhớ" />
            </Form.Group>
            <Button
              variant="success"
              size="lg"
              className="text-uppercase"
              type="submit"
              disabled={isDisabled}
            >
              Đăng nhập
            </Button>
            <div className="mt-3 d-flex justify-content-center gap-1">
              Bạn chưa có tài khoản.
              <NavLink to="/dang-ky" className="text-success">
                Đăng ký
              </NavLink>
              ngay
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
