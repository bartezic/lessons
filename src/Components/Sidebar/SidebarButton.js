import React from "react";
import {ListItem, ListItemText} from "@material-ui/core/es/index";

export default ({children, handleClick, name}) => (
  <ListItem button onClick={handleClick}>
    <ListItemText inset primary={name} />
    {children}
  </ListItem>
);
