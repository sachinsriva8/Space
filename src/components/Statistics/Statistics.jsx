import { useLocation } from "react-router-dom";
import Chart from "../chart/Chart";
import Header from "../header/Header";
import { useMemo } from "react";

const Statistics = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      <Chart data={location.state} />
    </div>
  );
};

export default Statistics;
