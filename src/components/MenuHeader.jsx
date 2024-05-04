import { Clock1 } from "lucide-react";

const RatingDiv = ({ info }) => {
  return (
    <div className="menu-rating d-flex align-items-center">
      <div className="mr-2">
        <span>⭐{info.avgRating}</span>
      </div>
      <div
        style={{
          height: "20px",
          width: "1px",
          backgroundColor: "black",
          margin: "0 5px",
        }}
      ></div>
      <span>{info.totalRatingsString}</span>
    </div>
  );
};

const MenuHeader = ({ info }) => {
  return (
    <div className="container">
      <div className="row my-5 justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body d-flex justify-content-between">
              <div>
                <p className="h4">
                  <strong>{info.name}</strong>
                </p>
                <p>
                  <small
                    className="text-secondary"
                    style={{ fontSize: "14px" }}
                  >
                    {info.cuisines.join(", ")}
                  </small>
                </p>
                <p className="mb-0">
                  <small className="text-secondary">{info.areaName}</small>,{" "}
                  <small className="text-secondary">
                    {info.sla.lastMileTravel} Km
                  </small>
                </p>
              </div>
              <RatingDiv info={info} />
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center px-3">
              <div className="mb-3">
                <span>
                  <Clock1 />
                </span>
                <span className="ml-1">
                  <strong>{info.sla?.slaString}</strong>
                </span>
              </div>
              <div>
                <span>
                  <strong>{info.costForTwoMessage}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
