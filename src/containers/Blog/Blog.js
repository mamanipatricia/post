import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    // it doesn't finish inmediately, it needs time to go to the server and get the data, JS thought executes your code in a  synchronous manner
    // it resolves when the dato from the backend is there;

    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const posts = response.data.slice(0, 4); // just 1 to 4 elements
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: "Max",
        };
      });
      this.setState({ posts: updatedPosts });
      console.log("response", response);
    });
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return <Post key={post.id} title={post.title}  author={post.author}/>;
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
