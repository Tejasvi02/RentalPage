import "./App.css";
function Message(props) {
  const successfulid= props.successfulid;
  return (
    <div>
   { successfulid === 1 && (
    <h1 className="message">
    You Have Applied for 16-18 Walk Hill Street - 7 Boston, MA 02130 
  </h1>
   )}
      { successfulid === 2 && (
    <h1 className="message">
    You Have Applied for 465 Arborway
  </h1>
   )}
         { successfulid === 3 && (
    <h1 className="message">
    You Have Applied for 18 Pond St
  </h1>
   )}
</div>
  );
}

export default Message;
