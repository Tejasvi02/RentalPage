function Applied(props) {
    const successfulid= props.successfulid;
    return (
      <div>
     { successfulid === 1 && (
      <div>
      You Have Applied for 16-18 Walk Hill Street - 7 Boston, MA 02130 
    </div>
     )}
        { successfulid === 2 && (
      <div>
      You Have Applied for 465 Arborway
    </div>
     )}
           { successfulid === 3 && (
      <div>
      You Have Applied for 18 Pond St
    </div>
     )}
  </div>
    );
  }
  
  export default Applied;