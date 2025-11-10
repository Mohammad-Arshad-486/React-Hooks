import Counter from "./Counter_App";
import Weather from "./Weather_App";
import StopW from "./Stop_watch";
import Home from"./Home";
import {Link} from "react-router-dom";
function navbar() {
  return (
    <div className="background-color-gray-500">
    <p className="fixed top-0 left-0 p-5 border-blue-100 outline-blue">
    <span className="text-2xl font-bold text-white" >React Hooks</span>
    < Link to="/" className="text-white ml-4 p-5">Home</Link>
    < Link to="/counter" className="text-white ml-4">Counter</Link>
    < Link to="/weather" className="text-white ml-4">Weather App</Link>
    < Link to="/stopwatch" className="text-white ml-4">Stop Watch</Link>

</p>
    </div>
  );
}
export default navbar;