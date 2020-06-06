const Architecture = () => (
    <div>
        <section className="section section-dark">
            <div>
                <div className="container-fluid backDark sec padY40 white">
                    <div className="container">
                        <h3 className="subTitle">TECHNOLOGY STACK<p>MY WEBSITE
                            ARCHITECTURE</p>
                        </h3>
                        <div className="row listPanel techStack">
                            <div className="col-lg-2">
                                <div>
                                    <h5>Front end</h5><sub>REACT + NEXT
                                    JS</sub>
                                </div>
                                <ul>
                                    <li>Single page Web apps written in create-react-app</li>
                                    <li>Multi-page, server rendered apps written in Next js + React
                                </li>
                                </ul>
                            </div>
                            <div className="col-lg-2">
                                <div >
                                    <h5>Thin Backend Servers (non CPU-bound)</h5><sub
                                    >NODE JS + EXPRESS</sub>
                                </div>
                                <ul>
                                    <li>Express app for each service.</li>
                                    <li>Single thread event-driven architecture, good for simple
                                    services that are mostly waiting on I/O.</li>
                                </ul>
                            </div>
                            <div className="col-lg-2">
                                <div>
                                    <h5>Application Servers (CPU-Bound)</h5><sub
                                    >ASP.NET CORE</sub>
                                </div>
                                <ul>
                                    <li>CPU Intensive Backend Servers</li>
                                    <li>Used for business logic, automation, large data, web APIs
                                </li>
                                </ul>
                            </div>
                            <div className="col-lg-2">
                                <div>
                                    <h5>Security</h5><sub>JWT + DOTNET
                                    IDENTITY</sub>
                                </div>
                                <ul>
                                    <li>JSON Web Tokens are created by Application Servers, backed by
                                    dotnet identity</li>
                                    <li>Accepts both cookie and Authorization Bearer tokens</li>
                                    <li>Service accounts are created for each service that needs to
                                    be secured</li>
                                </ul>
                            </div>
                            <div className="col-lg-2">
                                <div>
                                    <h5>Database</h5><sub>MONGODB + POSTGRESQL</sub>
                                </div>
                                <ul>
                                    <li>Storage for JWT Identity, services and all APIs.
                                </li>
                                    <li>Single instance backed by persistent volume.</li>
                                </ul>
                            </div>
                            <div className="col-lg-2">
                                <div>
                                    <h5>Deployment</h5><sub>KUBERNETES</sub>
                                </div>
                                <ul>
                                    <li>Docker containers for each microservice with kubernetes orchestration.</li>
                                    <li>Nginx ingress controller connects our services together.
                                    /api/ goes to the backend server and so on..</li>
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
                                        <td>jwtidentity</td>
                                        <td>/api/auth/</td>
                                        <td>Dotnet</td>
                                        <td>JWT Authentication Server used to secure all other
                                        services</td>
                                    </tr>
                                    <tr>
                                        <td>portainer</td>
                                        <td>/api/portainer/</td>
                                        <td>NodeJs</td>
                                        <td>Docker container management</td>
                                    </tr>
                                    <tr>
                                        <td>mongoexpress</td>
                                        <td>/api/mongoadmin/</td>
                                        <td>NodeJs</td>
                                        <td>MongoDb database management</td>
                                    </tr>
                                    <tr>
                                        <td>mongodb</td>
                                        <td>private. only accessible within cluster</td>
                                        <td>MongoDb</td>
                                        <td>Database for jwtidentity, portainer, mongoadmin, apis</td>
                                    </tr>
                                    <tr>
                                        <td>msg</td>
                                        <td>/api/msg/</td>
                                        <td>Node js</td>
                                        <td>Messages api</td>
                                    </tr>
                                    <tr>
                                        <td>front</td>
                                        <td>localhost/</td>
                                        <td>Next js + React</td>
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

tr, td{
    color:white;
}

.container.sss {
    padding: 0;
}

li{
    line-height: 1.5;
}
`}</style>
    </div>
);

export default Architecture;