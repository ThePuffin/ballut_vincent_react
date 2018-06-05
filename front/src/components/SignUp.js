import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      verifpassword: "",
      name: "",
      lastname: "",
      flash: ""
    };
    // this.mailRafraichir = this.mailRafraichir.bind(this);
    this.allRafraichir = this.allRafraichir.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.callApi = this.callApi.bind(this);
  }

  //solution de Samir

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(
        res =>
          this.setState({
            flash: res.flash
          }),
        err => this.setState({ flash: err.flash })
      );
      toast(this.state.flash);
  }


  //changement du state au changement d'un des inputs
  allRafraichir(event) {
    // console.log(event.target.name , event.target.value)
    this.setState({ [event.target.id]: event.target.value });
  }

  render(element) {
    // const all = JSON.stringify(this.state, null, 2);
    return (
      <div>
        {/* <h1>
          <pre> Actuellement vous avez ces données : {all}</pre>
        </h1> */}
        <form onSubmit={this.handleSubmit}>
          <label>Email :</label>
          <input
            type="email"
            id="email"
            placeholder="entrez votre email" // value={this.state.email}
            onChange={this.allRafraichir}
          />
          <br />
          <label>Password : </label>
          <input
            type="password"
            id="password"
            placeholder="entrez votre mot de passe" // value={this.state.password}
            onChange={this.allRafraichir}
          />
          <br />
          <label>Verification du password : </label>
          <input
            type="password"
            id="verifpassword"
            placeholder="confirmez votre mot de passe" // value={this.state.verifpassword}
            onChange={this.allRafraichir}
          />
          <br />
          <label>Nom : </label>
          <input
            type="text"
            id="name"
            placeholder="entrez votre prénom" // value={this.state.name}
            onChange={this.allRafraichir}
          />
          <br />
          <label>Prenom : </label>
          <input
            type="text"
            id="lastname"
            placeholder="entrez votre nom" // value={this.state.lastname}
            onChange={this.allRafraichir}
          />
          <br />
          <input type="submit" value="Soumettre" />
        </form>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default SignUp;
