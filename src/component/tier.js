import React from "react";

const Tier = (props) => {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.tier.heading}
          </h5>
          <h6 className="card-price text-center">
            ${props.tier.perMonth} <span className="period">/Month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {props.tier.feature.map((item, i) => {
              const tier = props.tier.heading;
              let text = "";
              const toCheck = () => {
                if (tier === "Free" && i > 3) text = "text-muted";
                if (tier === "Plus" && i > 6) text = "text-muted";
              };
              toCheck();
              let icon = `fa-solid fa-${
                text === "text-muted" ? "times" : "check"
              }`;
              return (
                <li className={text} key={i}>
                  <span className="fa-li">
                    <i className={icon}></i>
                  </span>
                  {item}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a href="/" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tier;