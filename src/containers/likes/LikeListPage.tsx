import Grid from "components/Grid/Grid";
import GridItem from "components/Grid/GridItem";
import NavBar from "components/NavBar/NavBar";
import NavBarItem from "components/NavBar/NavBarItem";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LikeListPage.scss";

function LikeListPage() {
  const navigate = useNavigate();

  const likes = [
    {
      avartar:
        "https://images.unsplash.com/photo-1633504106408-eb53fa19886b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      name: "Lucienne Trevode",
      age: "12",
    },
    {
      avartar:
        "https://images.unsplash.com/photo-1633504106408-eb53fa19886b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      name: "Lucienne Trevode",
      age: "12",
    },

    {
      avartar:
        "https://images.unsplash.com/photo-1633504106408-eb53fa19886b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      name: "Lucienne Trevode",
      age: "12",
    },
    {
      avartar:
        "https://images.unsplash.com/photo-1633504106408-eb53fa19886b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      name: "Lucienne Trevode",
      age: "12",
    },
    {
      avartar:
        "https://images.unsplash.com/photo-1633504106408-eb53fa19886b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      name: "Lucienne Trevode",
      age: "12",
    },

    {
      avartar:
        "https://images.unsplash.com/photo-1633504106408-eb53fa19886b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      name: "Lucienne Trevode",
      age: "12",
    },
    {
      avartar:
        "https://images.unsplash.com/photo-1633504106408-eb53fa19886b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      name: "Lucienne Trevode",
      age: "12",
    },
    {
      avartar:
        "https://images.unsplash.com/photo-1633504106408-eb53fa19886b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      name: "Lucienne Trevode",
      age: "12",
    },

    {
      avartar:
        "https://images.unsplash.com/photo-1633504106408-eb53fa19886b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      name: "Lucienne Trevode",
      age: "12",
    },
  ];

  return (
    <div className="likeListPage">
      <NavBar>
        <NavBarItem
          className="navbarButton"
          icon="fas fa-chevron-left"
          onClick={() => navigate("/")}
        />
        <NavBarItem className="navbarButton" title="Likes" />
        <NavBarItem className="navbarButton" />
      </NavBar>

      <div className="pageContent">
        <Grid>
          {likes?.map((like) => (
            <GridItem imageUrl={like.avartar} title={like.name} subtitle={like.age} />
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default LikeListPage;
