import { useState, useEffect } from 'react';
import axios from 'axios';

import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';

function admin() {
  const [messages, setMessages] = useState(null);
  useEffect(() => {
    axios
      .get(`/api/msg`, {
        responseType: 'json',
      })
      .then((response) => {
        setMessages(
          response.data.data.map((data) => (
            <tr key={data._id}>
              <td>{data.email}</td>
              <td>{data.name}</td>
              <td>{data.message}</td>
            </tr>
          ))
        );
      });
  });

  return (
    <div>
      <Meta></Meta>
      <Header></Header>
      <div className="bxo">
        <h1 className="title">Admin dashboard</h1>
        <div className="container-fluid my-5 table-responsive">
          <p className="par">Received messages via /contact</p>
          <table className="table table-striped table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody>{messages ? messages : null}</tbody>
          </table>
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

        .par {
          text-align: left;
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

export default admin;
