import React, { Component } from "react";
// import axios from "axios";
import { Route, NavLink } from "react-router-dom";
// NavLink = to add some styling

import Posts from "./Posts/Posts";
import NewPosts from "../../components/NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

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
                {/* to="/"> -> react treats this as a prefix "/"  
                the full path should be this "/", the active link.. 
                now we override that with exact 
                */}
                <NavLink
                  to="/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
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
        {/* ="/:id   -> route parameter */}
        <Route path="/:id" exact component={FullPost} />

        {/* prevent to re render the page - LInk*/}
      </div>
    );
  }
}

export default Blog;
