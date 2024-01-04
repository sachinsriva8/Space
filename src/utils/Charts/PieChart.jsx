import { AgChartsReact } from "ag-charts-react";

const PieChart = ({ option }) => {
  return (
    <div>
      <AgChartsReact options={option} />
    </div>
  );
};

export default PieChart;
