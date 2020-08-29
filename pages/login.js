import { useState } from 'react';
import axios from 'axios';
import cookies from 'js-cookie';

import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function login() {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
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

  function handleChangePassword(event) {
    setEalert('alert alert-danger text-left d-none');
    setSalert('alert alert-success text-left d-none');
    setPassword(event.target.value);
  }

  function sendLogin(event) {
    event.preventDefault();
    cookies.remove('bearerKey');
    axios
      .post(
        '/api/auth',
        {
          email: email,
          username: name,
          key: password,
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((response) => {
        cookies.set('bearerKey', `Bearer ${response.data.token}`);
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
          Successfully logged in!
        </div>
        <div className={ealert} role="alert">
          Something went wrong!
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
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="staticPassword"
                  onChange={handleChangePassword}
                  required="required"></input>
              </div>
            </div>
            <button
              className="btn btn-primary m-4"
              type="submit"
              onClick={sendLogin}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
      <style jsx global>{`
        *,
        ::after,
        ::before {
          box-sizing: border-box;
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
