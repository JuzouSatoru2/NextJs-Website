import React from "react";
import axios from "axios";

import Layout from "../../components/Layout";

export default class newPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeMarkdown = this.handleChangeMarkdown.bind(this);
    this.state = {
      title: "",
      description: "",
      markdown: "",
      salert: "alert alert-success text-left d-none",
      ealert: "alert alert-danger text-left d-none"
    };
  }

  handleChangeTitle(event) {
    this.setState({ salert: "alert alert-success text-left d-none" });
    this.setState({ ealert: "alert alert-danger text-left d-none" });
    this.setState({ title: event.target.value });
  }

  handleChangeDescription(event) {
    this.setState({ salert: "alert alert-success text-left d-none" });
    this.setState({ ealert: "alert alert-danger text-left d-none" });
    this.setState({ description: event.target.value });
  }

  handleChangeMarkdown(event) {
    this.setState({ salert: "alert alert-success text-left d-none" });
    this.setState({ ealert: "alert alert-danger text-left d-none" });
    this.setState({ markdown: event.target.value });
  }

  sendPost(event) {
    event.preventDefault();
    axios.post(
      "/api/blog",
      { title: this.state.title, description: this.state.description, markdown: this.state.markdown },
      { headers: { "Content-Type": "application/json" } }
    ).then((response) => {
      this.setState({ salert: "alert alert-success text-left" });
    })
      .catch((error) => {
        this.setState({ ealert: "alert alert-danger text-left" });
      });
  }

  render() {
    return (
      <Layout>
        <div className="bxo">
          <div className={this.state.salert} role="alert">
            Successfully posted!
          </div>
          <div className={this.state.ealert} role="alert">
            Something went wrong!
          </div>
          <h1 className="title">New article</h1>
          <div className="container-fluid my-5">
            <form onSubmit={this.sendPost.bind(this)}>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="statictitle"
                    onChange={this.handleChangeTitle}
                    required="required"
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="staticdescription"
                    onChange={this.handleChangeDescription}
                    required="required"
                  ></textarea>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Markdown</label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="staticMarkdown"
                    onChange={this.handleChangeMarkdown}
                    required="required"
                    rows="7"
                  ></textarea>
                </div>
              </div>
              <button
                className="btn btn-primary m-4"
                type="submit"
              >
                Submit post
              </button>
            </form>
          </div>
        </div>
        <style jsx>{`
        .bxo {
            text-align: center;
          }
          
          .title {
            font-size: 1.9em;
            text-align: left;
            padding: 10px;
          }
          `}</style>
      </Layout>
    );
  }
}