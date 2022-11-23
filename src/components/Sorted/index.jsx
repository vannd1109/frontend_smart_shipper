import { Form, Button } from "react-bootstrap";

const Sorted = ({
  sortList = [],
  sortActive,
  setSortActive,
  onSorted,
}) => {
  const handleSorted = (event) => {
    const { value } = event.target;
    setSortActive(value);
  };

  return (
    <div className="d-flex justify-content-center flex-wrap align-items-center gap-2">
      <Form.Select onChange={handleSorted} size="sm" style={{ width: "150px" }}>
        {sortList.map((sortItem) => (
          <option key={sortItem.key} value={sortItem.key}>
            {sortItem.title}
          </option>
        ))}
      </Form.Select>
      <Button
        variant="outline-success"
        size="sm"
        disabled={sortActive ? false : true}
        onClick={onSorted}
      >
        Áp dụng
      </Button>
    </div>
  );
};

export default Sorted;
