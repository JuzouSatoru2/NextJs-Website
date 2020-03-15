import Head from 'next/head';

const Architecture = () => (
  <div>
  <Head><link rel="stylesheet" href="/static/css/architecture.min.css" type="text/css" /></Head>
  <section className="section section-dark">
    <div className="jsx-3146163188">        
            <div className="jsx-3146163188 container-fluid backDark sec padY40 white">
                <div className="jsx-3146163188 container">
                    <h3 className="jsx-3146163188 subTitle">TECHNOLOGY STACK<p className="jsx-3146163188">MY WEBSITE
                            ARCHITECTURE</p>
                    </h3>
                    <div className="jsx-3146163188 row listPanel techStack">
                        <div className="jsx-3146163188 col-lg-2">
                            <div className="jsx-3146163188">
                                <h5 className="jsx-3146163188">Front end</h5><sub className="jsx-3146163188">REACT + NEXT
                                    JS</sub>
                            </div>
                            <ul className="jsx-3146163188">
                                <li className="jsx-3146163188">Single page Web apps written in create-react-app</li>
                                <li className="jsx-3146163188">Multi-page, server rendered apps written in Next js + React
                                </li>
                            </ul>
                        </div>
                        <div className="jsx-3146163188 col-lg-2">
                            <div className="jsx-3146163188">
                                <h5 className="jsx-3146163188">Thin Backend Servers (non CPU-bound)</h5><sub
                                    className="jsx-3146163188">NODE JS + EXPRESS</sub>
                            </div>
                            <ul className="jsx-3146163188">
                                <li className="jsx-3146163188">Express app for each service.</li>
                                <li className="jsx-3146163188">Single thread event-driven architecture, good for simple
                                    services that are mostly waiting on I/O.</li>
                            </ul>
                        </div>
                        <div className="jsx-3146163188 col-lg-2">
                            <div className="jsx-3146163188">
                                <h5 className="jsx-3146163188">Application Servers (CPU-Bound)</h5><sub
                                    className="jsx-3146163188">ASP.NET CORE</sub>
                            </div>
                            <ul className="jsx-3146163188">
                                <li className="jsx-3146163188">CPU Intensive Backend Servers</li>
                                <li className="jsx-3146163188">Used for business logic, automation, large data, web APIs
                                </li>
                                <li className="jsx-3146163188">This is the kind of development I want to focus on</li>
                            </ul>
                        </div>
                        <div className="jsx-3146163188 col-lg-2">
                            <div className="jsx-3146163188">
                                <h5 className="jsx-3146163188">Security</h5><sub className="jsx-3146163188">JWT + DOTNET
                                    IDENTITY</sub>
                            </div>
                            <ul className="jsx-3146163188">
                                <li className="jsx-3146163188">JSON Web Tokens are created by Application Servers, backed by
                                    dotnet identity</li>
                                <li className="jsx-3146163188">Accepts both cookie and Authorization Bearer tokens</li>
                                <li className="jsx-3146163188">Service accounts are created for each service that needs to
                                    be secured</li>
                            </ul>
                        </div>
                        <div className="jsx-3146163188 col-lg-2">
                            <div className="jsx-3146163188">
                                <h5 className="jsx-3146163188">Database</h5><sub className="jsx-3146163188">MONGODB</sub>
                            </div>
                            <ul className="jsx-3146163188">
                                <li className="jsx-3146163188">Storage for JWT Identity, services and all APIs.
                                </li>
                                <li className="jsx-3146163188">Single instance backed by persistent volume.</li>
                            </ul>
                        </div>
                        <div className="jsx-3146163188 col-lg-2">
                            <div className="jsx-3146163188">
                                <h5 className="jsx-3146163188">Deployment</h5><sub className="jsx-3146163188">LOCALHOST</sub>
                            </div>
                            <ul className="jsx-3146163188">
                                <li className="jsx-3146163188">Docker containers for each service hosted on localhost.</li>
                                <li className="jsx-3146163188">Nginx ingress controller connects our services together.
                                    /api/ goes to the backend server and so on..</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="jsx-3146163188 container">
                    <h5 className="jsx-3146163188 h5spacing">Services</h5>
                    <div className="jsx-3146163188 table-responsive">
                        <table className="jsx-3146163188 table">
                            <tbody className="jsx-3146163188">
                                <tr className="jsx-3146163188">
                                    <th className="jsx-3146163188">Name</th>
                                    <th className="jsx-3146163188">Endpoint</th>
                                    <th className="jsx-3146163188">Language</th>
                                    <th className="jsx-3146163188">Description</th>
                                </tr>
                                <tr className="jsx-3146163188">
                                    <td className="jsx-3146163188">jwtidentity</td>
                                    <td className="jsx-3146163188">/api/auth/</td>
                                    <td className="jsx-3146163188">Dotnet</td>
                                    <td className="jsx-3146163188">JWT Authentication Server used to secure all other
                                        services (hangfire, mailer)</td>
                                </tr>
                                <tr className="jsx-3146163188">
                                    <td className="jsx-3146163188">portainer</td>
                                    <td className="jsx-3146163188">/api/portainer/</td>
                                    <td className="jsx-3146163188">NodeJs</td>
                                    <td className="jsx-3146163188">Docker container management</td>
                                </tr>
                                <tr className="jsx-3146163188">
                                    <td className="jsx-3146163188">mongoexpress</td>
                                    <td className="jsx-3146163188">/api/mongoadmin/</td>
                                    <td className="jsx-3146163188">NodeJs</td>
                                    <td className="jsx-3146163188">MongoDb database management</td>
                                </tr>
                                <tr className="jsx-3146163188">
                                    <td className="jsx-3146163188">mongodb</td>
                                    <td className="jsx-3146163188">private. only accessible within cluster</td>
                                    <td className="jsx-3146163188">MongoDb</td>
                                    <td className="jsx-3146163188">Database for jwtidentity, portainer, mongoadmin, apis</td>
                                </tr>
                                <tr className="jsx-3146163188">
                                    <td className="jsx-3146163188">redir</td>
                                    <td className="jsx-3146163188">/redir/</td>
                                    <td className="jsx-3146163188">Node js</td>
                                    <td className="jsx-3146163188">Redirect links based on country</td>
                                </tr>
                                <tr className="jsx-3146163188">
                                    <td className="jsx-3146163188">front</td>
                                    <td className="jsx-3146163188">localhost/</td>
                                    <td className="jsx-3146163188">Next js + React</td>
                                    <td className="jsx-3146163188">What you see</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  </section>
  </div>
);

export default Architecture;