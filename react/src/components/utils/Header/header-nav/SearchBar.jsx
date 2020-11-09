import React, { useState } from 'react';

//material-ui
import { makeStyles } from '@material-ui/core/styles';

// icons
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

//hover pop up
import Popover from '@material-ui/core/Popover';
import SearchBar from 'material-ui-search-bar';

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    color: '#034376',
    marginRight: '10px',
  },
}));

const HeaderSearchBar = () => {
  const classes = useStyles();

  // search bar
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : null;

  //=======================

  return (
    <div>
      <div className={classes.searchIcon}>
        <IconButton onClick={handleClick} aria-describedby={id}>
          <SearchIcon />
        </IconButton>
      </div>
      {/* popover for search */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
            margin: '0 auto',
            maxWidth: 800,
          }}
        />
      </Popover>
    </div>
  );
};

export default HeaderSearchBar;
