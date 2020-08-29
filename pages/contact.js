import { useState } from 'react';
import axios from 'axios';

import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function contact() {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [message, setMessage] = useState(null);
  const [salert, setSalert] = useState('alert alert-success text-left d-none');
  const [ealert, setEalert] = useState('alert alert-danger text-left d-none');

  function handleChangeEmail(event) {
    setEalert('alert alert-danger text-left d-none');
    setSalert('alert alert-success text-left d-none');
    setEmail(event.target.value);
  }

  function handleChangeName(event) {
    setEalert('alert alert-danger text-left d-none');
    setSalert('alert alert-success text-left d-none');
    setName(event.target.value);
  }

  function handleChangeMessage(event) {
    setEalert('alert alert-danger text-left d-none');
    setSalert('alert alert-success text-left d-none');
    setMessage(event.target.value);
  }

  function sendMessage(event) {
    event.preventDefault();
    axios
      .post(
        '/api/msg',
        {
          email: email,
          name: name,
          message: message,
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((response) => {
        setSalert('alert alert-success text-left');
      })
      .catch((error) => {
        setEalert('alert alert-danger text-left');
      });
  }

  return (
    <div>
      <Meta></Meta>
      <Header></Header>
      <div className="bxo">
        <div className={salert} role="alert">
          Message sended successfully!
        </div>
        <div className={ealert} role="alert">
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
                  onChange={handleChangeEmail}
                  required="required"></input>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="staticName"
                  onChange={handleChangeName}
                  required="required"></input>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Message</label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="staticMessage"
                  onChange={handleChangeMessage}
                  required="required"
                  rows="5"></textarea>
              </div>
            </div>
            <button
              className="btn btn-primary m-4"
              type="submit"
              onClick={sendMessage}>
              Submit message
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
      <style jsx global>{`
        *,
        ::after,
        ::before {
          box-sizing: border-box !important;
          margin: 0;
          padding: 0;
        }

        @font-face {
          font-family: Gravity;
          src: url(/static/fonts/Gravity-Regular.otf);
        }

        body,
        html {
          height: 100vh;
          margin: 0;
          font-family: Gravity !important;
          font-size: 1em;
          line-height: 1.15;
          font-weight: 400;
          scroll-behavior: smooth;
          text-align: center;
        }

        .title {
          font-size: 1.9em;
          text-align: left;
          padding: 10px;
        }

        .rt-td {
          text-align: left;
        }

        div.rt-td > a {
          color: inherit;
        }

        .bxo {
          margin-top: 12%;
          margin-left: 5%;
          margin-right: 5%;
          margin-bottom: 5%;
        }

        .nav-link,
        .navbar-brand {
          color: black !important;
        }

        @media (max-width: 991px) {
          .nav-link {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
