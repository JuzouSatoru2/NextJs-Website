import { useState, useEffect } from 'react';
import axios from 'axios';
import cookies from 'js-cookie';

import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';

function admin() {
  const [messages, setMessages] = useState(null);
  const [monitor, setMonitor] = useState(null);
  useEffect(() => {
    axios
      .get(`/api/msg`, {
        responseType: 'json',
        headers: {
          Authorization: `${cookies.get('bearerKey')}`,
        },
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

    axios
      .get(`/api/monitor`, {
        responseType: 'json',
        headers: {
          Authorization: `${cookies.get('bearerKey')}`,
        },
      })
      .then((response) => {
        setMonitor(response.data);
      });
  }, []);

  return (
    <div>
      <Meta></Meta>
      <Header></Header>
      <div className="bxo">
        <h1 className="title">Admin dashboard</h1>
        <div className="container-fluid my-5 table-responsive">
          <div className="floated">
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
          <div className="monitor">
            <p>Package name: {monitor ? `${monitor.package.name}` : null}</p>
            <p>
              package description:{' '}
              {monitor ? `${monitor.package.description}` : null}
            </p>
            <p>
              Package version: {monitor ? `${monitor.package.version}` : null}
            </p>
            <p>
              Package author: {monitor ? `${monitor.package.author}` : null}
            </p>
            <p>Memory rss: {monitor ? `${monitor.memory.rss}` : null}</p>
            <p>
              Memory heap total:{' '}
              {monitor ? `${monitor.memory.heapTotal}` : null}
            </p>
            <p>
              Memory heap used: {monitor ? `${monitor.memory.heapUsed}` : null}
            </p>
            <p>
              Memory external: {monitor ? `${monitor.memory.external}` : null}
            </p>
            <p>
              Memory array buffers:{' '}
              {monitor ? `${monitor.memory.arrayBuffers}` : null}
            </p>
            <p>Uptime: {monitor ? `${monitor.uptime}` : null}</p>
          </div>
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

        .monitor {
          text-align: right;
        }

        @media (min-width: 991px) {
          .monitor {
            float: right;
          }

          .floated {
            float: left;
            width: 60%;
          }

          .my-5 {
            overflow: hidden;
          }
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
