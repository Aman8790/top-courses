import React from "react";
import { FcUpload} from "react-icons/fc";
import './Spinner.css';
function Spinner(){
    return(
        <div>
              <div className="spinner"></div>
              <p>Loading....</p>
        </div>
    );
}
export default Spinner;