import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { PostList } from "./components/PostList";
import { Footer } from "./components/Footer";
import api from "./utils/Api"

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    Promise.all([api.getAllPosts(), api.getUserInfo()])
    .then(([postData, userData]) => {
        setPosts(postData);
        setCurrentUser(userData);
    })
  },[]);

  function handlePostLike({ _id, likes }) {
    const isLiked = likes.some(id => id === currentUser._id);
    api.changeLikeStatus(_id, isLiked)
        .then((newPost) => {
            const newPostState = posts.map(post => {
                return post._id === newPost._id ? newPost : post;
            })
            setPosts(newPostState);
        })
    }

  function handleDeletePost(postId) {
    api.deletePostById(postId)
        .then((newPostData) => {
            const newPostState = posts.filter(post => {
                return post._id !== newPostData._id;
            })
            setPosts(newPostState);
        })
    }

  return (
      <>
          <Container maxWidth="lg"
              sx={{
                  display: "flex",
                  minHeight: "100vh",
                  flexDirection: "column",
              }}>
              <Header user={currentUser}></Header>
                  <Button />
              <PostList 
              postData={posts}
              onPostLike={handlePostLike}
              currentUser={currentUser}
              onDeletePost={handleDeletePost}
              />
              <Footer />
          </Container>
      </>
  );
};