import { List } from "@mui/material";

export const TodoListContainer = ({ children }) => {
  return (
    <List sx={{ width: "100%" }}>
      {children}
    </List>
  );
};
