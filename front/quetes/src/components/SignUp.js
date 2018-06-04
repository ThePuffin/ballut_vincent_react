import React from "react";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "mon@email.com",
      password: "monPasswOrd",
      verifpassword: "monPasswOrd",
      name: "James",
      lastname: "Bond",
      flash: ""
    };
    // this.mailRafraichir = this.mailRafraichir.bind(this);
    this.allRafraichir = this.allRafraichir.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //action au moment de la validation
  handleSubmit(event) {
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .catch(
        res =>
          this.setState({
            flash: res.flash
          }),
        err => this.setState({ flash: err.flash })
      );

    let objJson = JSON.stringify(this.state, null, 2);
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
    this.setState({ [event.target.id]: event.target.value });
  }

  render(element) {
    // const all = JSON.stringify(this.state, null, 2);
    return (
      <div>
        {/* <h1>
          <pre> Actuellement vous avez ces données : {all}</pre>
        </h1>{" "} */}
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Nom :</label>
          <input
            type="email"
            id="email"
            placeholder="entrez votre email"
            value={this.state.email}
            onChange={this.allRafraichir}
          />{" "}
          <br />
          <label>Password : </label>
          <input
            type="password"
            id="password"
            placeholder="entrez votre mot de passe"
            value={this.state.password}
            onChange={this.allRafraichir}
          />{" "}
          <br />
          <label>Verification du password : </label>
          <input
            type="password"
            id="verifpassword"
            placeholder="confirmez votre mot de passe"
            value={this.state.verifpassword}
            onChange={this.allRafraichir}
          />{" "}
          <br />
          <label>Nom : </label>
          <input
            type="text"
            id="name"
            placeholder="entrez votre prénom"
            value={this.state.name}
            onChange={this.allRafraichir}
          />{" "}
          <br />
          <label>Prenom : </label>
          <input
            type="text"
            id="lastname"
            placeholder="entrez votre nom"
            value={this.state.lastname}
            onChange={this.allRafraichir}
          />{" "}<br/>
          <input type="submit" value="Soumettre" />
        </form>{" "}
      </div>
    );
  }
}

export default SignUp;
