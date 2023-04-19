import { BsCircle, BsCircleFill, BsCircleHalf } from "react-icons/all";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

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
    <ListItem disablePadding secondaryAction={<IconButton onClick={handleAction}>{actionButton}</IconButton>}>
      <ListItemButton onClick={handleStatus}>
      <ListItemAvatar>{icon}</ListItemAvatar>
        <ListItemIcon>{getStatusIcon(status)}</ListItemIcon>
        <ListItemText
          secondary={
            <Box>
              <Typography variant="handwritten">{note}</Typography>
            </Box>
          }
        >
          <Typography variant="handwritten">{item}</Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
