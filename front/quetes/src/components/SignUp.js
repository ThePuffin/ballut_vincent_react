import React from "react";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "mon@email.com",
      password: "monPasswOrd",
      verifpassword: "monPasswOrd",
      name: "James",
      lastname: "Bond"
    };
    // this.mailRafraichir = this.mailRafraichir.bind(this);
    this.allRafraichir = this.allRafraichir.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //action au moment de la validation
  handleSubmit(event) {
    let objJson = JSON.stringify(this.state,null,2);
    event.preventDefault();
    console.log(objJson);
  }
  //changement du state email au changement d'un champ du mail
  // mailRafraichir(event) {
  //   const obj = { email : event.target.value}
  //   this.setState(obj)
  // };

  //changement du state au changement d'un des inputs
  allRafraichir(event) {
    // console.log(event.target.name , event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  }

  render(element) {
    const all = JSON.stringify(this.state, null, 2);
    return (
      <div>
        <h1><pre> Actuellement vous avez ces données : {all}</pre></h1>{" "}
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="email"
            name="email"
            placeholder="entrez votre email"
            value={this.state.email}
            onChange={this.allRafraichir}
          />{" "}
          <input
            type="password"
            name="password"
            placeholder="entrez votre mot de passe"
            value={this.state.password}
            onChange={this.allRafraichir}
          />{" "}
          <input
            type="password"
            name="verifpassword"
            placeholder="confirmez votre mot de passe"
            value={this.state.verifpassword}
            onChange={this.allRafraichir}
          />{" "}
          <input
            type="text"
            name="name"
            placeholder="entrez votre prénom"
            value={this.state.name}
            onChange={this.allRafraichir}
          />{" "}
          <input
            type="text"
            name="lastname"
            placeholder="entrez votre nom"
            value={this.state.lastname}
            onChange={this.allRafraichir}
          />{" "}
          <input type="submit" value="Soumettre" />
        </form>{" "}
      </div>
    );
  }
}

export default SignUp;
