import { Button, MenuItem, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { createCollection } from "../utils/getCollections";
import { fichas } from "../models/form-model";

export const ModalForm = ({ open, handleClose, value }) => {
  const [obj, setObj] = useState({});

  useEffect(() => {
    if (value) {
      setObj(value)
    }
  }, [value, window.innerWidth])

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
          backgroundColor: "white",
          position:'absolute',
          overflow:'scroll',
          height:'90%',
          display:'block',
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px",
          }}
        >
          <h2>Crear ficha</h2>
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
          {fichas.map((prop, i) => {
            console.log(window.innerWidth);
            return prop.option ? (
              <TextField
                key={i}
                {...prop}
                style={
                  window.innerWidth > 986
                    ? prop.style
                    : { width: "100%", margin: "10px" }
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
                    : { width: "100%", margin: "10px" }
                }
                value={obj[prop.value]}
                onChange={({ target: { value } }) =>
                  setObj({ ...obj, [prop.value]: value })
                }
              />
            );
          })}
          <div style={{ textAlignLast: "right", margin: "34px" }}>
            {fichas
              .filter(({ required }) => required)
              .filter(({ value }) => obj[value]).length ===
              fichas.filter(({ required }) => required).length &&
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
