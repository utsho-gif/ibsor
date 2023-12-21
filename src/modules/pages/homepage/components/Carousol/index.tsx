import { Carousel } from "react-bootstrap";
import C1 from "../../../../../assets/C1.jpeg";
import C2 from "../../../../../assets/C2.jpeg";
import C3 from "../../../../../assets/C3.jpeg";

const CarousolCompo = () => {
  return (
    <div className="">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={C2}
            alt="First slide"
            style={{ maxHeight: "500px" }}
          />
          {/* <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={C1}
            style={{ maxHeight: "500px" }}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={C3}
            alt="Third slide"
            style={{ maxHeight: "500px" }}
          />
          {/* <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarousolCompo;
