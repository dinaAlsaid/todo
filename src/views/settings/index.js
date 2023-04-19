import React from "react";
import { Container } from "@mui/material";
import SideNote from "components/designElements/SideNote/index";
import SettingsForm from "./form";

const settingsView = ({ show, onClose }) => {

  return (
    <SideNote show={show} onClose={onClose}>
      <Container>
        <SettingsForm/>
      </Container>
    </SideNote>
  );
};

export default settingsView;
