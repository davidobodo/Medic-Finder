import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useStyles } from './AppStyles';

export default function App() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth={false} className={classes.root}>
        <Typography component="div" />
      </Container>
    </React.Fragment>
  );
}

