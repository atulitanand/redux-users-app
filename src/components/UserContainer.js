import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { loadUserAction, reset } from "../actions/user.action";
import UserCard from "./UserCard";

function UserContainer() {
  const [user, setUser] = useState();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <section className="userContainer">
        <div
          style={{
            display: !state.isFull ? "none" : "block",
            margin: "1rem auto",
            color: "#A4036F"
          }}
        >
          You've Reached Max Limit
        </div>
        <div>
          <div>
            <button
              className="loadUser"
              style={{
                display: state.isFull ? "none" : "block",
                margin: "1rem 3rem"
              }}
              onClick={() => {
                dispatch(loadUserAction(state.users.length + 1));
                setUser(state.users.length + 1);
              }}
            >
              Load User
            </button>
          </div>
          <div>
            <button
              onClick={() => dispatch(reset())}
              style={{
                display: !state.isFull ? "none" : "block"
              }}
              className="reset"
            >
              Reset
            </button>
          </div>
        </div>
        <Router>
          {state.loading ? (
            <div
              style={{
                height: "70vh"
              }}
            >
              <h1
                style={{
                  margin: "20vh auto",
                  fontSize: "7rem"
                }}
              >
                Loading...
              </h1>
            </div>
          ) : (
            <div
              className="userCard"
              style={{
                minHeight: "80vh"
              }}
            >
              <Switch>
                <UserCard user={state.users[user - 1]} />
              </Switch>
            </div>
          )}
          {state.users.map((user) => (
            <button
              key={`${user.id}-${user.name}`}
              className="navListIcons"
              onClick={() => setUser(user.id)}
            >
              <Link to={`/${user.id}`}>{user.id}</Link>
            </button>
          ))}
        </Router>
      </section>
    </>
  );
}

export default UserContainer;
