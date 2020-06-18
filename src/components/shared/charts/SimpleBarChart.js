import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({
  data, title,
}) => (
  <Bar
    data={data}
    width={600}
    height={400}
    options={{
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        enabled: true,
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: false,
          },
        }],
      },
      title: {
        display: true,
        text: title,
      },
    }}
  />
);

export { BarChart };
