import React, {Fragment, useState} from "react";
import {Collapse, List} from "@material-ui/core/es/index";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SidebarButton from "./SidebarButton";

const SidebarItem = ({children, isCategory, name, selectLesson}) => {
  const [open, handleOpen] = useState(false);

  return (
    <Fragment>
      <SidebarButton
        name={name}
        handleClick={isCategory ? handleOpen : selectLesson}
      >
        {!isCategory && open ? <ExpandLess /> : <ExpandMore />}
      </SidebarButton>
      {!isCategory && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map(item => (
              <SidebarItem
                button
                children={item.children}
                isCategory={item.isCategory}
                key={item.id}
                name={item.name}
              />
            ))}
          </List>
        </Collapse>
      )}
    </Fragment>
  )
};

export default SidebarItem
