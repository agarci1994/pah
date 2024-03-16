import { Button, MenuItem, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { createCollection } from "../utils/getCollections";
import { uploadFile } from "../utils/storage";
import { fichas, documentos, archivo } from "../models/form-model";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

export const ModalForm = ({
  open,
  handleClose,
  value,
  type,
  setRefresh,
  refresh,
}) => {
  const [obj, setObj] = useState({});
  const [form, setForm] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (value && type !== "archivo") {
      setObj(value);
    }
  }, [value]);

  useEffect(() => {
    switch (type) {
      case "fichas":
        setForm(fichas);
        break;
      case "documentos":
        setForm(documentos);
        break;
      case "archivo":
        setForm(archivo);
        break;
      default:
        break;
    }
  }, [type]);

  const handleSubmit = async () => {
    if (type !== "archivo") {
      console.log(obj);
      await createCollection("fichas", {
        ...obj,
        lastUpdate: new Date().toLocaleDateString("es-ES"),
      });
      setObj(value || {});
      setRefresh(!refresh);
      handleClose();
    } else {
      await uploadFile("pah", value.id, obj, value);
      setObj({});
      handleClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        sx={{
          width: "90%",
          position: "absolute",
          overflow: "scroll",
          height: "90%",
          display: "block",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "40px",
          background: "#ffffff",
          "border-radius": "0.5em",
          "box-shadow": "0 10px 20px rgba(black, 0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundImage:
              "linear-gradient( 200deg,  rgb(100, 174, 114) 2%, rgba(255,255,255,1) 126.2% )",
            "border-radius": "0.5em",
            padding: "10px",
          }}
        >
          <h2 style={{ margin: "10px" }}>Crear ficha</h2>
          <Button
            onClick={() => {
              setObj({});
              handleClose();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </Button>
        </div>
        <div>
          {form.map((prop, i) => {
            return prop.option ? (
              <TextField
                key={i}
                {...prop}
                style={
                  window.innerWidth > 986
                    ? prop.style
                    : { width: "93%", margin: "10px" }
                }
                value={obj[prop.value] || ""}
                onChange={({ target: { value } }) =>
                  setObj({ ...obj, [prop.value]: value })
                }
              >
                {prop.option.map((opt, i) => {
                  return (
                    <MenuItem key={i} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  );
                })}
              </TextField>
            ) : prop.type === "data" ? (
              <div
                style={{
                  margin: "10px",
                  width: "30%",
                  display: "-webkit-inline-box",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <MobileDatePicker
                    key={i}
                    {...prop}
                    inputFormat="MM/DD/YYYY"
                    value={
                      obj[prop.value]
                        ? moment(
                            moment(obj[prop.value]).format("L"),
                            "L"
                          ).format("L")
                        : null
                    }
                    onChange={(valueData) => {
                      setObj({
                        ...obj,
                        [prop.value]: moment(valueData).format("L"),
                      });
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            ) : (
              <TextField
                key={i}
                {...prop}
                style={
                  window.innerWidth > 980
                    ? prop.style
                    : { width: "93%", margin: "10px" }
                }
                value={obj[prop.value]}
                onChange={({ target: { value } }) =>
                  setObj({ ...obj, [prop.value]: value })
                }
              />
            );
          })}
          {type === "archivo" && (
            <div>
              <TextField
                type="file"
                style={{ width: "93%", margin: "10px" }}
                onChange={({ target: { files } }) =>
                  setObj({ ...obj, file: files[0] })
                }
              />
            </div>
          )}
          {error && <p>ERROR!!!</p>}
          {value?.lastUpdate && (
            <p style={{ fontWeight: "bold", fontSize: 19, marginLeft: 10 }}>
              Ultima edición: {value.lastUpdate.toString()}{" "}
            </p>
          )}
          <div style={{ textAlignLast: "right", margin: "34px" }}>
            <Button
              disabled={
                !(
                  form
                    .filter(({ required }) => required)
                    .filter(({ value }) => obj[value]).length ===
                  form.filter(({ required }) => required).length
                )
              }
              size="large"
              variant="contained"
              color="success"
              onClick={() => handleSubmit()}
            >
              {type !== "archivo" && value ? "Editar" : "Crear"}
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
