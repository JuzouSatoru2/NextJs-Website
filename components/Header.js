import Link from 'next/link';
import Head from 'next/head';

const Header = () => (
  <div>
    <Head><link rel="stylesheet" href="/static/css/nav.min.css" type="text/css" /></Head>
    <nav className="navbar fixed-top navbar-expand-lg toggle-height" id="global-nav">
     <div className="container">
    <Link href="/"><a className="navbar-brand scrollN">Alex</a></Link>
    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon custom-toggler"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li> <Link href="/software"><a className="nav-link scrollN">Software</a></Link></li>
        <li> <a className="nav-link scrollN" href="https://github.com/JuzouSatoru2/NextJs-Website">This Website Repo</a></li>
      </ul>
      <ul className="navbar-nav">
          <li><Link href="/contact"><a className="nav-link scrollN">Contact</a></Link></li>
      </ul>
    </div>
     </div>
 </nav>
 <script src="/static/js/nav.min.js"></script>
 <script src="/static/vendors/jquery/jquery-migrate-3.0.1.min.js"></script>
  </div>
);

export default Header;