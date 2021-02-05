import React from "react";
import Blogs from "../../components/Blogs/Blogs";
import Image from "../../components/Image/Image";
import { useSelector } from "react-redux";
import { getBlogs } from "../../store/Blogs/selectors";
import { useHistory } from "react-router-dom";
import SectionHeading from "../../components/generalComponents/SectionHeading/SectionHeading";


const BlogPage = () => {
  const mainClassName = "blog";
  // const history = useHistory();
  // const path = history.pathname;
  // console.log(history)
  // const blogId =
  // const blogData = useSelector(getBlogs)


  return (
    <div className={`${mainClassName}-page`}>
      <div className={`${mainClassName}-content`}>
        <Image />
        <SectionHeading />


        {/* <Blogs /> */}
      </div>
    </div>
  );
};

export default BlogPage;