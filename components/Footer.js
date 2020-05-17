import Link from 'next/link';

const Footer = () => (
  <div>
    <footer className="footer container-fluid">
     <div className="container extraSpace">
      <ul className="centerLinks socialIcons">
          <li className="inlb">
              <a href="#"><img src="/static/images/icons/twitter.png" alt="twitter"></img></a>
          </li>
          <li className="inlb">
              <a href="#"><img src="/static/images/icons/snapchat.png" alt="snapchat"></img></a>
          </li>
          <li className="inlb">
              <a href="#"><img src="/static/images/icons/instagram.png" alt="instagram"></img></a>
          </li>
          <li className="inlb">
              <a href="https://github.com/JuzouSatoru2"><img src="/static/images/icons/github.png" alt="github"></img></a>
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
<style jsx>{`
  .footer {
    background-color: #282828;
    padding: 0px;
}

.socialIcons li a img {
    vertical-align: middle;
    padding: 5px;
    height: 50px;
}

.footerText {
    text-align: center;
    padding-top: 60px;
    color: white;
    padding-bottom: 20px;
}

.bottomLinksDiv {
    background-color: #191919;
    padding: 30px;
    margin-left: -30px;
}

.bottomLinksDiv div div div p {
    margin: 0px;
}

.bottomLinksDiv a {
    text-align: center;
    color: white;
}

.bottomLinks li, .bottomLinks p {
    display: inline;
}

.bottomLinks p {
    color: white;
    padding: 20px;
}

.bottomLinksDiv div div a {
    color: white;
}

.centerLinks {
    padding: 0px;
    margin: 0px;
    text-align: center;
    padding-top: 50px;
}

@media (min-width: 768px) {
    .bottomLinksDiv div div a {
        display: inline;
        text-align: center;
    }
    .bottomLinksDiv div .col-md {
        display: block;
        text-align: center;
        color: #3d3d3d;
        padding: 0px;
    }
}

@media (max-width: 768px) {
    .col-md.rm {
        display: none;
    }

    .col-6.col-md {
        margin-bottom: 5px;
    }
}

.inlb{
    display: inline-block;
}

.bla {
    text-align: center;
}

*, ::after, ::before {
    box-sizing: border-box !important;
}
`}</style>
  </div>
);

export default Footer;