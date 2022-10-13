import { Button } from "@mui/material";
import { useState } from "react";
import { ModalForm } from "../components/modal";

export const headerFichas = (open, handleClose, handleOpen) => {
  return [
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
      renderCell: ({row}) => {
        const onClick = () => {
          handleOpen(row);
        };
        return (
          <Button onClick={() => onClick()}>
            <ModalForm open={open} handleClose={handleClose} />
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
  ];
};

export const headerDocumentos = [
  { field: "index", headerName: "ID", width: 250 },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 200,
  },
];
