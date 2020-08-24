import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// material ui core
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

//Icons
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SearchIcon from "@material-ui/icons/Search";

// deal json file
import deal from "../../../../data/deal.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbarStyle: {
    width: "100%",
    backgroundColor: "#034376",
    height: "65px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  search: {
    display: "flex",
    margin: "auto",
    paddingRight: "10%",
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    maxheight: "45px",
  },

  formControl: {
    backgroundColor: "#FFFFFF",
    borderRadius: "2px 0px 0px 2px",
    borderRightStyle: "solid",
    borderRightColor: "#E0DCDC",
    borderRightWidth: "3px",
    width: "25%",
    marginTop: "1%",
    marginBottom: "1%",
    height: "45px",
  },

  input: {
    backgroundColor: "#fff",
    width: "25vw",
    height: "45px",
    paddingLeft: "10px",
  },
  searchIcon: {
    display: "flex",
    backgroundColor: "#018E01",
    width: "40px",
    borderRadius: "0px 2px 2px 0px",
    height: "45px",
  },
  icon: {
    margin: "auto",
  },

  button: {
    height: "45px",
  },

  selectEmpty: {
    width: "100%",
    backgroundColor: "#ffffff",
    height: "45px",
    paddingBottom: "15px",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    position: "absolute",
    top: "131px",
    width: "18vw",
    height: "100vh",
  },
  drawerHeader: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  dropdownStyle: {
    border: "1px solid black",
    borderRadius: "5%",
    backgroundColor: "lightgrey",
  },
}));

export default function HeaderBottom() {
  const classes = useStyles();
  const theme = useTheme();
  const [opens, setOpens] = useState(false);

  const handleDrawerOpen = () => {
    setOpens(!opens);
  };

  const handleDrawerClose = () => {
    setOpens(false);
  };

  // deal json file state

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let offerDeal = deal.offers;
      setData(offerDeal);
    };
    fetchData();
  }, []);

  // ===========

  // select bar state

  const [select, setSelect] = useState({
    items: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setSelect({
      ...select,
      [name]: event.target.value,
    });
  };

  // ============

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appbarStyle}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.search}>
            <FormControl className={classes.formControl} variant="filled">
              <Select
                value={select.items}
                onChange={handleChange}
                name="items"
                className={classes.selectEmpty}
                disableUnderline
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">Select Category</MenuItem>
                {data.map((i) => (
                  <MenuItem value={i.category_id}>{i.category_label}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <InputBase placeholder="Search" className={classes.input} />

            <IconButton className={classes.searchIcon} color="inherit">
              <SearchIcon className={classes.icon} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* ===== App bar drawer ====== */}

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={opens}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <Typography className={classes.title} variant="button" noWrap>
            All Department
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {data.map(({ category_label }) => (
            <>
              <Link
                to={`/category/${category_label}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItem button>
                  <ListItemText>{category_label}</ListItemText>
                </ListItem>
              </Link>
              <Divider />
            </>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
