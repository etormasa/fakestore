import { Link } from "react-router-dom";

function NotFound() {
  const notfoundstatus = 404;
  return (
    <div className="container-fluid p-4 text-center">
      <div className="alert alert-warning">
        <p className="fw-bold text-center">
          Oops ({notfoundstatus}) Page Not Found!
        </p>
        <Link className="btn btn-primary" to="/">Homepage</Link>
      </div>
    </div>
  );
}

export default NotFound;
