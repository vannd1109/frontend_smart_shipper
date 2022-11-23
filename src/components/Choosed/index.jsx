import { Button } from "react-bootstrap";

const Choosed = ({
  title = "",
  chooseList = [],
  onChoosed,
  chooseActive = [],
}) => {
  return (
    <div className="d-flex justify-content-start align-items-center gap-2 p-2">
      <small className="d-flex fs-bold mb-0" style={{ fontSize: "0.8rem" }}>
        {title}
      </small>
      <div className="d-flex flex-wrap gap-2">
      {chooseList.map((chooseItem, index) => (
        <Button
          variant={`${chooseItem.status ? "" : "outline-"}${
            chooseItem.color
          }`}
          size="sm"
          value={chooseItem.key}
          key={chooseItem.key}
          onClick={() => onChoosed(chooseItem)}
        >
          {chooseItem.title}
        </Button>
      ))}
      </div>
    </div>
  );
};

export default Choosed;
