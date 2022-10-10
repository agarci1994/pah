import { Divider, List, ListItem, ListItemText } from "@mui/material";

export const Nav = () => (
  <List component="nav" aria-label="mailbox folders">
    <ListItem button>
      <ListItemText primary="Casos" />
    </ListItem>
    <Divider />
    <ListItem button divider>
      <ListItemText primary="Actas" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Documentos" />
    </ListItem>
    <Divider light />
  </List>
);
