import { useState } from "react";
import { Pagination } from "react-bootstrap";
import {
  BsChevronLeft,
  BsChevronDoubleLeft,
  BsChevronRight,
  BsChevronDoubleRight,
} from "react-icons/bs";
import "./styles.css";

const PaginationComponent = () => {
  let [currentPage, setCurrentPage] = useState(1);
  const numberPage = 20;

  const handleIncresePage = (event) => {
    event.preventDefault();
    if (currentPage <= numberPage) {
      setCurrentPage(++currentPage);
    }
  };

  const handleDecreasePage = (event) => {
    event.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(--currentPage);
    }
  };

  const handleCurrentPage = (event) => {
    const number = event.target.innerHTML;
    if (Number(number)) {
      setCurrentPage(+number);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(numberPage);
  };

  return (
    <Pagination className="d-flex">
      {currentPage > 1 && (
        <>
          <Pagination.Item onClick={handleFirstPage}>
            <BsChevronDoubleLeft />
          </Pagination.Item>
          <Pagination.Item onClick={(event) => handleDecreasePage(event)}>
            <BsChevronLeft />
          </Pagination.Item>
        </>
      )}

      <Pagination.Item
        active={currentPage === 1 ? true : false}
        onClick={(event) => handleCurrentPage(event)}
      >
        {1}
      </Pagination.Item>
      {currentPage > 1 && <Pagination.Ellipsis disabled />}

      <Pagination.Item
        active={currentPage === 2 ? true : false}
        value={currentPage > 3 ? currentPage - 1 : 2}
        onClick={(event) => handleCurrentPage(event)}
      >
        {currentPage > 3 ? currentPage - 1 : 2}
      </Pagination.Item>
      <Pagination.Item
        value={currentPage >= 4 ? currentPage : 3}
        active={currentPage === 3 ? true : currentPage > 3 ? true : false}
        onClick={(event) => handleCurrentPage(event)}
      >
        {currentPage >= 4 ? currentPage : 3}
      </Pagination.Item>
      {currentPage <= numberPage - 1 && (
        <Pagination.Item
          value={currentPage >= 4 ? currentPage + 1 : 4}
          onClick={(event) => handleCurrentPage(event)}
        >
          {currentPage >= 4 ? currentPage + 1 : 4}
        </Pagination.Item>
      )}

      {currentPage < numberPage - 2 && <Pagination.Ellipsis disabled />}
      {currentPage < numberPage - 1 && (
        <Pagination.Item
          value={numberPage}
          onClick={(event) => handleCurrentPage(event)}
        >
          {numberPage}
        </Pagination.Item>
      )}
      {currentPage <= numberPage - 1 && (
        <>
          <Pagination.Item
            href="/do-an"
            onClick={(event) => handleIncresePage(event)}
          >
            <BsChevronRight />
          </Pagination.Item>
          <Pagination.Item onClick={handleLastPage}>
            <BsChevronDoubleRight />
          </Pagination.Item>
        </>
      )}
    </Pagination>
  );
};

export default PaginationComponent;
