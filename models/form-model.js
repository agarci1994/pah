export const fichas = [
  {
    label: "Nombre",
    value: "name",
    style: { width: "35%", margin: "10px" },
    required: true,
  },
  {
    label: "Apellidos",
    value: "lastName",
    style: { width: "60%", margin: "10px" },
    required: true,
  },
  { label: "Email", value: "email", style: { width: "57%", margin: "10px" } },
  {
    label: "Teléfono",
    value: "phone",
    type: "number",
    style: { width: "38%", margin: "10px" },
  },
  {
    label: "Propietario",
    value: "owner",
    style: { width: "30%", margin: "10px" },
  },
  {
    label: "Tipo",
    value: "type",
    style: { width: "20%", margin: "10px" },
    select: true,
    option: [
      { value: "hipoteca", label: "Hipoteca" },
      { value: "okupacion", label: "Okupacion" },
      { value: "alquiler", label: "Alquiler" },
    ],
    required: true,
  },
  {
    label: "Tipo de propietario",
    value: "typeOwner",
    style: { width: "97%", margin: "10px" },
    select: true,
    option: [
      { value: "pequeño", label: "Pequeño propietario" },
      { value: "grande", label: "Gran tenedor" },
    ],
  },
  {
    label: "Dirección",
    value: "address",
    style: { width: "97%", margin: "10px" },
  },
  {
    label: "Descripcion",
    value: "description",
    style: { margin: "10px", width: "97%" },
    rows: 5,
    multiline: true,
  },
];
