import { setBlogs, BlogsIsLoading, updateBlogs } from "./actions";
import axios from "axios";
import { saveErrObjAction } from "../errorObject/saveErrObjAction";
import { openErrModal } from "../ErrorModal/openErrModal";
import { getBlogs } from "./selectors";

export const loadBlogs = () => (dispatch) => {
  dispatch(BlogsIsLoading(true));

  axios("/api/blogs/")
    .then((res) => {
      dispatch(setBlogs(res.data));
      dispatch(BlogsIsLoading(false));
    })
    .catch((err) => {
      dispatch(saveErrObjAction(err));
      dispatch(openErrModal);
    });
};

export const filterBlogs = (id) => (dispatch, getStore) => {
  const blogs = getBlogs(getStore());

  const filtered = blogs.filter((blog) => blog._id !== id);
  dispatch(updateBlogs(filtered));
};

export const updateBlogByNewSrc = (src, id) => (dispatch, getStore) => {
  const blogs = getBlogs(getStore());

  const updated = blogs.map((blog) => {
    if (blog._id === id) {
      return {
        ...blog,
        photo: src,
      };
    } else {
      return blog;
    }
  });

  dispatch(updateBlogs(updated));
};

export const updateBlogsByNewObject = (newBlog, id) => (dispatch, getStore) => {
  const blogs = getBlogs(getStore());

  const updated = blogs.map((blog) => {
    if (blog._id === id) {
      return newBlog;
    } else {
      return blog;
    }
  });

  dispatch(updateBlogs(updated));
};
