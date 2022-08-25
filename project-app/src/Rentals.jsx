import home from "./images/Image -2.png";
import "./rental.css";
import Details from "./Details";
import Seconddetail from "./Seconddetail";
import { useState } from "react";
import Thirddetail from "./Thirddetail";

function Rentals(props) {
  const [details, setdetails] = useState(false);
  const [secondDetails, setSecondDetails] = useState(false);
  const [thirdDetails, setThirdDetails] = useState(false);
  return (
    <div className="apartmentlist">
      <h1>Apartment List</h1>

      <div className="rentalcontainer" onClick={() => setdetails(true)}>
        <img src={home} alt="home" className="home1"></img>
        <h2>16-18 Walk Hill Street</h2>
        <p>
          Beautiful Huge 1 Family House In Heart Of Westbury Newly Renovated
          With New Furniture
        </p>
      </div>

      <div className="rentalcontainer" onClick={() => setSecondDetails(true)}>
        <img src={home} alt="home" className="home1"></img>
        <h2>465 Arborway</h2>
        <p className="listdetail">
          Beautiful Huge 1 Family House In Heart Of Westbury Newly Renovated
          With New Furniture
        </p>
      </div>

      <div className="rentalcontainer" onClick={() => setThirdDetails(true)}>
        <img src={home} alt="home" className="home1"></img>
        <h2>18 Pond St</h2>
        <p className="thirddetail">
          Beautiful Huge 1 Family House In Heart Of Westbury Newly Renovated
          With New Furniture
        </p>
      </div>

      <Details
        trigger={details}
        setTrigger={setdetails}
        application={props.application}
      ></Details>
      <Seconddetail
        trigger={secondDetails}
        setTrigger={setSecondDetails}
        application={props.application}
      ></Seconddetail>
      <Thirddetail
        trigger={thirdDetails}
        setTrigger={setThirdDetails}
        application={props.application}
      ></Thirddetail>
    </div>
  );
}

export default Rentals;
