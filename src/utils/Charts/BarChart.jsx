import { AgChartsReact } from "ag-charts-react";

const BarChart = ({ option }) => {
  return (
    <div>
      <AgChartsReact options={option} />
    </div>
  );
};

export default BarChart;
