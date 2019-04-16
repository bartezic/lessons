import React from "react";
import List from "@material-ui/core/es/List/List";
import SidebarItem from "./SidebarItem";

export default ({items, selectLesson}) => (
  <List component="div" disablePadding>
    {items.map(item => (
      <SidebarItem
        button
        children={item.children}
        isCategory={item.isCategory}
        key={item.id}
        name={item.name}
        selectLesson={selectLesson}
      />
    ))}
  </List>
)
