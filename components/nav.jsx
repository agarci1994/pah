import { Divider, List, ListItem, ListItemText } from "@mui/material";

export const Nav = ({ set }) => (
  <List component="nav" aria-label="mailbox folders">
    <ListItem button>
      <ListItemText primary="Casos" onClick={() => set("fichas")} />
    </ListItem>
    <Divider />
    <ListItem button divider>
      <ListItemText primary="Actas" onClick={() => set("actas")} />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Documentos" onClick={() => set("documentos")} />
    </ListItem>
    <Divider light />
  </List>
);
