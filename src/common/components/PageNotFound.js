import React from 'react';

const PageNotFound = ({ history }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404</h1>
      <h2 className="not-found-message">Sorry! Page not found.</h2>

      <a className="go-back-link" href="" onClick={() => history.goBack()}>
        &larr; Go Back
      </a>
    </div>
  );
};

export default PageNotFound;
