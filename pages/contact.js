import React from "react";
import axios from "axios";
import Head from "next/head";

import Sources from "../components/Sources";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class contact extends React.Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.state = {
      email: "",
      name: "",
      message: "",
      salert: "alert alert-success text-left d-none",
      ealert: "alert alert-danger text-left d-none"
    };
  }

  handleChangeEmail(event) {
    this.setState({ salert: "alert alert-success text-left d-none" });
    this.setState({ ealert: "alert alert-danger text-left d-none" });
    this.setState({ email: event.target.value });
  }
  handleChangeName(event) {
    this.setState({ salert: "alert alert-success text-left d-none" });
    this.setState({ ealert: "alert alert-danger text-left d-none" });
    this.setState({ name: event.target.value });
  }

  handleChangeMessage(event) {
    this.setState({ salert: "alert alert-success text-left d-none" });
    this.setState({ ealert: "alert alert-danger text-left d-none" });
    this.setState({ message: event.target.value });
  }

  sendMessage(event) {
    event.preventDefault();
    if(
      this.state.email === "" ||
      this.state.name === "" ||
      this.state.message === "" ||
      this.state.messge === "" && this.state.messge == "" && this.state.messge == ""
      ){alert("Fill out all fields!");}else{
    axios.post(
      "/api/msg",
      { email: this.state.email, name: this.state.name, message: this.state.message },
      { headers: { "Content-Type": "application/json" } }
    ).then((response) => {
      this.setState({ salert: "alert alert-success text-left" });
  })
  .catch((error) => {
    this.setState({ ealert: "alert alert-danger text-left" });
  });
  }
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
        </Head>
        <Sources></Sources>
        <Header></Header>
        <div className="bxo">
          <div className={this.state.salert} role="alert">
            Message sended successfully!
          </div>
          <div className={this.state.ealert} role="alert">
            Something went wrong!
          </div>
          <h1 className="title">Send messages</h1>
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
                <label className="col-sm-2 col-form-label">Message</label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="staticMessage"
                    onChange={this.handleChangeMessage}
                    required="required"
                  ></textarea>
                </div>
              </div>
              <button
                className="btn btn-primary m-4"
                type="submit"
                onClick={this.sendMessage}
              >
                Submit message
              </button>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}