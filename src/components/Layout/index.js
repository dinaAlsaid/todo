import React, { useContext } from "react";
import { Container, Fab, useTheme, Box } from "@mui/material";
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
        <Fab onClick={() => setShow(!showForm)}>
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
      <Container>
        <ToDo />
      </Container>
    </>
  );
};

export default Layout;
