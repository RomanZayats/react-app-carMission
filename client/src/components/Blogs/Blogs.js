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
  const [countOfBlogs, setCountOfBlogs] = useState(3);
  const blogs = useSelector(getBlogs);
  const isLoading = useSelector(getBlogsIsLoading);
  const ref = useLiveHashPush(anchorName);
  const numOfBlogs = blogs.length;

  const allBlogs = blogs.map((el) => (
    <BlogItem
      BlogCard={el}
      key={el._id}
      src={el.photo}
      title={el.title}
      text={el.text}
      fullText={el.fullText}
      buttonText={el.buttonText}
      date={el.date}
      onClick={() => alert("Подождите еще немножко, сайт в разработке =)")}
      // Тут нужно что-то сделать
    />
  ));

  return (
    <section className="blogs__section" id={anchorName} ref={ref}>
      <div className="blogs__container">
        <SectionHeading text={heading} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="blogs__wrapper">
              {allBlogs.slice(0, countOfBlogs)}
            </div>
            {numOfBlogs > countOfBlogs && <Button text="Показать больше статей" onClick={() => setCountOfBlogs(countOfBlogs + 3)} className="blogs__show-more"/>}
          </>
        )}
      </div>
    </section>
  );
};

export default Blogs;
