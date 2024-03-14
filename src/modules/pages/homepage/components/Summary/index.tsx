import { Card } from "react-bootstrap";
import { GiTargetPrize } from "react-icons/gi";
import { GiProcessor } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { GiAmbulance } from "react-icons/gi";

const Summary = () => {
  return (
    <div className="my-5 text-white">
      <div
        className=" d-flex align-items-center justify-content-evenly"
        style={{
          backgroundColor: "#093774",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <Card
          bg="secondary"
          text="white"
          style={{ width: "18rem", marginRight: "15px", maxHeight: "300px" }}
          className="col-lg-3 "
        >
          <Card.Header className="d-flex align-items-center justify-content-between">
            <GiTargetPrize style={{ fontSize: "68px" }} />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "30px",
              }}
            >
              Diagnostic Lab
            </p>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>
                Ibsor is the 1st Molecular Diagnostic Lab of its kind in
                Bangladesh. We Provide all kinds of DNA and RNA based Molecular
                Diagnostic Services to the clinicians.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="secondary"
          text="white"
          style={{ width: "18rem", marginRight: "15px", maxHeight: "300px" }}
          className="col-lg-3"
        >
          <Card.Header className="d-flex align-items-center justify-content-between">
            <GiProcessor style={{ fontSize: "68px" }} />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "30px",
              }}
            >
              Technologies
            </p>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>
                The lab is equipped with latest technologies and most
                sophisticated equipment like HPLC, Real-time PCR, Genetic
                Analyzer, NGS etc.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="secondary"
          text="white"
          style={{ width: "18rem", marginRight: "15px", maxHeight: "300px" }}
          className="col-lg-3"
        >
          <Card.Header className="d-flex align-items-center justify-content-between">
            <FaUserDoctor style={{ fontSize: "68px" }} />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "30px",
              }}
            >
              Scientists
            </p>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>
                A group of very well experts in molecular biology, biochemistry
                and molecular genetics are associates with the lab to ensure
                high standard data.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="secondary"
          text="white"
          style={{ width: "18rem", maxHeight: "300px" }}
          className="col-lg-3"
        >
          <Card.Header className="d-flex align-items-center justify-content-between">
            <GiAmbulance style={{ fontSize: "68px" }} />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "30px",
              }}
            >
              Services
            </p>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>
                Skilled phlebotomists collect sample from patient's home. The
                sample is processed in the Laboratory, 24x7, under strict
                Quality Control Process.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Summary;
