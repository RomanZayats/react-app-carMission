import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getDotClick,
  getTargetSection,
} from "../../store/paginationDotClick/selectors";
import {
  resetDotClick,
  resetTargetSection,
} from "../../store/paginationDotClick/actions";

const useLiveHashPush = (anchorName) => {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const dispatch = useDispatch();
  const history = useHistory();
  const dotTargetSection = useSelector(getTargetSection);
  const dotClick = useSelector(getDotClick);

  useEffect(() => {
    if (inView) {
      if (dotTargetSection === anchorName && dotClick) {
        dispatch(resetTargetSection());
        dispatch(resetDotClick());
      } else if (!dotClick) {
        history.replace({
          pathname: "/",
          hash: `#${anchorName}`,
        });
      }
    }
  }, [inView, anchorName, history, dispatch, dotTargetSection, dotClick]);

  return ref;
};

export default useLiveHashPush;
