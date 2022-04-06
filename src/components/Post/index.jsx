import React from "react";
import style from "./styles.module.css";
import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Grid, Box, SvgIcon, MenuItem } from "@mui/material";
import { Favorite, MoreVert, DeleteOutline } from '@mui/icons-material';
import dayjs from "dayjs"; 
import "dayjs/locale/ru";
dayjs.locale("ru");

export const Post = ({ _id, onPostLike, onDeletePost, currentUser, image, likes, title, author: { avatar, name, email }, text, created_at }) => {
    const isLiked = likes.some(id => id === currentUser._id);
    
    function handleLikeClick() {
        onPostLike({ _id, likes })
    }

    function handleDeletePostClick() {
        onDeletePost(_id);
    }
    
    const dataFormated = dayjs(created_at).format("dddd, DD-MMMM-YYYY hh:mm");

    return (
        <Grid className={style.grid} container item xs={12} sm={6} md={4}>
            <Card className={style.card} sx={{ maxWidth: 345 }}>
            <CardHeader
                    avatar={
                        <Avatar src={avatar && avatar} aria-label="recipe">
                            {!avatar && name.slice(0, 1)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title={email}
                    subheader={dataFormated}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h6" color="text.secondary">
                        {title}
                    </Typography>
                    <Typography variant="body2" noWrap color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: "auto" }} disableSpacing >
                    {likes?.length
                        ? <Box
                            component="span"
                            sx={{
                                display: "flex",
                                background: "#f7f7f7",
                                width: "auto",
                                height: "auto",
                                borderRadius: "25px",
                            }}>
                            <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
                                <SvgIcon>
                                    {isLiked
                                        ? <Favorite sx={{ color: "red" }} />
                                        : <Favorite />}
                                </SvgIcon>
                            </IconButton>
                            {!!likes?.length && <Typography color="text.secondary" sx={{ fontSize: "1.25rem", pr: 1.7, pt: 0.6, pl: 0.3 }}>{likes?.length}</Typography>}
                        </Box>
                        : <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
                            <SvgIcon>
                                {isLiked
                                    ? <Favorite sx={{ color: "red" }} />
                                    : <Favorite />}
                            </SvgIcon>
                        </IconButton>
                    }

                    <MenuItem onClick={handleDeletePostClick}>
                        <DeleteOutline sx={{ mr: "2px", mb: "5px" }} />
                        Delete
                    </MenuItem>
                </CardActions>
            </Card>
        </Grid>
    )
}