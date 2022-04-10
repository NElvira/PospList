import React from "react";
import { Post } from "../Post";
import { Grid } from '@mui/material';
import style from "./styles.module.css";

export const PostList = ({ handlePostLike, posts, onDeletePost, setPosts }) => {
    return (
        <div className={style["posts"]}>
            <Grid container spacing={2}>
                {posts.map((post) => <Post key={post._id} {...post} onPostLike={handlePostLike} onDeletePost={onDeletePost} setPosts={setPosts} />)}
            </Grid>
        </div>
    );
};
