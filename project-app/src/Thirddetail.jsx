import "./rental.css";
import detailedimg from "./images/detailedimg.png";
import plan from "./images/Image 6.png";
import Application from "./Application";
import { useState } from "react";

function Seconddetail(props) {
  const [application, setApplication] = useState(false);
  const id = 3;
  return props.trigger ? (
    <div className="popup">
      <button className="closebtn" onClick={() => props.setTrigger(false)}>
        X
      </button>
      <div className="flex-container">
        <div className="flex-box">
          <img
            src={detailedimg}
            className="detailedimg"
            alt="detailedimg"
          ></img>
        </div>
        <div className="flex-box">
          <img src={plan} className="detailedimg" alt="plan"></img>
        </div>
      </div>
      <div>
        <h2>18 Pond St</h2>
        <p className="detailscontainer">
          This charming studio is located in a historical building, a quick walk
          to Forest Hills Station! It is front facing with 3 beautiful windows,
          and interior brick work adding so much character! Clean, bright, heat
          and hot water included - DON'T MISS!! Professionally managed building
          with front door intercom system. Basement has private storage room,
          dry bike lock up, and no fee laundry machines. Heat and hot water
          INCLUDED in rent! Tenant pays electricity and cable/internet.First
          month's rent ($1,700), Security Deposit ($1,700), Realtor fee ($1,700)
          and $25 application fee (per applicant). $50 move-in fee required to
          association. Cat or small dog considered on a case by case basis.
          There is an $100.00/month surcharge in rent for pets, up to 30 lbs,
          subject to approval by landlord and condo board. Must agree to
          existing condo rules and regulations.
          <ul>
            <b>Rental Featrures</b>
            <li class="column column--sm5">Hardwood floors</li>
            <li class="column column--sm5">Refrigerator</li>
            <li class="column column--sm5">Pet friendly</li>
            <li class="column column--sm5">Heat</li>
            <li class="column column--sm5">Storage space</li>
          </ul>
          <button className="applynow" onClick={() => setApplication(true)}>
            Apply Now
          </button>
        </p>
        <Application
          id={id}
          onApplication={props.application}
          trigger={application}
          setTrigger={setApplication}
          setTopTrigger={props.setTrigger}
        ></Application>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Seconddetail;
