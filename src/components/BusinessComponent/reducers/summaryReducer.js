const summaryReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS_SUMMARY':
      return { ...action.payload };

    default:
      return state;
  }
};

export { summaryReducer };
