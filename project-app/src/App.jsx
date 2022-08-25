import "./App.css";
import { useEffect, useReducer, useState } from "react";
import reducer, { initialState } from "./reducer";
import Login from "./Login";
import Loading from "./Loading";
import Status from "./Status";
import Navbar from "./Navbar";
import Rentals from "./Rentals";
import Message from "./Message";
import { LOGIN_STATUS, CLIENT, SERVER, ACTIONS } from "./constants";
import {
  fetchLogin,
  fetchLogout,
  fetchSession,
  fetchMessages,
  fetchApplication,
} from "./services";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onLogin(username) {
    dispatch({ type: ACTIONS.START_LOADING_MESSAGES });
    fetchLogin(username)
      .then((fetchedId) => {
        dispatch({ type: ACTIONS.LOG_IN, username });
        dispatch({ type: ACTIONS.SUCCESS_APPLICATION, fetchedId });
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      });
  }

function onApplication(id){
  
  dispatch({ type: ACTIONS.APPLY, id });
  fetchApplication(id)
      .then((fetchedId) => {
        dispatch({ type: ACTIONS.SUCCESS_APPLICATION, fetchedId });
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      });
}

  function onLogout() {
    dispatch({ type: ACTIONS.LOG_OUT });
    fetchLogout().catch((err) => {
      dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
    });
  }


  function checkForSession() {
    fetchSession()
      .then((session) => {
        dispatch({ type: ACTIONS.LOG_IN });
        return fetchMessages();
      })
      .catch((err) => {
        if (err?.error === SERVER.AUTH_MISSING) {
          return Promise.reject({ error: CLIENT.NO_SESSION });
        }
        return Promise.reject(err);
      })
      .then((messages) => {
      })
      .catch((err) => {
        if (err?.error === CLIENT.NO_SESSION) {
          dispatch({ type: ACTIONS.LOG_OUT });
          return;
        }
        dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      });
  }



  useEffect(
    () => {
      checkForSession();
    },
    []
  );

  return (
    <div className="app">
      <main className="">
        {state.error && <Status error={state.error} />}
        {state.loginStatus === LOGIN_STATUS.PENDING && (
          <Loading className="login__waiting">Loading Please Wait...</Loading>
        )}
        {state.loginStatus === LOGIN_STATUS.NOTLOGGED && (
          <Login onLogin={onLogin} />
        )}
        {state.loginStatus === LOGIN_STATUS.LOGGEDIN && (
          <div className="content">
            <div className="navbar">
              <Navbar onLogout={onLogout}></Navbar>
            </div>
            <iframe
             className="utube"
              src="https://www.youtube.com/embed/IZpTNq-mfNE"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <Message successfulid={state.successfulApplicationId}></Message>
            <Rentals application={onApplication}></Rentals>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
