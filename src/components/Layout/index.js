import React, { useContext } from "react";
import { Container, Fab, Typography, useTheme, Box } from "@mui/material";
import ToDo from "views/todoList";
import { BsSun, BsMoon, BsPalette } from "react-icons/all";
import { ThemeContext } from "context/ThemeContext";
import PaletteForm from "context/ThemeContext/PaletteForm";
import SideNote from "components/designElements/SideNote";
import { useState } from "react";

const Layout = () => {
  const { toggleMode } = useContext(ThemeContext);
  const theme = useTheme();

  const [showForm, setShow] = useState(false);
  return (
    <>
      <Box>
        <Fab onClick={() => setShow(true)}>
          <BsPalette />
        </Fab>
        <SideNote show={showForm} onClose={() => setShow(false)}>
          <Fab size="small" variant="circular" onClick={toggleMode}>
            {theme.palette.mode === "dark" && <BsSun />}
            {theme.palette.mode === "light" && <BsMoon />}
          </Fab>
          <PaletteForm />
        </SideNote>
      </Box>
      <Box sx={{pl:50}}>
        <Typography variant="h3" color={theme.palette.primary.main}>
          primary
        </Typography>
        <Typography variant="h3" color={theme.palette.secondary.main}>
          secondary
        </Typography>
        <Typography variant="h3" color={theme.palette.error.main}>
          error
        </Typography>
        <Typography variant="h3" color={theme.palette.warning.main}>
          warning
        </Typography>
        <Typography variant="h3" color={theme.palette.info.main}>
          info
        </Typography>
      </Box>
      <Container>
        <ToDo />
      </Container>
    </>
  );
};

export default Layout;
