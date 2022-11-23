import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ModalComponent = (props) => {
  return (
    <Modal
      // dialogClassName="modal-90w"
      // fullscreen="xxl-down"
      size="lg"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cơm tấm sườn nướng
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Carousel emulateTouch={true}>
                <div style={{height: '240px'}}>
                  <img src="https://cdn.tgdd.vn/2021/08/CookRecipe/Avatar/com-tam-suon-nuong-thumbnail.jpg" alt="" />
                </div>
                <div style={{height: '240px'}}>
                  <img src="https://cdn.tgdd.vn/2021/08/content/BeFunky-collage(3)-800x450.jpg" alt="" />
                </div>
                <div style={{height: '240px'}}>
                  <img src="https://cdn.tgdd.vn/2021/08/CookRecipe/Avatar/com-tam-suon-nuong-thumbnail.jpg" alt="" />
                </div>
              </Carousel>
            </Col>
            <Col xs={6} md={6}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success">Thêm vào giỏ</Button>
        <Button variant="outline-danger">Đặt ngay</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
