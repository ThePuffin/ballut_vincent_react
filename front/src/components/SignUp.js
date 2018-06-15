import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sackbar from "./Sackbar";
import {Button, TextField} from '@material-ui/core'


class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      verifpassword: "",
      name: "",
      lastname: "",
      flash: "",
      variant:""
    };
    // this.mailRafraichir = this.mailRafraichir.bind(this);
    this.allRafraichir = this.allRafraichir.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.callApi = this.callApi.bind(this);
  }

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
      .then(res => {this.setState({
            flash: res.flash
          }), this.setState({variant: "info"})}, err => {this.setState({ flash: err.flash }),this.setState({variant: "error"})});
    // toast(this.state.flash);
  }

  componentDidUpdate() {
    if (this.state.flash !== "") {
      toast(this.state.flash);
    }
    
  }

  //changement du state au changement d'un des TextFields
  allRafraichir(event) {
    // console.log(event.target.name , event.target.value)
    this.setState({ [event.target.id]: event.target.value });
  }

  render(element) {
    // const all = JSON.stringify(this.state, null, 2);
    return <div>
        {/* <h1>
          <pre> Actuellement vous avez ces données : {all}</pre>
        </h1> */}
        <form onSubmit={this.handleSubmit}>
          <label>Email :</label>
          <TextField type="email" id="email" placeholder="entrez votre email" onChange={this.allRafraichir // value={this.state.email}
            } />
          <br />
          <label>Password : </label>
          <TextField type="password" id="password" placeholder="entrez votre mot de passe" onChange={this.allRafraichir // value={this.state.password}
            } />
          <br />
          <label>Verification du password : </label>
          <TextField type="password" id="verifpassword" placeholder="confirmez votre mot de passe" onChange={this.allRafraichir // value={this.state.verifpassword}
            } />
          <br />
          <label>Nom : </label>
          <TextField type="text" id="name" placeholder="entrez votre prénom" onChange={this.allRafraichir // value={this.state.name}
            } />
          <br />
          <label>Prenom : </label>
          <TextField type="text" id="lastname" placeholder="entrez votre nom" onChange={this.allRafraichir // value={this.state.lastname}
            } />
          <br />
          <br/>
          <Button type="submit" variant="contained" color="primary" >Submit</Button>
        </form>
        {/* <ToastContainer autoClose={2000} /> */}
        {(this.state.variant !== "")?<Sackbar variant={this.state.variant} flash={this.state.flash}/>: null}
      </div>;
  }
}



export default SignUp;
