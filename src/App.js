import './App.css';
import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Paper,
  Grid,
  CardMedia,
  CardContent,
  BottomNavigation,
  BottomNavigationAction,
  DialogContentText,
  TextField, DialogContent, Dialog, DialogTitle, DialogActions,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import {Favorite, Folder, Layers, LocationOn, PlayCircleFilled, Restore} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  iconButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"

  },
  mainFeaturesPostContent: {
    position: "relative",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(3)
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(0,0,0,.3)"
  },
  cardMedia:{
    paddingTop: "57%"
  },
  cardContent:{
    flexGrow: 1
  },
  cardGrid:{
    marginTop: 5
  },
  footer:{
    marginTop:20,
    marginBottom:5
  }
}))

const cards = [1,2,3,4,5,6,7,8]

function App() {
  const classes = useStyles();
  const [value,setValue] = React.useState("recents")
  const handleChange = (event, newValue)=>{
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen =()=>{
    setOpen(true);
  };
  const handleClose=()=>{
    setOpen(false);
  }

  return (<>
      <AppBar positioz={"fixed"}>
    <Container fixed>
      <Toolbar>
        <IconButton className={classes.iconButton} edge={"start"} color={"inherit"} aria-label={"menu"}>
        <MenuIcon/>
        </IconButton>
        <Typography className={classes.title} variant={"h5"}>WEBOCRAT</Typography>
        <Box mx={3}>
          <Button color={"inherit"} variant={"outlined"}>Sign up</Button>
        </Box>
        <Button color={"secondary"} variant={"contained"} onClick={handleClickOpen}>Log in</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby={"form-dialog-title"}>
                <DialogTitle id="form-dialog-title">Log In</DialogTitle>
          <DialogContent>
            <DialogContentText>Login to do somthing</DialogContentText>
            <TextField
                autoFocus
                margin={"dense"}
                id={"email"}
                label={"Email"}
                type={"email"}
                fullWidth
            />
            <TextField
                autoFocus
                margin={"dense"}
                id={"pass"}
                label={"Password"}
                type={"password"}
                fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color={"secondary"}>Cancel</Button>
            <Button onClick={handleClose} color={"primary"}>Login</Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </Container>
  </AppBar>
        <main>
          <Paper
              className={classes.mainFeaturesPost}
              style={{backgroundImage: `url(https://source.unsplash.com/random)`}}
          >
            <Container fixed>
              <Grid container >
                <div className={classes.overlay}/>
                <Grid item md={6}>

                  <div className={classes.mainFeaturesPostContent}>
                    <Typography
                        component="h1"
                        variant="h3"
                        color="inherit"
                        gutterBottom
                    >
                      WEBOCRAT
                    </Typography>
                    <Typography
                        variant="h5"
                        color="inherit"
                        paragraph
                    >
                      Ваш партнёр в мире IT
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary">
                      Learn more
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Container>

          </Paper>
          <div className={classes.mainContainer}>
            <Container maxWidth="sm">
              <Typography variant="h3" align={"center"} color={"textPrimary"} gutterBottom>Webocrat</Typography>
              <Typography variant="h5" align={"center"} color={"textSecondary"} paragraph>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Typography>
            <div>
              <Grid container spacing={2} justify={"center"}>
                <Grid item>
                  <Button variant={"contained"} color={"primary"}>Start</Button>
                </Grid>
                <Grid item>
                  <Button variant={"outlined"} color={"secondary"}>More</Button>
                </Grid>
              </Grid>
            </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth={"md"}>
            <Grid container spacing={4}>
              {cards.map((card)=>(
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                          className={classes.cardMedia}
                          image={"https://source.unsplash.com/random"}
                          title={"img_title"}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography variant={"h5"} gutterBottom>
                          Blog post
                        </Typography>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size={"small"} color={"primary"}>
                          View
                        </Button>
                        <Button size={"small"} color={"secondary"}>
                          Edit
                        </Button>
                        <Layers/>
                        <PlayCircleFilled/>
                      </CardActions>
                    </Card>
                  </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align={"center"} gutterBottom>Footer</Typography>
          <BottomNavigation
            value={value}
            onChange={handleChange}
            className={classes.root}
            >
            <BottomNavigationAction
              label="Recents"
              value="recents"
              icon={<Restore/>}
            />
            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={<Favorite/>}
            />
            <BottomNavigationAction
                label="Nearby"
                value="nearby"
                icon={<LocationOn/>}
            />
            <BottomNavigationAction
                label="Folder"
                value="folder"
                icon={<Folder/>}
            />
          </BottomNavigation>
          <Typography align={"center"} color={"secondary"}>
            Webocrat by Evgeniy Polyakov 2020
          </Typography>
        </footer>

    </>
  );
}

export default App;
