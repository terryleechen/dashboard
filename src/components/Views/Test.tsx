import { Link, useLocation } from "react-router-dom";

function Test() {
  let location = useLocation();
  console.log(location);
  return <div>Client</div>;
}
export default Test;
