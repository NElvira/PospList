import React from "react";
import { Post } from "../Post";
import { Grid } from '@mui/material';

export const PostList = ({ onPostLike, postData, currentUser, onDeletePost }) => {
    return (
        <>
            <Grid container spacing={2}>
                {postData.map(post => <Post key={post._id} {...post} onPostLike={onPostLike} currentUser={currentUser} onDeletePost={onDeletePost} />)}
            </Grid>
        </>
    );
};
