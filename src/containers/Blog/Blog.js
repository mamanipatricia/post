import React, { Component } from "react";
// import axios from "axios";
import { Route, Link } from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPosts from "../../components/NewPost/NewPost";

import "./Blog.css";
// import classes from "*.module.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Posts /> */}
        {/* i want to load this dynamically depending on the path we have in the URL and for (slash nothing) */}
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home 2</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPosts} />

        {/* prevent to re render the page - LInk*/}
      </div>
    );
  }
}

export default Blog;
