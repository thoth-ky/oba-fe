import React from 'react';

const Errors = ({ errors }) => (
  <ul>
    {Object.keys(errors).map((key) => (
      <li key={key}>
        {`${key} : ${errors[key]}`}
      </li>
    ))}
  </ul>
);

export default Errors;
