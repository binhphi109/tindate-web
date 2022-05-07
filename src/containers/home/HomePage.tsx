import NavBar from "components/NavBar/NavBar";
import NavBarItem from "components/NavBar/NavBarItem";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import "./HomePage.scss";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homePage">
      <NavBar>
        <NavBarItem
          className="navbarButton"
          icon="fas fa-tasks"
          onClick={() => navigate("/likes")}
        />
        <NavBarItem className="navbarButton" icon="fas fa-fire" color="primary" />
        <NavBarItem
          className="navbarButton"
          icon="far fa-comment"
          onClick={() => navigate("/matches")}
        />
      </NavBar>

      <Card
        imageUrl="https://images.unsplash.com/photo-1633504106408-eb53fa19886b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        title={"Lucienne Trevode"}
        subtitle={"29"}
      />

      <div className="reaction">
        <Button className="reactionButton" icon="fas fa-times" iconColor="#fc575e" />
        <Button className="reactionButton" icon="fas fa-heart" iconColor="#63d471" />
      </div>
    </div>
  );
}

export default HomePage;
