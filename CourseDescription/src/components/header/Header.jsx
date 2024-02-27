import React from "react";

const Header = () => {
  return (
    <>
      <div className="container-fluid bg-warning text-dark p-5">
        <div className="container bg-light p-5">
          <h1 className="display-4 fw-bold">Welcome to Sandeep Mart</h1>
          <p>We serve best product..</p>
          <p>Go to My Website</p>
          <a href="#" className="btn btn-primary">
            link
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
