import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { getCollection } from "../utils/getCollections";
import { headerFichas } from "../models/headers-model"

export default function DataTable() {

  const [data, setData] = useState([])
  
  useEffect(() => {
      async function fetchData() {
        const a = await getCollection("fichas");
        setData(a)
      }
      fetchData();
  }, []);


  return (
    <div
      style={{
        padding: "20px",
        "background-color": "white",
        padding: "20px",
        width: "80%",
      }}
    >
      <DataGrid
        rows={data}
        columns={headerFichas}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
