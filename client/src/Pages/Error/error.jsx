import { Link, useRouteError } from "react-router-dom";
import { FirstCont } from "./error.styled";

const Error = () => {
  let error = "404 - THE PAGE CAN'T BE FOUND";
  const errorroute = useRouteError();
  if (errorroute.status === 500) {
    error = errorroute.data.message;
  }
  return (
    <FirstCont>
      <h1>OOPS!</h1>
      <h2>{error}</h2>
      <div>
        <Link to={"/"}>GO TO HOME</Link>
      </div>
    </FirstCont>
  );
};

export default Error;
