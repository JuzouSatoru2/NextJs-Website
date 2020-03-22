import React from "react";
import axios from "axios";
import Head from "next/head";
import localStorage from "localStorage";

import Sources from "../components/Sources";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.sendLogin = this.sendLogin.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.state = {
      email: "",
      name: "",
      password: "",
      alert: "alert alert-success text-left d-none"
    };
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({  password: event.target.value });
  }

  sendLogin(event) {
    event.preventDefault();
    localStorage.removeItem("bearerKey");
    axios.post(
      "/api/login",
      { email: this.state.email, name: this.state.name, key: this.state.password },
      { headers: { "Content-Type": "application/json" } }
    ).then((response) => {
        localStorage.setItem("bearerKey", "Bearer " + response.data.token);
    });
    this.setState({ alert: "alert alert-success text-left" });
  }

  render() {
    return (
      <div>
        <Head>
          <link
            async
            rel="stylesheet"
            href="/static/css/projects.min.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="/static/vendors/bootstrap/css/bootstrap.min.css"
          />
          <script src="/static/vendors/jquery/jquery.min.js"></script>
        </Head>
        <Sources></Sources>
        <Header></Header>
        <div className="bxo">
          <div className={this.state.alert} role="alert">
            Successfully logged in!
          </div>
          <h1 className="title">Login</h1>
          <div className="container-fluid my-5">
            <form>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="staticEmail"
                    onChange={this.handleChangeEmail}
                    required="required"
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="staticName"
                    onChange={this.handleChangeName}
                    required="required"
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="staticMessage"
                    onChange={this.handleChangePassword}
                    required="required"
                  ></input>
                </div>
              </div>
              <button
                className="btn btn-primary m-4"
                type="submit"
                onClick={this.sendLogin}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer></Footer>
        <script src="/static/vendors/bootstrap/js/bootstrap.min.js"></script>
      </div>
    );
  }
}