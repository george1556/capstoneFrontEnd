import React from "react";

import { useSelector } from "react-redux";

const DisplayTransactions = props => {
  const transactions = useSelector(state => state.transactions.all);

  // console.log("TRANSACTIONS: ", transactions);
  return <div>transactions stuff</div>;
};
export default DisplayTransactions;
