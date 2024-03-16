export const fichas = [
  {
    label: "Estado",
    value: "status",
    style: { width: "35%", margin: "10px" },
    select: true,
    option: [
      { value: "ejecutado", label: "Ejecutado" },
      { value: "estancado", label: "Estancado" },
      { value: "negociacion", label: "Negociación" },
      { value: "firmado", label: "Firmado con clausulas abusivas" },
      { value: "desconocido", label: "Desconocido" },
    ],
    required: true,
  },
  {
    label: "Fecha de entrada en la vivienda",
    value: "init",
    style: { width: "35%", margin: "10px" },
    type: "data",
  },
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
      { value: "desconocido", label: "En investigación" },
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
  {
    label: "Tablón de notas",
    value: "extra",
    style: { margin: "10px", width: "97%" },
    rows: 5,
    multiline: true,
  },
  {
    label: "Fecha del último lanzamiento",
    value: "last",
    style: { width: "35%", margin: "10px" },
    type: "data",
  },
  {
    label: "Fecha del proximo lanzamiento",
    value: "next",
    style: { width: "35%", margin: "10px" },
    type: "data",
  },
];

export const archivo = [
  {
    label: "Nombre",
    value: "name",
    style: { width: "47%", margin: "10px" },
    required: true,
  },
  {
    label: "Descripción",
    value: "description",
    style: { width: "48%", margin: "10px" },
    required: true,
  },
];

export const documentos = [
  {
    label: "Nombre",
    value: "name",
    style: { width: "97%", margin: "10px" },
    required: true,
  },
  {
    label: "Archivo",
    value: "file",
    style: { width: "97%", margin: "10px" },
    required: true,
  },
  {
    label: "Descripcion",
    value: "description",
    style: { margin: "10px", width: "97%" },
    rows: 5,
    multiline: true,
  },
];
