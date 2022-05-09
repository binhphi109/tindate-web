import Snackbar from "common/Snackbar";
import List from "components/list/List";
import ListItem from "components/list/ListItem";
import NavBar from "components/navbar/NavBar";
import NavBarItem from "components/navbar/NavBarItem";
import EmptyWrapper from "components/wrapper/EmptyWrapper";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuth } from "redux/auth";
import { selectLikes } from "redux/likes";
import { fetchMatches, selectMatches } from "redux/matches";
import { useAppDispatch } from "redux/store";
import { getAge } from "utils/dateUtils";
import "./MatchListPage.scss";

function MatchListPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { likes } = useSelector(selectLikes);
  const { matches } = useSelector(selectMatches);
  const { currentUser } = useSelector(selectAuth);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchMatches(currentUser._id))
        .unwrap()
        .catch((error) => {
          Snackbar.error(error.message);
        });
    }
  }, [currentUser, likes]);

  return (
    <div className="matchListPage">
      <NavBar>
        <NavBarItem icon="fas fa-chevron-left" onClick={() => navigate("/")} />
        <NavBarItem title="Matches" />
        <NavBarItem />
      </NavBar>

      <div className="pageContent">
        <EmptyWrapper data={matches}>
          <List>
            {matches?.map((match) => (
              <ListItem
                key={match._id}
                image={match.avatar}
                title={match.name}
                subtitle={`${getAge(match.birthDate)}`}
              />
            ))}
          </List>
        </EmptyWrapper>
      </div>
    </div>
  );
}

export default MatchListPage;
