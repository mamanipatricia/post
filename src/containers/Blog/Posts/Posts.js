import React, { Component } from "react";
import axios from "../../../axios";
import { Route } from "react-router-dom";

import Post from "../../../components/Post/Post";
import "./Posts.css";
import FullPost from "../FullPost/FullPost";

// import { Link } from "react-router-dom";
class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    // it doesn't finish inmediately, it needs time to go to the server and get the data, JS thought executes your code in a  synchronous manner
    // it resolves when the dato from the backend is there;
    console.log("this.props:: ", this.props);
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

  postSelectedHandler = (id) => {
    // this.setState({ selectedPostId: id });

    // work both
    // this.props.history.push({ pathname: "/posts" + id });
    this.props.history.push("/posts/" + id);
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          // <Link to={"/posts/" + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>;
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}
export default Posts;
