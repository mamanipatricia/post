import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  componentDidMount() {
    // it doesn't finish inmediately, it needs time to go to the server and get the data, JS thought executes your code in a  synchronous manner
    // it resolves when the dato from the backend is there;

    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4); // just 1 to 4 elements
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Max",
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log("response", response);
      })
      .catch((error) => {
        console.log("error-->", error);
        // this.setState({ error: true });
      });
  }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }

    return <section className="Posts">{posts}</section>;
  }
}
export default Posts;
