import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { getCollection, createCollection, deleteCollection } from "../utils/getCollections";
import {
  headerFichas,
  headerDocumentos,
  headerFiles,
} from "../models/headers-model";
import { Button } from "@mui/material";
import { ModalForm } from "./modal";
import swal from "sweetalert";

export default function DataTable({ type, setType, files, setFiles }) {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({});
  const [refresh, setRefresh] = useState(true);

  const handleOpen = (value) => {
    setValue(value)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const deleteFile = async (info) => {
    const doc = {...value, files: value.files.filter(file => file.id !== info.id)}
    await createCollection("fichas", doc)
    setValue(doc)
    setFiles(undefined)
  }

  const deleteDocument = async (info) => {
    swal({
      title: "¿Estas seguro?",
      text: "Asegurate bien antes de borrar, no podras recuperar la información",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await deleteCollection("fichas", info);
        setValue(undefined);
        setFiles(undefined);
        setRefresh(!refresh)
        swal("Eliminado!", {
          icon: "success",
        });
      } else {
        swal("¡Por los pelos!");
      }
    });
  };

  useEffect(() => {
    if (files) {
      setHeader(headerFiles(deleteFile));
      setType("archivo")
    } else {
      setHeader(
        headerFichas(
          open,
          handleClose,
          handleOpen,
          setFiles,
          setRefresh,
          refresh,
          deleteDocument
        )
      );
      setType("fichas")
    }
  }, [files])

  useEffect(() => {
    switch (type) {
      case "fichas":
        setHeader(
          headerFichas(
            open,
            handleClose,
            handleOpen,
            setFiles,
            setRefresh,
            refresh,
            deleteDocument
          )
        );
        break;
      case "documentos":
        setHeader(headerDocumentos);
        break;
      default:
        break;
    }
    async function fetchData() {
      const data = await getCollection(type)
      setData(data);
    }
    fetchData();
  }, [type, refresh]);

  return (
    <div
      style={{
        padding: "20px",
        background: "linear-gradient(180deg, rgba(255,255,255,1) 20%, rgba(235,235,235,1) 75%, rgba(173,231,187,1) 150%)",
        width: "100%",
      }}
    >
      <ModalForm
        open={open}
        handleClose={handleClose}
        value={value}
        type={type}
        setRefresh={setRefresh}
        refresh={refresh}
      />
      <div style={{ textAlignLast: "right", marginBottom: "10px" }}>
        <Button
          size="small"
          variant="outlined"
          color="success"
          onClick={() => files ? handleOpen(files) : handleOpen()}
        >
          Crear
        </Button>
      </div>
      <div style={{ height: "90%" }}>
        <DataGrid
          rows={files && files.files || data}
          columns={header}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
      {type === "archivo" && files && <Button onClick={() => setFiles(undefined)}>Atrás</Button>}
    </div>
  );
}
