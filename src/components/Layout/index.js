import React, { useContext } from "react";
import { Container, Fab, useTheme } from "@mui/material";
import ToDo from "views/todoList";
import { BsSun, BsMoon } from "react-icons/all";
import { ThemeContext } from "context/ThemeContext";

const Layout = () => {
  const { toggleMode,changecolor } = useContext(ThemeContext);
  const theme = useTheme();
  return (
    <>
      <Fab size="small" variant="circular" onClick={toggleMode}>
        {theme.palette.mode === "dark" && <BsSun />}
        {theme.palette.mode === "light" && <BsMoon />}
      </Fab>
      <Fab size="small" variant="circular" sx={{backgroundColor:theme.palette.primary.main}} onClick={()=>changecolor("primary","#51ffd1")}>
        P
      </Fab>
      <Fab size="small" variant="circular" sx={{backgroundColor:theme.palette.secondary.main}} onClick={()=>changecolor("secondary","#ceab2f")}>
        s
      </Fab>
      <Container>
        <ToDo />
      </Container>
    </>
  );
};

export default Layout;
