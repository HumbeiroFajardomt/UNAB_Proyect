import React from "react";
import "../RegCompts/RegCompts.css";
import "../../components/forms/Input";
import Input from "../../components/forms/Input";
import Buttom from "../../components/forms/buttom";

function RegCompts() {
  return (
    <section className="login">
      <div className="container">
        <h1 className="title">
          Component <b>Registration</b>
        </h1>
        <form className="flex card form">
          <Input>Id Component</Input>
          <Input>Component Name</Input>
          <Input>Component Brand</Input>
          <Input>Component MGF Year</Input>
          <Input>Description</Input>
        </form>
        <div className="register card">
          <Buttom style="fill">Upload Component</Buttom>
        </div>
      </div>
    </section>
  );
}

export default RegCompts;
