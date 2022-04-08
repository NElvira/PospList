import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { InfoBox } from "./components/InfoBox";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { AllPosts } from "./Pages/AllPosts";
import { NotFoundPage } from "./Pages/NotFoundPage/NotFoundPage";
import { UserContext } from "./context/userContext";
import { PostPage } from "./Pages/PostPage";
import Spinner from "./components/Spinner";
import "./index.css";
import api from "./utils/Api"

export const App = () => {
    const [posts, setPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Promise.all([api.getAllPosts(), api.getUserInfo()])
            .then(([postData, userData]) => {
                setPosts(postData);
                setCurrentUser(userData);
                setIsLoading(false);
            }
            );
    }, []);

    function handlePostLike({ _id, likes }) {
        const isLiked = likes.some((id) => id === currentUser._id);
        api.changeLikeStatus(_id, isLiked)
            .then((newPost) => {
                const newPostState = posts.map(post => {
                    return post._id === newPost._id ? newPost : post;
                })
                setPosts(newPostState);
            })
    }

    function handleDeletePost({ _id }) {
        api.deletePost(_id).then(() => {
            api.getPostsList().then((newPosts) => {
                setPosts(newPosts);
            });
        });
    }

    return (
        <UserContext.Provider value={currentUser}>
            <Header />
            <div className="content">
                <InfoBox setPosts={setPosts} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            isLoading
                                ? <Spinner />
                                : <AllPosts
                                    posts={posts}
                                    handlePostLike={handlePostLike}
                                    handleDeletePost={handleDeletePost}
                                />
                        }
                    />
                    <Route
                        path="/post/:postID"
                        element={
                            <PostPage
                                posts={posts}
                                handlePostLike={handlePostLike}
                                handleDeletePost={handleDeletePost}
                            />
                        }
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
            <Footer />
        </UserContext.Provider>
    );
};