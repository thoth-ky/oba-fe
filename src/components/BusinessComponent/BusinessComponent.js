import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useBusinessHook } from './useBusinessHook';
import { Container } from '../shared/StyledComponents';
import { BarChart, PieChart } from '../shared/charts';

function BusinessComponent({ match }) {
  const { params: { id: businessId } } = match;

  const {
    currentBusiness,
    pieChartData,
    itemsOrderedByQuantity,
    itemsBilledByQuantity,
    itemsOrderedByValue,
    itemsBilledByValue,
  } = useBusinessHook(businessId);

  console.log({ itemsOrderedByQuantity });
  console.log({ itemsBilledByQuantity });
  console.log({ itemsOrderedByValue });
  console.log({ itemsBilledByValue });


  return (
    <Container>
      <h2>{currentBusiness.name}</h2>
      <Button
        variant="primary"
        as={Link}
        to={{
          pathname: `/business/${businessId}/upload`,
          businessId,
        }}
      >
        Upload Template
      </Button>
      <Row>
        {pieChartData && (
        <PieChart
          data={pieChartData}
          title="Cash Flow Piechart"
        />
        )}
      </Row>
      <h2 style={{ margin: '20px', padding: '20px' }}>Top 5 Items by Quantity</h2>
      <Row id="top_5_by_quantity" md="2">
        <Col>
          {itemsOrderedByQuantity && (
          <BarChart
            data={itemsOrderedByQuantity}
            title="Top 5 Items Ordered (by Quantity)"
          />
          )}
        </Col>
        <Col>
          {itemsBilledByQuantity && (
          <BarChart
            data={itemsBilledByQuantity}
            title="Top 5 Items Billed (by Quantity)"
          />
          )}
        </Col>
      </Row>
      <h2 style={{ margin: '20px', padding: '20px' }}>Top 5 Items by Value</h2>
      <Row id="top_5_by_value">
        <Col>
          {itemsOrderedByValue && (
          <BarChart
            data={itemsOrderedByValue}
            title="Top 5 Items Ordered (by Value)"
          />
          )}
        </Col>
        <Col>
          {itemsBilledByValue && (
          <BarChart
            data={itemsBilledByValue}
            title="Top 5 Items Billed (by Value)"
          />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export { BusinessComponent };
