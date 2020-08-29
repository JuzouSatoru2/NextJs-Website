import { useState } from 'react';
import axios from 'axios';
import cookies from 'js-cookie';

import Layout from '../../components/Layout';

export default function newPost() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [markdown, setMarkdown] = useState(null);
  const [salert, setSalert] = useState('alert alert-success text-left d-none');
  const [ealert, setEalert] = useState('alert alert-danger text-left d-none');

  function handleChangeTitle(event) {
    setEalert('alert alert-danger text-left d-none');
    setSalert('alert alert-success text-left d-none');
    setTitle(event.target.value);
  }

  function handleChangeDescription(event) {
    setEalert('alert alert-danger text-left d-none');
    setSalert('alert alert-success text-left d-none');
    setDescription(event.target.value);
  }

  function handleChangeMarkdown(event) {
    setEalert('alert alert-danger text-left d-none');
    setSalert('alert alert-success text-left d-none');
    setMarkdown(event.target.value);
  }

  function sendPost(event) {
    event.preventDefault();
    axios
      .post(
        '/api/blog',
        {
          title: title,
          description: description,
          markdown: markdown,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${cookies.get('bearerKey')}`,
          },
        }
      )
      .then((response) => {
        setSalert('alert alert-success text-left');
      })
      .catch((error) => {
        setEalert('alert alert-danger text-left');
      });
  }

  return (
    <Layout>
      <div className="bxo">
        <div className={salert} role="alert">
          Successfully posted!
        </div>
        <div className={ealert} role="alert">
          Something went wrong!
        </div>
        <h1 className="title">New article</h1>
        <div className="container-fluid my-5">
          <form onSubmit={sendPost}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="statictitle"
                  onChange={handleChangeTitle}
                  required="required"></input>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="staticdescription"
                  onChange={handleChangeDescription}
                  required="required"></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Markdown</label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="staticMarkdown"
                  onChange={handleChangeMarkdown}
                  required="required"
                  rows="7"></textarea>
              </div>
            </div>
            <button className="btn btn-primary m-4" type="submit">
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
