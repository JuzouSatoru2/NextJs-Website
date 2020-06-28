import Sources from '../components/Sources';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Head from 'next/head';
import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-124672572-1" type="text/javascript"></script>
        <script src="/static/js/main.min.js"></script>
      </Head>
      <Sources></Sources>
      <Header></Header>
      <div className="pimg1" id="imgsrc">
        <div className="ptext">
          <span className="titlea">
            <div className="headtitle">Alexander</div>
            <div className="headtitle">Konietzko</div>
            <p className="subtitle">
              Self-learning software and web engineering through research & development. Making random stuff.
        </p>
          </span>
        </div>
        <div className="homeSouth">
          <h4><Link href="#scroll"><a className="stealthLink subPmin padX0 readMore">Read More</a></Link></h4>
          <Link href="#scroll"><a className="stealthLink subPmin padX0">
            <button className="smoothScrollBtn" type="button">
              <img src="/static/images/Down-Arrow-White.svg" width="30" id="scroll" alt="Arrow" />
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
            <Link href="/software"><button className="btn btn-dark mr-5">Software</button></Link>
            <Link href="/contact"><button className="btn btn-dark ml-5">Contact</button></Link>
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

    body, html {
      height: 100%;
      margin: 0;
      font-family: Gravity !important;
      font-size: 1.1em;
      line-height: 1.15;
      font-weight: 400;
      background-color: #191919;
      text-align: center;
    }
    
    *, ::after, ::before {
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
    
    .pimg1, .pimg2, .pimg3 {
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
    
    .pimg2 {
      background-image: url('/static/images/parallax2.jpg');
      min-height: 400px;
    }
    
    .down-img {
      min-height: 60vh;
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
    
    .ptext .border {
      background-color: #111;
      color: #fff;
      padding: 20px;
    }
    
    .ptext .border.trans {
      background-color: transparent;
    }
    
    @media(max-width:911px) {
    .pimg1, .pimg2, .pimg3 {
        background-attachment: scroll;
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
      left: calc(50% - 65px);
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
    
    .stealthLink, .stealthLink:focus, .stealthLink:hover {
      color: white;
      outline: 0;
      text-decoration: none;
    }
    `}</style>
    </div>
  );
}