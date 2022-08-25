import "./rental.css";
function Controls({onLogout}) {
  return (
    <div className="controls">
      <div onClick={onLogout} className="controls__logout">Logout</div>
    </div>
  );
}

export default Controls;
