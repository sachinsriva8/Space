import { useEffect, useState } from "react";
import Tabel from "../agGrid/Tabel";
import Header from "../header/Header";
import fetchApi from "../../utils/api/fetchApi";
import { CircleLoader } from "react-spinners";

const DashBoard = () => {
  const [spaceData, setSpaceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const url =
        "https://www.ag-grid.com/example-assets/space-mission-data.json";
      const result = await fetchApi(url);
      setSpaceData(result);
      setIsLoading(false);
    };
    fetchdata();
  }, []);

  return (
    <div>
      <Header data={spaceData} />
      <div>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "90vh",
            }}
          >
            <CircleLoader color="rgba(225, 148, 27, 1)" size={40} />
          </div>
        ) : (
          <Tabel data={spaceData} />
        )}
      </div>
    </div>
  );
};

export default DashBoard;
