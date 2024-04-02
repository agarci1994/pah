import { useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  TextField,
  IconButton,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskList({ task, setObj }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleToggleCheck = (index) => {
    const newTask = task[index];
    newTask.value = !newTask.value;
    setObj((obj) => ({
      ...obj,
      task: [
        ...task.slice(0, index),
        newTask,
        ...task.slice(index + 1, task.length),
      ],
    }));
  };

  const handleToggleDelete = (index) => {
    setObj((obj) => ({
      ...obj,
      task: [...task.slice(0, index), ...task.slice(index + 1, task.length)],
    }));
  };

  return (
    <>
      <h3>Tareas:</h3>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {task?.map((value, i) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleToggleDelete(i)}
                >
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={() => handleToggleCheck(i)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    checked={value.value}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={value.title}
                  secondary={value.description}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <div style={{ display: "flex", gap: 5 }}>
        <TextField
          name="titulo"
          label="titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "30%", margin: "10px" }}
        />
        <TextField
          name="descripcion"
          label="descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "30%", margin: "10px" }}
        />
        <Button
          variant="outlined"
          style={{ margin: "20px 40px" }}
          onClick={() => {
            setObj((obj) => ({
              ...obj,
              task: obj.task
                ? [...obj.task, { title, description }]
                : [{ title, description }],
            }));
            setTitle("");
            setDescription("");
          }}
        >
          Añadir tarea
        </Button>
      </div>
    </>
  );
}
