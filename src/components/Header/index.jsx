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


export const Header = ({user}) => {


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
                            Posts List
                        </Typography>
                        <Typography
                                    variant="subtitle1"
                                    sx={{ fontSize: "1.2rem"}}
                                >
                                    {user.name && <span>{user.name}</span>}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    sx={{ fontSize: "1.2rem"}}
                                >
                                    {user.about && <span>{user.about}</span>}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    sx={{ fontSize: "1.2rem", mb: 1}}
                                >
                                    {user.email && <span>{user.email}</span>}
                                </Typography>
                    </Toolbar>
                </Box>
                <Box component="div" sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <IconButton
                        aria-label="menu"
                        color="inherit"
                        size="small"
                        id="composition-button"
                        aria-haspopup="true"
                    >
                        <KeyboardArrowDown />
                    </IconButton>
                </Box>
            </Box>
        </AppBar>
    );
};