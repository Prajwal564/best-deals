import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

//Icons
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbarStyle: {
    position: "relative",
    width: "100%",
    backgroundColor: "#034376",
    maxHeight: "70px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
  },

  search: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "11.7%",
    width: "55%",
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
    paddingRight: "2%",
    paddingLeft: "4%",
    width: "25%",
    marginTop: "1%",
    marginBottom: "1%",
    height: "45px",
  },

  input: {
    fontFamily: "Roboto",
    fontSize: "12px",
    backgroundColor: "#FFFFFF",
    paddingLeft: "8%",
    width: "50%",
    height: "45px",
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

  selectEmpty: {
    top: "8px",
    width: "auto",
    paddingBottom: "6px",
    fontSize: "12px",
    fontFamily: "Roboto",
  },
}));

export default function HeaderBottom() {
  const classes = useStyles();
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbarStyle}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            ALL DEPARTMENT
          </Typography>

          <div className={classes.search}>
            <FormControl className={classes.formControl}>
              <NativeSelect
                onChange={handleChange}
                name="category"
                className={classes.selectEmpty}
                inputProps={{ "aria-label": "category" }}
              >
                <option value="">All Categories</option>
                <option value="">Electronics</option>
                <option value="">Kitchen</option>
                <option value="">Fashion</option>
              </NativeSelect>
            </FormControl>

            <InputBase
              placeholder="Search…"
              className={classes.input}
              inputProps={{ "aria-label": "search" }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon className={classes.icon} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
