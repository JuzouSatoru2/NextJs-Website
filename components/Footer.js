import Head from 'next/head';
import Link from 'next/link';

const Footer = () => (
  <div>
    <Head><link rel="stylesheet" href="/static/css/footer.min.css" type="text/css" /></Head>
    <footer className="footer container-fluid">
     <div className="container extraSpace">
      <ul className="centerLinks socialIcons">
          <li className="inlb">
              <a href="#"><img src="/static/images/icons/twitter.png"></img></a>
          </li>
          <li className="inlb">
              <a href="#"><img src="/static/images/icons/snapchat.png"></img></a>
          </li>
          <li className="inlb">
              <a href="#"><img src="/static/images/icons/instagram.png"></img></a>
          </li>
          <li className="inlb">
              <a href="https://github.com/JuzouSatoru2"><img src="/static/images/icons/github.png"></img></a>
          </li>
      </ul>
      <p className="footerText subP">Email me with any suggestions,
      collaborations, or just to talk!<br></br>alexanderkonietzko@gmx.de</p>
  </div>
  <div className="bottomLinksDiv">
      <div className="container">
          <div className="row">
              <div className="col-6 col-md">
                  <Link href="/"><a>Home</a></Link>
              </div><div className="col-md rm"><p>|</p></div>
              <div className="col-6 col-md" >
                  <Link href="/software"><a>Software</a></Link>
              </div><div className="col-md rm"><p>|</p></div>
              <div className="col-6 col-md">
                  <a href="#">---</a>
              </div><div className="col-md rm"><p>|</p></div>
              <div className="col-6 col-md">
                  <a href="#" className="bla">---</a>
              </div><div className="col-md rm"><p>|</p></div>
              <div className="col-6 col-md">
                  <a href="#">---</a>
              </div><div className="col-md rm"><p>|</p></div>
              <div className="col-6 col-md">
                  <Link href="/contact"><a>Contact</a></Link>
              </div>
          </div>
      </div>
  </div>
</footer>
<script src="/static/js/footerShift.min.js" />
  </div>
);

export default Footer;