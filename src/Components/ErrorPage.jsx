import React from 'react';

const ErrorPage = props => {
  return props.err ? props.err : <div>Page not found</div>;
};

export default ErrorPage;
