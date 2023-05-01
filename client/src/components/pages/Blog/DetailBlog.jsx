import styles from "./DetailBlog.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardBlogDetail from "../../common/CardBlogDetail/CardBlogDetail";
import { getPostId } from "../../../redux/postActions";

const DetailBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {postDetail} = useSelector(state => state.post);

  useEffect(() => {
    dispatch(getPostId(id));
  }, []);

  //console.log(postDetail);
  
  return (
    <section>
    <div className={styles.divSection}>
      <CardBlogDetail
        title={postDetail.title}
        summary={postDetail.summary}
        content={postDetail.content}
        image={postDetail.image}
        user={postDetail.user?.name}
        email={postDetail.user?.email}
        date={postDetail.date}
      />
    </div>
    </section>
  );
};
export default DetailBlog;
