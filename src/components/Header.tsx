import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar
      position='static'
      color='default'
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant='h6'
          color='inherit'
          noWrap
          className={classes.toolbarTitle}
        >
          Farm Scheduler
        </Typography>
        <Button
          href='#'
          color='primary'
          variant='outlined'
          className={classes.link}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
