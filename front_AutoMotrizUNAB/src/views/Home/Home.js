import React from "react";
import Mechanic1 from "../Home/Mechanic1.jpg";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="container complement">
        <h2>Total Engineering process</h2>
        <h1>The Best Option For your Equipment</h1>
        <img src={Mechanic1}></img>
      </div>
    </section>
  );
}

export default Home;
