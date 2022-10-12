import { Button, MenuItem, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { createCollection } from "../utils/getCollections";
import { fichas } from "../models/form-model";

export const ModalForm = ({ open, handleClose }) => {
  const [obj, setObj] = useState({});

  const handleSubmit = async () => {
    await createCollection("fichas", obj);
    setObj({});
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={open}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        sx={{
          width: "70%",
          backgroundColor: "white",
          height: "80%",
          position: "absolute",
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
            return prop.option ? (
              <TextField
                key={i}
                {...prop}
                value={obj[prop.value]}
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
                value={obj[prop.value]}
                onChange={({ target: { value } }) =>
                  setObj({ ...obj, [prop.value]: value })
                }
              />
            );
          })}
          {fichas
            .filter(({ required }) => required)
            .filter(({ value }) => obj[value]).length ===
            fichas.filter(({ required }) => required).length && (
            <Button onClick={() => handleSubmit()}>Crear</Button>
          )}
        </div>
      </Box>
    </Modal>
  );
};
