import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DateRangePicker from 'react-bootstrap-daterangepicker';
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
    setFrom,
    setTo,
  } = useBusinessHook(businessId);

  const handleApply = (event, picker) => {
    const { startDate, endDate } = picker;
    const start = startDate.format('YYYY-MM-DD');
    const end = endDate.format('YYYY-MM-DD');
    setFrom(start);
    setTo(end);
  };

  return (
    <Container>
      <h2>{currentBusiness.name}</h2>
      <div style={{ width: '100%' }}>
        <div style={{ float: 'left' }}>
          <DateRangePicker startDate="1/1/2020" endDate="31/05/2014" onApply={handleApply}>
            <Button>Choose Dates</Button>
          </DateRangePicker>
        </div>
        <Button
          variant="primary"
          as={Link}
          to={{
            pathname: `/business/${businessId}/upload`,
            businessId,
          }}
          style={{
            float: 'right',
            left: '20%',
          }}
        >
          Upload Template
        </Button>
      </div>
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
