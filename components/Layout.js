import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Meta></Meta>
    <Header></Header>
    <div className="bxo">{children}</div>
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
      }

    .nav-link, .navbar-brand{
        color: black !important;
    }

    .bxo {
        margin-top: 12%;
        margin-left: 5%;
        margin-right: 5%;
        margin-bottom: 5%;
    }

    @media (max-width: 991px) {
        .nav-link {
            text-align: left;
        }
      }
    
    .bottomLinksDiv {
      text-align: center;
    }
    `}</style>
  </div>
);

export default Layout;