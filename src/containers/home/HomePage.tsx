import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/store";
import { getDiscover, likeUser, passUser, selectUsers } from "redux/users";
import NavBar from "components/navbar/NavBar";
import NavBarItem from "components/navbar/NavBarItem";
import Button from "components/button/Button";
import Card from "components/card/Card";
import "./HomePage.scss";
import { getAge } from "utils/dateUtils";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass, { EffectCreative } from "swiper";
import "swiper/css";
import EmptyWrapper from "components/wrapper/EmptyWrapper";
import Snackbar from "common/Snackbar";
import { selectAuth } from "redux/auth";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { currentUser } = useSelector(selectAuth);
  const { users } = useSelector(selectUsers);

  useEffect(() => {
    if (currentUser) {
      dispatch(getDiscover(currentUser._id))
        .unwrap()
        .catch((error) => {
          Snackbar.error(error.message);
        });
    }
  }, [currentUser]);

  const handleLike = () => {
    if (currentUser) {
      if (currentIndex < users.length) {
        const nextIndex = currentIndex + 1;

        setCurrentIndex(nextIndex);
        swiper?.slideTo(nextIndex);

        dispatch(likeUser({ userFromId: currentUser?._id, userToId: users[currentIndex]._id }))
          .unwrap()
          .then((result) => {
            if (result.matched) {
              Snackbar.success("It's a match");
            }
          })
          .catch((error) => {
            Snackbar.error(error.message);
          });
      }
    }
  };

  const handlePass = () => {
    if (currentUser) {
      if (currentIndex < users.length) {
        const nextIndex = currentIndex + 1;

        setCurrentIndex(nextIndex);
        swiper?.slideTo(nextIndex);

        dispatch(passUser({ userFromId: currentUser?._id, userToId: users[currentIndex]._id }))
          .unwrap()
          .then(() => {
            Snackbar.info("Keep discovering");
          })
          .catch((error) => {
            Snackbar.error(error.message);
          });
      }
    }
  };

  return (
    <div className="homePage">
      <NavBar>
        <NavBarItem icon="fas fa-tasks" onClick={() => navigate("/likes")} />
        <NavBarItem icon="fas fa-fire" color="primary" />
        <NavBarItem icon="far fa-comment" onClick={() => navigate("/matches")} />
      </NavBar>

      <EmptyWrapper data={users}>
        <Swiper
          className="mySwiper"
          grabCursor={false}
          effect="cards"
          onSwiper={setSwiper}
          modules={[EffectCreative]}
        >
          {users?.map((person) => (
            <SwiperSlide key={person._id}>
              <Card
                image={person.avatar}
                title={person.name}
                subtitle={`${getAge(person.birthDate)}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="reaction">
          <Button
            className="reactionButton"
            icon="fas fa-times"
            iconColor="#fc575e"
            onClick={handlePass}
          />
          <Button
            className="reactionButton"
            icon="fas fa-heart"
            iconColor="#63d471"
            onClick={handleLike}
          />
        </div>
      </EmptyWrapper>
    </div>
  );
}

export default HomePage;
