import { BsCircle, BsCircleFill, BsCircleHalf } from "react-icons/all";
import { ListItem, ListItemButton, ListItemIcon, ListItemText,ListItemAvatar } from "@mui/material";

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
    <ListItem>
      <ListItemAvatar>{icon}</ListItemAvatar>
      <ListItemIcon>{getStatusIcon(status)}</ListItemIcon>
      <ListItemText secondary={note} onClick={handleStatus}>
        {item}
      </ListItemText>
      <ListItemButton onClick={handleAction}>{actionButton}</ListItemButton>
    </ListItem>
  );
};
