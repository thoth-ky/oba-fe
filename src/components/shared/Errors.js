import React from 'react';

const Errors = ({ errors = [] }) =>{
  return (
  <ul>
    {errors.map((error) => (
      <li key={error} style={{color: 'red'}}>
        {error}
      </li>
    ))}
  </ul>
)}

export default Errors;
