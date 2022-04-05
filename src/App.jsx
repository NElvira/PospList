import React, { useState } from "react";
import { postData } from "./posts";
import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { PostList } from "./components/PostList";
import { Footer } from "./components/Footer";

export const App = () => {
  const [posts, setPosts] = useState(postData);

  return (
      <>
          <Container maxWidth="lg">
              <Header />
                  <Button />
              <PostList postData={posts} />
              <Footer />
          </Container>
      </>
  );
};