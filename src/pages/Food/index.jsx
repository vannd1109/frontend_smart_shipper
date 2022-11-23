import { useState, useEffect } from "react";
import BreadcrumbComponent from "../../components/Breadcrumb";
import Sorted from "../../components/Sorted";
import Choosed from "../../components/Choosed";
import Item from "../../components/Item";
import PaginationComponent from "../../components/Pagination";
import ModalComponent from "../../components/Modal";

const Food = () => {
  const [sortActive, setSortActive] = useState("");
  const [choosedFood, setChoosedFood] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    document.title = "Đồ ăn";
  });

  const sortList = [
    {
      key: "",
      title: "Sắp xếp theo",
    },
    {
      key: "percent",
      title: "Theo % giảm giá",
    },
    {
      key: "short",
      title: "Từ thấp đến cao",
    },
    {
      key: "hight",
      title: "Từ cao đến thấp",
    },
  ];

  const foodCategories = [
    {
      id: 1,
      key: "all",
      title: "Tất cả",
      color: "success",
      status: true,
    },
    {
      id: 2,
      key: "rice",
      title: "Cơm",
      color: "danger",
      status: false,
    },
    {
      id: 3,
      key: "noodle",
      title: "Phở",
      color: "warning",
      status: false,
    },
    {
      id: 4,
      key: "fast food",
      title: "Đồ ăn nhanh",
      color: "success",
      status: false,
    },
  ];

  // const foodList = [
  //   {

  //   }
  // ]

  const handeSorted = () => {
    console.log(sortActive);
  };

  const handeChooed = (foodItem) => {};

  const handleShowDetail = () => {
    setModalShow(true);
  };

  return (
    <div className="container">
      <BreadcrumbComponent title="Món ăn dành cho bạn" />
      <div className="d-md-flex justify-content-between">
        <Choosed
          title="Món ăn phổ biến:"
          chooseList={foodCategories}
          chooseActive={choosedFood}
          setChooseActive={setChoosedFood}
          onChoosed={handeChooed}
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
          <div className="col col-lg-3 col-md-6 col-12">
            <Item onShowDetail={handleShowDetail} />
          </div>
          <div className="col col-lg-3 col-md-6 col-12">
            <Item onShowDetail={handleShowDetail} />
          </div>
          <div className="col col-lg-3 col-md-6 col-12">
            <Item onShowDetail={handleShowDetail} />
          </div>
          <div className="col col-lg-3 col-md-6 col-12">
            <Item onShowDetail={handleShowDetail} />
          </div>
          <div className="col col-lg-3 col-md-6 col-12">
            <Item />
          </div>
          <div className="col col-lg-3 col-md-6 col-12">
            <Item />
          </div>
          <div className="col col-lg-3 col-md-6 col-12">
            <Item />
          </div>
          <div className="col col-lg-3 col-md-6 col-12">
            <Item />
          </div>
        </div>
      </div>
      <div className="d-dlex mt-3 mb-3">
        <PaginationComponent />
      </div>
      <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Food;
