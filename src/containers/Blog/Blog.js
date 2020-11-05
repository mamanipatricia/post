import React, { Component } from "react";
// import axios from "axios";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
// NavLink = to add some styling

import "./Blog.css";
import Posts from "./Posts/Posts";
import asyncComponent from "../../hoc/asyncComponent";
// import NewPosts from "../../components/NewPost/NewPost";

const AsyncNewPost = asyncComponent(() => {
  // the import keyword as a function
  // special syntax the dynamic import syntax which means whatever comes between the parentheses here is only imported when that function here is executed and that function here will only be executed once we render asyncNewPost to the screen. So then take my original path to new post and now i'm only importing this when this constant gets used somewhere.
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true,
  };

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
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  Posts
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
        {/* the first route that matches a given path will be loaded an thereafeter, it will just stop analyzing the routes, it won't render any other route  */}

        {/* this will always get analized */}
        {/* <Route path="/" exact component={Posts} /> */}

        {/* it doesn't render content, it simply just changes the URL so that we then reach */}
        {/* <Redirect from="/" to="/posts" /> */}

        {/* <Route path="/" component={Posts} /> */}

        {/* ="/:id   -> route parameter */}
        {/* <Route path="/:id" exact component={FullPost} /> */}
        {/* <Route path="/posts:id" exact component={FullPost} /> */}

        {/* prevent to re render the page - LInk*/}

        {/* <Posts /> */}
        {/* i want to load this dynamically depending on the path we have in the URL and for (slash nothing) */}
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />

        <Route path="/" render={() => <h1>Home 2</h1>} /> */}
        {/* <Switch> </Switch> to ensure that only one route gets loaded */}
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
