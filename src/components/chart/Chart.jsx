import { useMemo, useState } from "react";
import PieChart from "../../utils/Charts/PieChart";
import BarChart from "../../utils/Charts/BarChart";

const Chart = ({ data }) => {
  const [flag, setFlag] = useState({ pie: true, bar: false });
  const handelChange = (id) => {
    if (id === "pie") {
      setFlag({ pie: true, bar: false });
    } else {
      setFlag({ pie: false, bar: true });
    }
  };

  const ChartData = data;

  const PieData = useMemo(() => {
    return ChartData.reduce(
      (acc, current) => {
        if (current.successful) {
          acc[0].count += 1;
        } else {
          acc[1].count += 1;
        }
        return acc;
      },
      [
        { key: "successful", count: 0 },
        { key: "unsuccessful", count: 0 },
      ]
    );
  }, [ChartData]);

  const pieOption = {
    data: PieData,
    series: [
      {
        type: "pie",
        angleKey: "count",
        calloutLabelKey: "key",
        sectorLabelKey: "count",
        legendItemKey: "count",
      },
    ],
  };

  const BarData = useMemo(() => {
    let yearData = {};
    let yearWiseData = [];
    for (let i of ChartData) {
      const { date } = i;
      const year = date.split("-")[0];
      yearData[year] = yearData[year] ? yearData[year] + 1 : 1;
    }

    for (let key in yearData) {
      yearWiseData.push({ year: key, count: yearData[key] });
    }
    return yearWiseData;
  }, [ChartData]);

  const barOption = {
    data: BarData,
    series: [{ type: "bar", xKey: "year", yKey: "count" }],
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input
          type="radio"
          name="chart"
          id="pie"
          checked={flag.pie}
          onChange={(e) => handelChange(e.target.id)}
        />
        PieChart
        <input
          type="radio"
          name="chart"
          id="bar"
          checked={flag.bar}
          onChange={(e) => handelChange(e.target.id)}
        />
        BarChart
      </div>
      <div>
        {flag.pie ? (
          <PieChart option={pieOption} />
        ) : (
          <BarChart option={barOption} />
        )}
      </div>
    </div>
  );
};

export default Chart;
