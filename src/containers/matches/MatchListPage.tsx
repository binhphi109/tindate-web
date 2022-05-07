import List from "components/List/List";
import ListItem from "components/List/ListItem";
import NavBar from "components/NavBar/NavBar";
import NavBarItem from "components/NavBar/NavBarItem";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MatchListPage.scss";

function MatchListPage() {
  const navigate = useNavigate();

  const matches = [
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
    <div className="matchListPage">
      <NavBar>
        <NavBarItem
          className="navbarButton"
          icon="fas fa-chevron-left"
          onClick={() => navigate("/")}
        />
        <NavBarItem className="navbarButton" title="Matches" />
        <NavBarItem className="navbarButton" />
      </NavBar>

      <div className="pageContent">
        <List>
          {matches?.map((match) => (
            <ListItem imageUrl={match.avartar} title={match.name} subtitle={match.age} />
          ))}
        </List>
      </div>
    </div>
  );
}

export default MatchListPage;
