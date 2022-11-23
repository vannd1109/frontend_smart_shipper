import { Card, Button, OverlayTrigger, Tooltip, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsFillCartPlusFill, BsFillEyeFill } from "react-icons/bs";

const Item = ({ onShowDetail }) => {
  const renderView = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Xem chi tiết
    </Tooltip>
  );

  const renderAdd = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Thêm vào giỏ
    </Tooltip>
  );

  const handleAdd = () => {
    console.log("ok");
  };

  return (
    <Card className="d-flex mb-3">
      <NavLink to="/do-an/com-tam-com-suon">
        <Image style={{overflow: 'hidden', width: '100%'}} src="https://cdn.tgdd.vn/2021/08/CookRecipe/Avatar/com-tam-suon-nuong-thumbnail.jpg" />
      </NavLink>
      <Card.Body>
        <NavLink
          to="/do-an/com-tam-com-suon"
          className="text-decoration-none d-block font-weight-normal text-success"
          style={{ textAlign: "left" }}
        >
          Cơm tấm sườn nướng
        </NavLink>
        <Card.Text className="d-block text-truncate">
          Sườn sau khi nướng chín có mùi thơm lừng và màu vàng nâu đẹp mắt, thịt
          sườn mềm, mọng nước lại còn thấm đều gia vị rất đậm đà. Ăn cùng với
          cơm và nước mắm chua chua, ngọt ngọt cay cay cùng mỡ hành béo ngậy quả
          là tuyệt vời!.
        </Card.Text>
        <div className="d-flex mb-2 justify-content-between">
          <Card.Text className="d-flex justify-content-center gap-1 flex-wrap">
            <span className="text-decoration-line-through">1.200.000đ</span>
            <small className="text-danger">(-5%)</small>
          </Card.Text>
          <Card.Text className="d-flex align-items-center mb-md-4">
            1.190.000đ
          </Card.Text>
        </div>
        <div className="d-flex justify-content-between justify-content-md-center gap-md-3 flex-wrap">
          <div className="d-flex gap-1 flex-md-wrap">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderView}
            >
              <Button variant="success" size="md" onClick={onShowDetail}>
                <BsFillEyeFill size="18" />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderAdd}
            >
              <Button variant="warning" size="sm" onClick={handleAdd}>
                <BsFillCartPlusFill size="18" color="gray" />
              </Button>
            </OverlayTrigger>
          </div>
          <Button
            variant="outline-danger"
            className="text-capitalize d-flex gap-1 align-items-center"
            size="md"
          >
            Mua ngay
            <BsFillCartPlusFill />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
