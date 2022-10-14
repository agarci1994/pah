import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { Button } from "@mui/material";

const drawerWidth = 240;

export const ResponsiveDrawer = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <h2 style={{ marginLeft: "19px" }}>PAH VALLEKAS</h2>
      <Divider />
      <List>
        {[
          { name: "Fichas", collection: "fichas" },
          { name: "Documentos utiles", collection: "documentos" },
        ].map((text, index) => (
          <>
            <ListItem
              key={text}
              disablePadding
              onClick={() => props.setType(text.collection)}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <ContactPageIcon />
                  ) : (
                    <AssignmentReturnedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <Toolbar style={{ position: "absolute" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
          <Button
            variant="contained"
            color="error"
            style={{ margin: "10px 40px", top: "90%", position: "sticky" }}
            onClick={() => props.handleLogout()}
          >
            Salir
          </Button>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundImage: "linear-gradient( 117deg,  rgb(100, 174, 114) 39.2%, rgba(255,255,255,1) 156.2% )",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
          <Button
            variant="contained"
            color="error"
            style={{ margin: "10px 40px", top: "90%", position: "sticky" }}
            onClick={() => props.handleLogout()}
          >
            Salir
          </Button>
        </Drawer>
      </Box>
    </Box>
  );
};
