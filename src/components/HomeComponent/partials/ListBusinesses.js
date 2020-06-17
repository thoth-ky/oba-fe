import React from 'react';
import { ListGroup, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BusinessList = (businesses) => (
  <Table style={{ width: '100%' }} striped bordered hover>
    <thead>
      <tr>
        <th>Business Abbr</th>
        <th>Name</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      {
      businesses.businesses.map(({
        id, name, business_abbreviation: businessAbbrev, country,
      }) => (

        <tr
          key={id}
        >
          <td>
            <Link
              to={{
                pathname: `/business/${id}`,
                businessId: id,
              }}
            >
              {businessAbbrev}
            </Link>
          </td>
          <td><div>{name}</div></td>
          <td><div>{country}</div></td>
        </tr>
      ))
    }
    </tbody>
  </Table>
);

export default BusinessList;
