import { Grid } from "@mui/material";
import React from "react";
import { BsCircle, BsCircleFill, BsCircleHalf } from "react-icons/all";

export const TodoListItem = ({ icon, item, note, actionButton, status, handleStatus, handleAction }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case "done":
        return <BsCircleFill />;
      case "doing":
        return <BsCircleHalf />;
      case "todo":
        return <BsCircle />;
      default:
        return <></>;
    }
  };

  return (
    <li>
      <Grid>
        <Grid item sm={1} md={1}>
          {icon}
        </Grid>
        <Grid item className="hover-pointer" onClick={handleStatus}>
          <span className="bullet-icons small m-2">{getStatusIcon(status)}</span>
          <span className="task">{item}</span>
          {note && (
            <ul>
              <li className="note">{note}</li>
            </ul>
          )}
        </Grid>
        <Grid item sm={1} md={1} onClick={handleAction}>
          {actionButton}
        </Grid>
      </Grid>
    </li>
  );
};
