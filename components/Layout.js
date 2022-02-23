import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyle from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyle();
  return (
    <div>
      <Head>
        <title>Next Amazon</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>amazon</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Next Amazon.</Typography>
      </footer>
    </div>
  );
}
