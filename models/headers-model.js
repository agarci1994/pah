import { Button } from "@mui/material";

export const headerFichas = [
  { field: "nombre", headerName: "Nombre", width: 150 },
  { field: "apellidos", headerName: "Apellidos", width: 200 },
  { field: "direccion", headerName: "Dirección", width: 250 },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "telefono",
    headerName: "Telefono",
    width: 150,
  },
  {
    field: "propietario",
    headerName: "Propietario",
    width: 130,
  },
  {
    field: "tipo",
    headerName: "Tipo",
    width: 100,
  },
  {
    field: "ver",
    headerName: "Action",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        console.log(params)
      };

      return <Button onClick={onClick}>click</Button>;
    }
  }
]

export const headerDocumentos = {};
