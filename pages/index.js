import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Head from 'next/head';
import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Head>
        <script src="/static/js/main.min.js"></script>
      </Head>
      <Meta></Meta>
      <Header></Header>
      <div className="pimg1" id="imgsrc">
        <div className="ptext">
          <span className="titlea">
            <div className="headtitle">Alexander</div>
            <div className="headtitle">Konietzko</div>
            <p className="subtitle">
              Self-learning software and web engineering through research &
              development. Making random stuff.
            </p>
          </span>
        </div>
        <div className="homeSouth">
          <h4>
            <Link href="#scroll">
              <a className="stealthLink subPmin padX0 readMore">Read More</a>
            </Link>
          </h4>
          <Link href="#scroll">
            <a className="stealthLink subPmin padX0">
              <button className="smoothScrollBtn" type="button">
                <img
                  src="/static/images/Down-Arrow-White.svg"
                  width="30"
                  id="scroll"
                  alt="Arrow"
                />
              </button>
            </a>
          </Link>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          <h3 className="workTitle">MY WORK</h3>
          <p className="workText">
            I was never the best in school, I'm just a guy who is interested in
            software engineering. This site just exists because I'm really into
            programming web apps. I've been working with NextJs a lot lately to
            improve my skills and and to better understand the structure of the
            Internet and websites. What I'm doing doesn't have a real sense or
            something, so I guess I'm just doing this for fun.
          </p>
          <div className="row workList">
            <div className="col-sm">
              <h5>Languages</h5>
              <ul className="list-l">
                <li>Javascript</li>
                <li>Python</li>
                <li>Java</li>
                <li>ASP.NET Core</li>
              </ul>
            </div>
            <div className="col-sm">
              <h5>Javascript Frameworks</h5>
              <ul className="list-l">
                <li>NextJs</li>
                <li>Express</li>
                <li>Vue</li>
                <li>React</li>
              </ul>
            </div>
            <div className="col-sm">
              <h5>Basic Knowledge</h5>
              <ul className="list-l">
                <li>Git</li>
                <li>Terminal</li>
                <li>Docker</li>
                <li>Databases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <h5 className="container projectTitle">
          Projects I'm currently working on
        </h5>
        <div className="container table-responsive">
          <table className="table table-hover projectTable">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Language</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link href="https://github.com/JuzouSatoru2/NextJs-Website">
                    <a
                      className="projectLink"
                      target="_blank"
                      rel="noopener noreferrer">
                      NextJs website
                    </a>
                  </Link>
                </td>
                <td>This website</td>
                <td>Javascript</td>
              </tr>
              <tr>
                <td>
                  <Link href="https://github.com/JuzouSatoru2/NextJs-Boilerplate">
                    <a
                      className="projectLink"
                      target="_blank"
                      rel="noopener noreferrer">
                      NextJs boilerplate
                    </a>
                  </Link>
                </td>
                <td>Boilerplate site with NextJs</td>
                <td>Javascript</td>
              </tr>
              <tr>
                <td>
                  <Link href="https://github.com/JuzouSatoru2/create-nextjs-project">
                    <a
                      className="projectLink"
                      target="_blank"
                      rel="noopener noreferrer">
                      Create Nextjs project
                    </a>
                  </Link>
                </td>
                <td>CLI to clone the boilerplate</td>
                <td>Javascript</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container">
          <h5 className="projectTitle">Future things I want to learn</h5>
          <div className="row projectList">
            <div className="col-sm">
              <ul className="list-l">
                <li>Hangfire (ASP.NET)</li>
                <li>Writing desktop applications</li>
                <li>Kubernetes</li>
                <li>Deploying an orchestration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="pimg1 down-img">
        <div className="ptext">
          <span className="titleb">
            <Link href="/software">
              <button className="btn btn-dark mr-5">Software</button>
            </Link>
            <Link href="/contact">
              <button className="btn btn-dark ml-5">Contact</button>
            </Link>
          </span>
        </div>
      </div>
      <Footer></Footer>
      <style jsx global>{`
        @font-face {
          font-family: Gravity;
          src: url('/static/fonts/Gravity-Regular.otf');
        }

        footer {
          font-size: 0.9rem;
        }

        body,
        html {
          height: 100%;
          margin: 0;
          font-family: Gravity !important;
          font-size: 1.1em;
          line-height: 1.15;
          font-weight: 400;
          background-color: #191919;
          text-align: center;
        }

        *,
        ::after,
        ::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .hprlnk {
          color: #0d4cb8;
        }
        .link {
          text-decoration: none;
          color: white;
        }

        .link:hover {
          color: inherit;
          text-decoration-color: white !important;
        }

        .pimg1,
        .pimg3 {
          position: relative;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        .pimg1 {
          background-image: url('/static/images/parallax1.jpg');
          min-height: 100vh;
        }

        .down-img {
          background-image: url('/static/images/parallax2.jpg');
          min-height: 50vh;
        }

        .section {
          text-align: left;
          padding: 50px 80px;
        }

        .section-light {
          background-color: #ffffff;
          color: #666;
        }

        .section-dark {
          background-color: #191919;
          color: white;
        }

        .ptext {
          position: absolute;
          top: 25%;
          width: 100%;
          text-align: center;
          font-size: 27px;
          text-transform: uppercase;
        }

        @media (max-width: 911px) {
          .pimg1,
          .pimg3 {
            background-attachment: scroll;
          }

          .section {
            padding: 50px 40px;
          }
        }

        h2 {
          text-align: left;
        }

        .titlea {
          font-size: 55px;
          color: white;
        }

        .subtitle {
          text-transform: none;
          display: flex;
          margin-top: 1%;
          margin-left: 26%;
          margin-right: 22%;
          font-size: 0.37em;
          text-align: left;
          letter-spacing: 0;
        }

        .workTitle {
          padding-top: 60px;
          letter-spacing: 10px;
          padding-bottom: 60px;
          margin-bottom: 0px;
        }

        .workText {
          padding-bottom: 60px;
          padding-top: 20px;
          font-size: 0.9em;
          letter-spacing: 1px;
          margin: 0px;
          line-height: 1.5;
        }

        .workList {
          padding-bottom: 40px;
        }

        .projectTable {
          font-size: 0.9em;
        }

        .projectTitle {
          color: black;
          padding-top: 60px;
          padding-bottom: 20px;
          margin-bottom: 0px;
        }

        .projectLink,
        .projectLink:hover,
        .projectList {
          color: black;
        }

        .titleb {
          font-size: 50px;
          color: white;
          text-transform: none;
        }

        li {
          padding: 4px;
          font-size: 0.8em;
        }

        .col-sm {
          margin: 5px;
        }

        @media (max-width: 991px) {
          .pc {
            display: none;
          }

          .subtitle {
            display: none;
          }

          .titlea {
            font-size: 40px;
            letter-spacing: 10px;
          }
        }

        @media (min-width: 991px) {
          .mb {
            display: none;
          }

          .titlea {
            letter-spacing: 10px;
          }

          .headtitle {
            margin-left: 26%;
            margin-right: 22%;
            text-align: left;
          }
        }

        .homeSouth {
          text-align: center;
          position: absolute;
          left: 50%;
          width: 50%;
          margin: 0 0 0 -25%;
          top: calc(100% - 140px);
          font-size: 1.4em;
        }

        .smoothScrollBtn {
          color: white;
          position: relative;
          border: none;
          background: none;
          font-size: 3em;
        }

        .smoothScrollBtn:focus {
          outline: 0;
        }

        .stealthLink,
        .stealthLink:focus,
        .stealthLink:hover {
          color: white;
          outline: 0;
          text-decoration: none;
        }

        .navbar {
          text-align: left;
        }
      `}</style>
    </div>
  );
}
