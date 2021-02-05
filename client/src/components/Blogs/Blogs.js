import React, { useState, useEffect } from "react";
import BlogItem from "./BlogItem/BlogItem";
import SectionHeading from "../generalComponents/SectionHeading/SectionHeading";
import Button from "../generalComponents/Button/Button";
import "./Blogs.scss";
import { useSelector } from "react-redux";
import {
  getBlogs,
  getBlogsIsLoading,
} from "../../store/Blogs/selectors";
import Loader from "../Loader/Loader";
import useLiveHashPush from "../../utils/hooks/useLiveHashPush";

const Blogs = ({ heading, anchorName }) => {
  const [numOfBlogs, setNumOfBlogs] = useState(3);
  const [sortBlogs, setSortBlogs] = useState([]);
  const blogs = useSelector(getBlogs);
  const isLoading = useSelector(getBlogsIsLoading);
  const ref = useLiveHashPush(anchorName);

  useEffect(() => {
    const newBlogs = blogs.sort((a, b) => {
      return a.date === b.date ? 0 : a.date ? -1 : 1;
    });
    setSortBlogs(newBlogs);
  })
  const allBlogs = sortBlogs.map((el) => (
    <BlogItem
      BlogCard={el}
      key={el._id}
      src={el.photo}
      title={el.title}
      text={el.text}
      fullText={el.fullText}
      buttonText={el.buttonText}
      date={el.date}
    />
  ));

  return (
    <section className="blogs__section" id={anchorName} ref={ref}>
      <SectionHeading text={heading} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="blogs__wrapper">
            {allBlogs.slice(0, numOfBlogs)}
          </div>
          <Button text="Показать больше" onClick={() => setNumOfBlogs(numOfBlogs + 3)} />
        </>
      )}
    </section>
  );
};

export default Blogs;
