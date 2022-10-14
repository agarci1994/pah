import { Button, MenuItem, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { createCollection } from "../utils/getCollections";
import { fichas, documentos } from "../models/form-model";

export const ModalForm = ({ open, handleClose, value, type }) => {
  const [obj, setObj] = useState({});
  const [form, setForm] = useState([])

  useEffect(() => {
    if (value) {
      setObj(value)
    }
  }, [value])

  useEffect(() => {
    switch (type) {
      case "fichas":
        setForm(fichas);
        break;
      case "documentos":
        setForm(documentos);
        break;
      default:
        break;
    }
  }, [type]);

  const handleSubmit = async () => {
    await createCollection("fichas", obj);
    setObj(value||{})
    handleClose()
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
            backgroundImage: "linear-gradient( 200deg,  rgb(100, 174, 114) 2%, rgba(255,255,255,1) 126.2% )",
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
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
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
          <div style={{ textAlignLast: "right", margin: "34px" }}>
            {form
              .filter(({ required }) => required)
              .filter(({ value }) => obj[value]).length ===
              form.filter(({ required }) => required).length &&
              !value && (
                <Button
                  size="large"
                  variant="contained"
                  color="success"
                  onClick={() => handleSubmit()}
                >
                  Crear
                </Button>
              )}
            {value && (
              <Button
                size="large"
                variant="contained"
                color="success"
                onClick={() => handleSubmit()}
              >
                Editar
              </Button>
            )}
          </div>
        </div>
      </Box>
    </Modal>
  );
};
