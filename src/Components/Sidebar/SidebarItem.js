import React, {Fragment, useState} from "react";
import Collapse from "@material-ui/core/es/Collapse/Collapse";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SidebarButton from "./SidebarButton";
import SidebarList from "./SidebarList";

const SidebarItem = ({children, isCategory, name, selectLesson}) => {
  const [open, toggleOpen] = useState(false);

  const handleClick = isCategory ? () => toggleOpen(!open) : () => selectLesson(name);

  const ExpandIcon = open ? ExpandLess : ExpandMore;

  return (
    <Fragment>
      <SidebarButton
        name={name}
        handleClick={handleClick}
      >
        {isCategory && <ExpandIcon/>}
      </SidebarButton>
      {isCategory && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <SidebarList
            items={children}
            selectLesson={selectLesson}
          />
        </Collapse>
      )}
    </Fragment>
  )
};

export default SidebarItem
