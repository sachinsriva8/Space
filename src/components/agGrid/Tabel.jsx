import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
// import { useState } from "react";
const Tabel = ({ data }) => {
  return (
    <div className="ag-theme-quartz" style={{ height: "98vh" }}>
      <AgGridReact
        columnDefs={Object.keys(data[0]).map((item) => {
          return { field: `${item}` };
        })}
        rowData={data}
        paginationAutoPageSize={true}
        pagination={true}
      />
    </div>
  );
};

export default Tabel;
