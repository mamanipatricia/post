import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  componentDidMount() {
    // it doesn't finish inmediately, it needs time to go to the server and get the data, JS thought executes your code in a  synchronous manner
    // it resolves when the dato from the backend is there;

    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log("response", response);
    });
  }

  render() {
    return (
      <div>
        <section className="Posts">
          <Post />
          <Post />
          <Post />
        </section>
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
