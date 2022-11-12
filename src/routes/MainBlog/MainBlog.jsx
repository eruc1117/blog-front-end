import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import BasicNavbar from "../../UI/Navbar/BasicNavbar";
import Blog from "../../Component/Blog/Blog";
import "./MainBlog.css";

function MainBlog() {
  let { articleId } = useParams();
  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #424242; }"}</style>
      </Helmet>
      <div className="main-body">
        <BasicNavbar />
        <Blog articleId={articleId} />
      </div>
    </div>
  );
}

export default MainBlog;
