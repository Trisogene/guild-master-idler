import { useDispatch } from "react-redux";
import { redux_changePage } from "../redux/slices/navigation_slice";

const useNavigation = () => {
  const dispatch = useDispatch();

  const changePage = (page: string) => {
    dispatch(redux_changePage(page));
  };

  return { changePage };
};

export default useNavigation;
