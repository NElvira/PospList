/* import React from "react";
import cn from "classnames";
import s from "./styles.module.css";

export const Header = ({children}) => {
  return (
      <header className={s.header}>
        <div className={cn(s['header-wrapper'], 'container')}>
            {children}
        </div>
      </header>
  );
}; */
import React, { useState, useRef } from "react";
import { Menu, AddAPhotoTwoTone, KeyboardArrowDown } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Typography, Box, Avatar, Modal, TextField, Button, Popper, Paper, Grow, ClickAwayListener, MenuList } from "@mui/material";
export const Header = () => {


    const styleModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 465,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    }

    return (
        <AppBar position="static" sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ pr: 2 }}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" component="h1" sx={{ fontSize: "1rem", flexGrow: 1 }}>
                            Post List
                        </Typography>
                    </Toolbar>
                </Box>
            </Box>
        </AppBar >
    );
};