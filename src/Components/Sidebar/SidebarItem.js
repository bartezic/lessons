import React, {Fragment, useState} from "react";
import {Collapse, List} from "@material-ui/core/es/index";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SidebarButton from "./SidebarButton";

const SidebarItem = ({children, isCategory, name, selectLesson}) => {
  const [open, toggleOpen] = useState(false);

  const handleClick = isCategory ? () => toggleOpen(!open) : () => selectLesson(name);

  return (
    <Fragment>
      <SidebarButton
        name={name}
        handleClick={handleClick}
      >
        {isCategory && open ? <ExpandLess /> : <ExpandMore />}
      </SidebarButton>
      {isCategory && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map(item => (
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
        </Collapse>
      )}
    </Fragment>
  )
};

export default SidebarItem
