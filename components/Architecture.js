const Architecture = () => (
  <div>
    <section className="section section-dark">
      <div>
        <div className="container-fluid backDark sec padY40 white">
          <div className="container">
            <h3 className="subTitle">
              TECHNOLOGY STACK<p>MY WEBSITE ARCHITECTURE</p>
            </h3>
            <div className="row listPanel techStack">
              <div className="col-lg-2">
                <div>
                  <h5>Front end</h5>
                  <sub>NEXT JS</sub>
                </div>
                <ul>
                  <li>Single page Web apps written in simple Next js.</li>
                  <li>
                    Multi-page, server (Express) rendered apps written in Next
                    js.
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <div>
                  <h5>Thin Backend Servers</h5>
                  <sub>NODE JS + EXPRESS</sub>
                </div>
                <ul>
                  <li>Express app for each service.</li>
                  <li>
                    Single thread event-driven architecture, good for simple
                    services that are mostly waiting on I/O.
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <div>
                  <h5>Application Servers (Future!)</h5>
                  <sub>ASP.NET CORE</sub>
                </div>
                <ul>
                  <li>CPU Intensive Backend Servers.</li>
                  <li>
                    Used for business logic, automation, large data, web APIs.
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <div>
                  <h5>Security</h5>
                  <sub>JSON WEB TOKEN</sub>
                </div>
                <ul>
                  <li>JSON Web Tokens are created by the back-end Server.</li>
                  <li>
                    Accepts both cookie and authorization header Bearer tokens.
                  </li>
                  <li>APIs use JWT to secure each other and itselfs.</li>
                </ul>
              </div>
              <div className="col-lg-2">
                <div>
                  <h5>Database</h5>
                  <sub>MONGODB</sub>
                </div>
                <ul>
                  <li>Storage for all APIs.</li>
                  <li>Single instance backed by persistent volume.</li>
                </ul>
              </div>
              <div className="col-lg-2">
                <div>
                  <h5>Deployment</h5>
                  <sub>VERCEL</sub>
                </div>
                <ul>
                  <li>
                    Vercel builds and sets the server up after every github
                    commit.
                  </li>
                  <li>
                    Would like to deploy a kubernetes cluster with real back-end
                    in the future.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <h5 className="h5spacing">Services</h5>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Endpoint</th>
                    <th>Language</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>json web token</td>
                    <td>/api/verify</td>
                    <td>NodeJs</td>
                    <td>Verifies the JWT token for authenticate all APIs.</td>
                  </tr>
                  <tr>
                    <td>monitor</td>
                    <td>private. Only accessible by admin</td>
                    <td>NodeJs</td>
                    <td>Monitors server informations</td>
                  </tr>
                  <tr>
                    <td>mongodb</td>
                    <td>private. only accessible within the server</td>
                    <td>MongoDb</td>
                    <td>Database for the storage of all APIs</td>
                  </tr>
                  <tr>
                    <td>articles</td>
                    <td>/api/articles</td>
                    <td>NodeJs</td>
                    <td>Articles API</td>
                  </tr>
                  <tr>
                    <td>msg</td>
                    <td>/api/msg</td>
                    <td>Node js</td>
                    <td>Messages API</td>
                  </tr>
                  <tr>
                    <td>front</td>
                    <td>/</td>
                    <td>Next js</td>
                    <td>What you see</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <style jsx>{`
      .section-dark {
        background-color: #191919;
        color: white;
      }
      .section {
        text-align: left;
        padding: 50px 0;
      }

      .listPanel ul {
        padding: 0px;
        padding-left: 20px;
      }

      .listPanel li {
        font-size: 0.8em;
      }

      .subTitle p {
        padding-top: 10px;
        font-size: 0.43em;
        -webkit-letter-spacing: 0px;
        -moz-letter-spacing: 0px;
        -ms-letter-spacing: 0px;
        letter-spacing: 0px;
      }

      .listPanel h5 {
        margin: 0px;
      }

      .listPanel .col-lg-2 div {
        padding-bottom: 20px;
      }

      .listPanel .col-lg-2 {
        padding-top: 20px;
        padding-bottom: 20px;
      }

      tr,
      td {
        color: white;
      }

      .container.sss {
        padding: 0;
      }

      li {
        line-height: 1.5;
      }
    `}</style>
  </div>
);

export default Architecture;
