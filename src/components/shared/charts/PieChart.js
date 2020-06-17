import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const PieChart = ({ data, title }) => {
  return (
    <Doughnut
      data={data}
      width={600}
      height={300}
      options={{
        cutoutPercentage: 0,
        title: {
          display: true,
          text: title,
        },

      }}
    />
  );
};

export { PieChart };
