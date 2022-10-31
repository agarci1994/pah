import { Button } from "@mui/material";
import { ModalForm } from "../components/modal";
import FolderIcon from "@mui/icons-material/Folder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from '@mui/icons-material/Delete';
import { RawOff } from "@mui/icons-material";

export const headerFichas = (open, handleClose, handleOpen, setFiles, setRefresh, refresh) => {
  return [
    {
      field: "status",
      headerName: "Estado",
      sortable: false,
      renderCell: ({ row }) => {
        switch (row.status) {
          case "ejecutado":
          return (
            <li
              style={{
                backgroundColor: "#d40d0dde",
                borderColor: "#f40d0dde",
                boxShadow: "0px 0px 4px 1px #d40d0dde",
                listStyle: "none",
              }}
            >
              Ejecutado
            </li>
          );
          case "estancado":
          return (
            <li
              style={{
                backgroundColor: "#e6e000de",
                borderColor: "#e9e000de",
                boxShadow: "0px 0px 4px 1px #e6e000de",
                listStyle: "none",
              }}
            >
              Estancado
            </li>
          );
          case "negociacion":
          return (
            <li
              style={{
                backgroundColor: "#1abddfde",
                borderColor: "#5abddfde",
                boxShadow: "0px 0px 4px 1px #1abddfde",
                listStyle: "none",
              }}
            >
              Negociación
            </li>
          );
          case "firmado":
          return (<li style={{backgroundColor: "#94E185",
    borderColor: "#78D965",
    boxShadow: "0px 0px 4px 1px #94E185", listStyle: "none"}}>Firmado</li>)
          case "desconocido":
          default:
          return (
            <li
              style={{
                backgroundColor: "#a5a5a5de",
                borderColor: "#a9a9a9de",
                boxShadow: "0px 0px 4px 1px #a9a9a9de",
                listStyle: "none",
              }}
            >
              Desconocido
            </li>
          );
        }
      },
    },
    { field: "name", headerName: "Nombre", width: 150 },
    { field: "lastName", headerName: "Apellidos", width: 200 },
    { field: "address", headerName: "Dirección", width: 250 },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      headerName: "Telefono",
      width: 150,
    },
    {
      field: "owner",
      headerName: "Propietario",
      width: 130,
    },
    {
      field: "type",
      headerName: "Tipo",
      width: 100,
    },
    {
      field: "ver",
      headerName: "Editar",
      sortable: false,
      renderCell: ({ row }) => {
        const onClick = () => {
          handleOpen(row);
        };
        return (
          <Button onClick={() => onClick()}>
            <ModalForm
              open={open}
              handleClose={handleClose}
              setRefresh={setRefresh}
              refresh={refresh}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
          </Button>
        );
      },
    },
    {
      field: "files",
      headerName: "Archivos",
      sortable: false,
      renderCell: ({ row }) => {
        const onClick = () => {
          setFiles(row);
        };
        return (
          <Button onClick={() => onClick()}>
            <ModalForm open={open} handleClose={handleClose} />
            <FolderIcon />
          </Button>
        );
      },
    },
  ];
};

export const headerFiles = (deleteFile) => [
  { field: "id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Nombre",
    width: 200,
  },
  {
    field: "description",
    headerName: "Descripción",
    width: 200,
  },
  {
    field: "file",
    headerName: "Ver",
    sortable: false,
    renderCell: ({ row }) => {
      const onClick = () => {
        let alink = document.createElement("a");
        alink.href = row.file;
        alink.target = "_blank";
        alink.click();
      };
      return (
        <Button onClick={() => onClick()}>
          <RemoveRedEyeIcon />
        </Button>
      );
    },
  },
  {
    field: "delete",
    headerName: "Borrar",
    sortable: false,
    renderCell: ({ row }) => {
      return (
        <Button onClick={() => deleteFile(row)}>
          <DeleteIcon />
        </Button>
      );
    },
  },
];

export const headerDocumentos = [
  { field: "index", headerName: "ID", width: 250 },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 200,
  },
];
