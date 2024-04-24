import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="my-4 text-center">
      <h1 className="display-1">{err.status} error</h1>
      <p className="fs-3">{err.statusText}</p>
    </div>
  );
};

export default Error;
