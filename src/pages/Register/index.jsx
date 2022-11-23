import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Vui lòng nhập email hợp lệ")
      .required("Vui lòng nhập email"),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(8, "Mật khẩu tối thiểu 8 ký tự"),
    retypePass: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(8, "Mật khẩu tối thiểu 8 ký tự"),
  })
  .required();

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePass, setRetypePass] = useState("");
  const [isValidUser, setValidUser] = useState(false);
  const [isValidPass, setValidPass] = useState(false);
  const [isValidRetypePass, setValidRetypePass] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChangeUsername = (event) => {
    const { value } = event.target;
    if (value === "") {
      setValidUser(true);
    } else {
      setValidUser(false);
      setUsername(value);
    }
    setDisabled(
      value === "" || password === "" || retypePass === "" ? true : false
    );
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    if (value === "") {
      setValidPass(true);
    } else {
      setValidPass(false);
      setPassword(value);
    }
    setDisabled(
      value === "" || username === "" || retypePass === "" ? true : false
    );
  };

  const handleChangeRetypePass = (event) => {
    const { value } = event.target;
    if (value === "") {
      setValidRetypePass(true);
    } else {
      setValidRetypePass(false);
      setRetypePass(value);
    }
    setDisabled(
      value === "" || username === "" || password === "" ? true : false
    );
  };

  const onSubmit = (data) => {
    // event.preventDefault();
    // setValidUser(username === "" ? true : false);
    // setValidPass(password === "" ? true : false);
    // if (!isValidUser && !isValidPass) {
    //   console.log(username);
    console.log(JSON.stringify(data));
    // }
  };

  return (
    <div className="row offset-lg-3 offset-md-2">
      <div className="col col-lg-6 col-md-8">
        {/* <Form className="border p-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 text-uppercase fs-5">
            Đăng ký tài khoản tại
            <strong className="fw-bold text-success">GHTM</strong>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="d-flex fs-6">Tên đăng nhập</Form.Label>
            <Form.Control
              onChange={handleChangeUsername}
              type="text"
              placeholder="Nhập tên đăng nhập"
              {...register("email")}
            />
              <Form.Text className="d-flex text-danger fst-italic">
                {errors.email?.message}
              </Form.Text>
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="d-flex">Nhập lại mật khẩu</Form.Label>
            <Form.Control
              onChange={handleChangeRetypePass}
              type="password"
              placeholder="Nhập lại mật khẩu"
            />
            {isValidRetypePass && (
              <Form.Text className="d-flex text-danger fst-italic">
                Vui lòng nhập lại mật khẩu.
              </Form.Text>
            )}
          </Form.Group>
          <Button
            variant="success"
            size="lg"
            className="text-uppercase"
            type="submit"
            // disabled={isDisabled}
            onClick={onSubmit}
          >
            Đăng ký
          </Button>
          <div className="mt-3 d-flex justify-content-center gap-1">
            Bạn đã có tài khoản.
            <NavLink to="/dang-nhap" className="text-success">
              Đăng nhập
            </NavLink>
            ngay
          </div>
        </Form> */}
        <form className="border p-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 text-uppercase fs-5">
            Đăng ký tài khoản tại
            <strong className="fw-bold text-success">GHTM</strong>
          </div>
          <div className="form-group">
            <label className="d-flex fs-6">Tên đăng nhập</label>
            <input
              {...register("email")}
              className="p-2 w-100"
              placeholder="Nhập tên đăng nhập"
            />
            {errors.email && (
              <small className="d-flex text-danger fst-italic">
                {errors.email.message}
              </small>
            )}
          </div>
          <div className="form-group">
            <label className="d-flex fs-6">Mật khẩu</label>
            <input
              {...register("password")}
              className="p-2 w-100"
              placeholder="Nhập mật khẩu"
              type="password"
            />
            {errors.password && (
              <small className="d-flex text-danger fst-italic">
                {errors.password.message}
              </small>
            )}
          </div>
          <div className="form-group">
            <label className="d-flex fs-6">Nhập lại mật khẩu</label>
            <input
              {...register("retypePass")}
              className="p-2 w-100"
              placeholder="Nhập lại mật khẩu"
              type="password"
            />
            {errors.retypePass && (
              <small className="d-flex text-danger fst-italic">
                {errors.retypePass.message}
              </small>
            )}
          </div>
          <input
            type="submit"
            value="Đăng ký"
            className="btn btn-success btn-lg text-uppercase"
          />
          <div className="mt-3 d-flex justify-content-center gap-1">
            Bạn đã có tài khoản.
            <NavLink to="/dang-nhap" className="text-success">
              Đăng nhập
            </NavLink>
            ngay
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
