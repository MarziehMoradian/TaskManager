import { Link ,useHistory,useLocation} from "react-router-dom";
import React from "react";

const NotFound = () => {
    let history=useHistory();
    let location=useLocation();
    console.log(location);
  return (
    <div className="pageContainer">
      <h1>Not Found</h1>
      <p><strong>{history.location.pathname}</strong> is not found</p>
      <button className="btn" onClick={()=>history.push('/')}>Go To Task Page</button>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;