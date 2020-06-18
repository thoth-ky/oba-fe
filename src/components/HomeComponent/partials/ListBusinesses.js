import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BusinessList = (businesses) => {
  const { businesses: businessData = [] } = businesses;
  return (
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
          businessData.map(({
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
};

export default BusinessList;
