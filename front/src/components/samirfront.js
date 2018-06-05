  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    this.callApi().then(
      res => this.setState({ flash: res.flash }),
      err => this.setState({ flash: err.flash })
    );
  }
  callApi = async () => {
    const response = await fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    });
    const body = await response.json();
    return body;
  };
