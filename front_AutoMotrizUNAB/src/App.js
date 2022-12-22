import React from "react";

import "./assets/global.css";

import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./views/Home/Home";
import Messages from "./views/Messages";
import Clients from "./views/Clients";
import Components from "./views/Components/Components";
import Login from "./views/Login/Login";
import RegCompts from "./views/RegCompts/RegCompts";
import QueryCompts from "./views/QueryCompts/QueryCompts";
import { UserProvider } from "./contexts/UserContext";
import { ComptsProvider } from "./contexts/ComptsContext";
import { UserLogProvider } from "./contexts/UserLogContext";
import UserView from "./views/userView";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route
          path="/clients"
          element={
            <UserProvider>
              <Clients></Clients>
            </UserProvider>
          }
        ></Route>
        <Route
          path="/messages"
          element={
            <UserProvider>
              <Messages></Messages>
            </UserProvider>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <UserLogProvider>
              <Login></Login>
            </UserLogProvider>
          }
        ></Route>
        <Route
          path="/user"
          element={
            <UserLogProvider>
              <UserView></UserView>
            </UserLogProvider>
          }
        ></Route>

        <Route
          path="/components"
          element={
            <ComptsProvider>
              <Components></Components>
            </ComptsProvider>
          }
        ></Route>
        <Route path="/regCompts" element={<RegCompts></RegCompts>}></Route>
        <Route
          path="/queryCompts"
          element={
            <ComptsProvider>
              <QueryCompts></QueryCompts>
            </ComptsProvider>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
