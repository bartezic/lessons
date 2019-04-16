import React from "react";
import SidebarItem from "./SidebarItem";
import {Drawer, List} from "@material-ui/core/es/index";

export default ({items, selectLesson}) => (
  <Drawer
    variant="permanent"
    anchor="left"
  >
    <List>
      {items.map(item => (
        <SidebarItem
          button
          children={item.children}
          key={item.id}
          name={item.name}
          isCategory={item.isCategory}
          selectLesson={selectLesson}
        />
      ))}
    </List>
  </Drawer>
);
