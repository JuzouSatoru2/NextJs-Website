import Sources from '../components/Sources';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Head from 'next/head';
import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Head>
      <link async rel="stylesheet" href="/static/css/style.css" type="text/css" />
      <link rel="stylesheet" href="/static/vendors/bootstrap/css/bootstrap.min.css" />
      <script src="/static/vendors/jquery/jquery.min.js"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-124672572-1" type="text/javascript"></script>
      <script src=" /static/js/main.min.js"></script>
      <script async src="/static/vendors/bootstrap/js/bootstrap.min.js"></script>
      </Head>
      <Sources></Sources>  
      <Header></Header>
      <div className="pimg1" id="imgsrc">
    <div className="ptext">
      <span className="titlea">
        <div className="animated">Alex Website</div>
        <p className="subtitle">
          Self-learning software and web development. Making random stuff.
        </p>
      </span>
    </div>
    <div className="homeSouth">
      <h4><Link href="#scroll"><a className="stealthLink subPmin padX0 readMore">Read More</a></Link></h4>
      <Link href="#scroll"><a className="stealthLink subPmin padX0">
        <button className="smoothScrollBtn" type="button">
          <img src="/static/images/Down-Arrow-White.png" width="30" id="scroll" alt="Arrow"/>
        </button></a></Link>
    </div>
  </div>

  <section className="section section-dark">
    <div className="container">
      <h4>My Programming Skills</h4>
      <div className="row">
        <div className="col-sm">
          <ul className="list-l">
            <li>HTML5</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>SQL</li>
            <li>Data Structures</li>
          </ul>
        </div>
        <div className="col-sm">
          <ul className="list-l">
            <li>CSS3</li>
            <li>Python</li>
            <li>Jquery / Bootstrap</li>
            <li>Node.js / React / Nextjs</li>
            <li>Simple Algorithms</li>
          </ul>
        </div>
        <div className="col-sm">
          <ul className="list-l">
            <li>Git</li>
            <li>Terminal</li>
            <li>Docker / -compose</li>
            <li>HTTP / APIs</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <div className="pimg2">
    <div className="ptext">
      <span className="border trans pc">
        "Talk is cheap. Show me the code." -Linus Torvalds
      </span>
      <span className="border trans mb">
        Hi
      </span>
    </div>
  </div>

  <section className="section section-light">
    <h2>My Chat App</h2>
    <a href="https://simpleangularchat.github.io/" className="hprlnk" target="_blank" rel="noopener">Simple Angular Chat</a><br></br>
    <h6>Powered by Angular / Firebase</h6>
  </section>

  <div className="pimg1 down-img" id="srcimg">
    <div className="ptext">
      <span className="titleb">
        See my projects: <Link href="software"><a className="link">Here</a></Link>
      </span>
    </div>
  </div>
      <Footer></Footer>
    </div>
  );
}