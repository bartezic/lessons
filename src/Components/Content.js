import React, {Fragment} from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core/es/index";

const Content = ({classes = {}, selectedLesson = 'elopage'} = {}) => (
  <Fragment>
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          {selectedLesson}
        </Typography>
      </Toolbar>
    </AppBar>
    <div className={classes.content}>
      {`${selectedLesson} `.repeat(1000)}
    </div>
  </Fragment>
);

export default Content
