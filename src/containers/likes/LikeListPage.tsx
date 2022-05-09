import Snackbar from "common/Snackbar";
import Grid from "components/grid/Grid";
import GridItem from "components/grid/GridItem";
import NavBar from "components/navbar/NavBar";
import NavBarItem from "components/navbar/NavBarItem";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuth } from "redux/auth";
import { fetchLikes, selectLikes } from "redux/likes";
import { useAppDispatch } from "redux/store";
import { getAge } from "utils/dateUtils";
import EmptyWrapper from "../../components/wrapper/EmptyWrapper";
import "./LikeListPage.scss";

function LikeListPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { likes } = useSelector(selectLikes);
  const { currentUser } = useSelector(selectAuth);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchLikes(currentUser._id))
        .unwrap()
        .catch((error) => {
          Snackbar.error(error.message);
        });
    }
  }, [currentUser]);

  return (
    <div className="likeListPage">
      <NavBar>
        <NavBarItem icon="fas fa-chevron-left" onClick={() => navigate("/")} />
        <NavBarItem title="Likes" />
        <NavBarItem />
      </NavBar>

      <div className="pageContent">
        <EmptyWrapper data={likes}>
          <Grid>
            {likes?.map((like) => (
              <GridItem
                key={like._id}
                image={like.avatar}
                title={like.name}
                subtitle={`${getAge(like.birthDate)}`}
              />
            ))}
          </Grid>
        </EmptyWrapper>
      </div>
    </div>
  );
}

export default LikeListPage;
