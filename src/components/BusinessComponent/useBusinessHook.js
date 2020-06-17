import { useEffect } from 'react';
import { useStore } from '../../store/store';
import { getFromApi } from '../../utils/api';

function useBusinessHook(businessId) {
  const [state, dispatch] = useStore();
  console.log({ state });
  const {
    currentBusiness = {},
    transactionsSummary: {
      cash_flow: cashFlow = {},
      top_five_by_quantity: {
        items_ordered_by_quantity: top5OrderedByQuantity = [],
        items_billed_by_quantity: top5BilledByQuantity = [],
      },
      top_five_by_value: {
        items_ordered_by_value: top5OrderedByValue = [],
        items_billed_by_value: top5BilledByValue = [],
      },
    },
  } = state;

  const getBusinessDetails = () => {
    const actionData = {
      type: 'SET_CURRENT_BUSINESS',
    };
    getFromApi(`/business/${businessId}`, dispatch, actionData);
  };

  const getDashboardData = () => {
    const actionData = {
      type: 'SET_TRANSACTIONS_SUMMARY',
    };
    getFromApi(`/business/${businessId}/dashboard`, dispatch, actionData);
  };

  useEffect(() => {
    getBusinessDetails();
    getDashboardData();
  }, [businessId]);

  const getPieChartData = ({ amount_in: amountIn, bills_due: billsDue }) => ({
    datasets: [{
      data: [amountIn, billsDue],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Incoming',
      'Outgoing',
    ],
  });

  const getBarChartData = (listData) => {
    function randomColorGen() {
      return `#${(`${Math.random().toString(16)}0000000`).slice(2, 8)}`;
    }
    const data = [];
    const labels = [];
    const backgroundColors = [];
    listData.map(({ item, total }) => {
      data.push(total);
      labels.push(item);
      backgroundColors.push(randomColorGen());
    });
    return {
      labels,
      datasets: [{
        data,
        backgroundColor: backgroundColors,
      }],
    };
  };
  return {
    currentBusiness,
    pieChartData: getPieChartData(cashFlow),
    itemsOrderedByQuantity: getBarChartData(top5OrderedByQuantity),
    itemsBilledByQuantity: getBarChartData(top5BilledByQuantity),
    itemsOrderedByValue: getBarChartData(top5OrderedByValue),
    itemsBilledByValue: getBarChartData(top5BilledByValue),
  };
}

export { useBusinessHook };
