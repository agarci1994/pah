import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { getCollection } from "../utils/getCollections";
import { headerFichas, headerDocumentos } from "../models/headers-model"
import { Button } from "@mui/material";
import { ModalForm } from "./modal";

export default function DataTable({type}) {
  const [data, setData] = useState([])
  const [header, setHeader] = useState([])
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    switch (type) { 
      case "fichas":
        setHeader(headerFichas)
        break;
      case "documentos":
        setHeader(headerDocumentos)
        break;
      default:
        break;
    }
    async function fetchData() {
      const data = await getCollection(type);
      setData(data)
    }
    fetchData();
    
  }, [type]);


  return (
    <div
      style={{
        padding: "20px",
        "background-color": "white",
        width: "80%",
      }}
    >
      <ModalForm open={open} handleClose={handleClose} />
      <div>
        <Button onClick={() => handleOpen()}>Crear</Button>
      </div>
      <div style={{ height: "90%" }}>
        <DataGrid
          rows={data}
          columns={header}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}
