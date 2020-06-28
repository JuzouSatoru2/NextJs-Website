import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';

const admin = () => (
  <div>
    <Meta></Meta>
    <Header></Header>
    <div className="bxo">
      <h1 className="title">Admin dashboard</h1>
      <div className="container-fluid my-5">
        <ul className="list-group">
          <li className="list-group-item active">Api services</li>
          <a href="/api/portainer"><li className="list-group-item">Portainer</li></a>
          <a href="/api/mongoadmin"><li className="list-group-item">Mongoadmin</li></a>
          <a href="/api/hangfire"><li className="list-group-item">Hangfire</li></a>
        </ul>
      </div>
    </div>
    <Footer></Footer>
    <style jsx global>{`
        *, ::after, ::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        @font-face {
          font-family: Gravity;
          src: url(/static/fonts/Gravity-Regular.otf);
        }
        
        body, html {
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
    
        .bxo {
          margin-top: 12%;
          margin-left: 5%;
          margin-right: 5%;
          margin-bottom: 5%;
          }
        
        .list-group {
          max-width: 400px;
          text-align: left;
        }

        .nav-link, .navbar-brand{
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

export default admin;