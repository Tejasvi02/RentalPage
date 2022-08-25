import Controls from "./Controls";
import "./navbar.css";

function Navbar(props) {

    return (
      <div>

<span className="navbar">
<h2>Boston Rentals</h2>
  <div className="navigation">
   <a href="#" className="homepage"> Home</a>
   <a className="homepage">Contact</a>
   <div className="homepage">
   <Controls onLogout={props.onLogout} />
   </div>
   </div>
</span>
</div>
    );
  }
  
  export default Navbar;
  