import { useEffect, useState } from "react";
import BreadcrumbComponent from "../../components/Breadcrumb";
import Sorted from "../../components/Sorted";
import Choosed from "../../components/Choosed";
import Item from "../../components/Item";
import PaginationComponent from "../../components/Pagination";

const Restaurant = () => {
  const [sortActive, setSortActive] = useState("");

  useEffect(() => {
    document.title = "Cửa hàng";
  });

  const sortList = [
    {
      key: "",
      title: "Sắp xếp theo",
    },
    {
      key: "star",
      title: "Theo lượt yêu thích",
    },
    {
      key: "price",
      title: "Theo giá",
    },
    {
      key: "promation",
      title: "Theo chương trình KM",
    },
  ];

  const chooseList = [
    {
      key: "all",
      title: "Tất cả",
      color: "success",
      status: true,
    },
    {
      key: "food",
      title: "Đồ ăn",
      color: "danger",
      status: false,
    },
    {
      key: "fruit",
      title: "Thức uống",
      color: "warning",
      status: false,
    },
    {
      key: "belongings",
      title: "Đồ dùng cá nhân",
      color: "success",
      status: false,
    },
  ];

  const handeSorted = () => {
    console.log(sortActive);
  };

  return (
    <div className="container">
      <BreadcrumbComponent title="Danh sách cửa hàng" />
      <div className="d-md-flex justify-content-between">
        <Choosed
          title="Cửa hàng phổ biến theo danh mục:"
          chooseList={chooseList}
        />
        <Sorted
          sortList={sortList}
          sortActive={sortActive}
          setSortActive={setSortActive}
          onSorted={handeSorted}
        />
      </div>
      <div className="mt-3">
        <div className="row">
          <div className="col col-sm-12 col-md-6 col-lg-3">
            <Item />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-3">
            <Item />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-3">
            <Item />
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-3">
            <Item />
          </div>
        </div>
      </div>
      <div className="d-dlex mt-3 mb-3">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default Restaurant;
