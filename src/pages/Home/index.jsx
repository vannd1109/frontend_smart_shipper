import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  useEffect(() => {
    document.title = "Giao hàng thông minh";
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col col-sm-12 col-lg-7">
          <Carousel emulateTouch={true}>
            <div style={{ height: "320px" }}>
              <img
                src="https://cdn.tgdd.vn/2021/08/CookRecipe/Avatar/com-tam-suon-nuong-thumbnail.jpg"
                alt=""
              />
              <NavLink
                to="/do-an/:id"
                className="legend d-flex fs-4 text-decoration-none"
                style={{ backgroundColor: "transparent" }}
              >
                Cơm tấm sườn nướng
              </NavLink>
            </div>
            <div style={{ height: "320px" }}>
              <img
                src="https://cdn.tgdd.vn/2021/08/content/BeFunky-collage(3)-800x450.jpg"
                alt=""
              />
              <p
                className="legend d-flex fs-4"
                style={{ backgroundColor: "transparent" }}
              >
                Cơm tấm sườn nướng
              </p>
            </div>
            <div style={{ height: "320px" }}>
              <img
                src="https://cdn.tgdd.vn/2021/08/CookRecipe/Avatar/com-tam-suon-nuong-thumbnail.jpg"
                alt=""
              />
              <p
                className="legend d-flex fs-4"
                style={{ backgroundColor: "transparent" }}
              >
                Cơm tấm sườn nướng
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
