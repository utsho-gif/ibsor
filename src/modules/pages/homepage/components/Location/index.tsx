const Location = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#093774",
          paddingTop: "50px",
          paddingBottom: "50px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <div className="d-flex align-items-center justify-content-center">
          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1972579449102!2d90.39152747410003!3d23.740344189164723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bfe09f2fc9%3A0x1da49bc0abfd4f7a!2sShahbagh%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1702420945957!5m2!1sen!2sbd"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-lg-6 container text-white">
            <div className="row">
              <div className="col-md-6">
                <h5>Location</h5>
                <p>
                  IBSOR. <br /> Dhaka-1207
                </p>
              </div>
              <div className="col-md-6">
                <h5>OUR HOURS</h5>
                <p>Sat - Thu: 9AM -9PM</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h5>CONTACT US</h5>
                <p>0171111111</p>
                <p>info@ibsor.com</p>
              </div>
              <div className="col-md-6">
                <h5>FOLLOW US</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
