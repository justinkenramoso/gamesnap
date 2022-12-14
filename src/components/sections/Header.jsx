import React from "react";

function Header(props) {
  return (
    <section
      className="accordion accordion-flush"
      id={`${props.page}-accordion`}
    >
      <div className="accordion-item">
        <h2 className="accordion-header" id={`${props.page}-accordion-heading`}>
          <button
            className={`accordion-button ${props.page}-accordion-button collapsed`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${props.page}-accordion-collapse`}
            aria-expanded="false"
            aria-controls={`${props.page}-accordion-collapse`}
          >
            <div className="container d-flex justify-content-center justify-content-lg-between align-items-center">
              <h2 className="slanted sl fw-bold">
                {props.title} <i className="fa-solid fa-caret-down"></i>
              </h2>
              <h5 className="d-none d-lg-block">{props.headline}</h5>
            </div>
          </button>
        </h2>
        <div
          id={`${props.page}-accordion-collapse`}
          className="accordion-collapse collapse"
          aria-labelledby={`${props.page}-accordion-heading`}
          data-bs-parent={`${props.page}-accordion`}
        >
          <div
            className={`accordion-body ${props.page}-accordion-heading bg2 color4`}
          >
            <div className="container">
              <h4>{props.welcome}</h4>
              <h5>
                <ul>
                  <li>{props.content1}</li>
                  <li>{props.content2}</li>
                  <li>{props.content3}</li>
                </ul>
              </h5>
              <p className="lead">{props.lead}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
