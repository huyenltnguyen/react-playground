import React, { useState } from "react";
import {
  Button,
  Popper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Paper,
} from "@material-ui/core";

const Menu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={onButtonClick}
      >
        Open Menu
      </Button>
      <Popper open={!!anchorEl} anchorEl={anchorEl}>
        <ClickAwayListener onClickAway={handleClose}>
          <Paper>
            <MenuList autoFocusItem variant="menu">
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default Menu;
