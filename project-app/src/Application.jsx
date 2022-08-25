import "./rental.css";

function Application(props) {

  function onSubmit(e) {
    e.preventDefault();
    props.onApplication(props.id);
    props.setTrigger(false);
    props.setTopTrigger(false);
  }

  return props.trigger ? (
    <div className="applicationpopup">
      <button className="closebtn" onClick={() => props.setTrigger(false)}>
        X
      </button>
      <h3>Application</h3>

      <form action="#" className="application"  onSubmit={onSubmit}>

        <label>First Name: </label>
        <input type="text"></input>
        <label>Last Name: </label>
        <input type="text"></input>
        <label>email: </label>
        <input type="text"></input>
        <label>Phone: </label>
        <input type="text"></input>
        <label>
        <button className="applicationbtn" onClick={() => props.onApplication(props.id)}>Submit</button>
        </label>
      </form>
    </div>
  ) : (
    ""
  );
}

export default Application;
