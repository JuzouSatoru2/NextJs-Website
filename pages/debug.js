import DebugSources from '../components/DebugSources';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Link from 'next/link';

const debug = () => (
    <div>
      <DebugSources></DebugSources>
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
            <li>Node.js / React / Angular</li>
            <li>Algorithms</li>
          </ul>
        </div>
        <div className="col-sm">
          <ul className="list-l">
            <li>Git</li>
            <li>Terminal</li>
            <li>Firebase</li>
            <li>HTTP / APIs</li>
            <li>Npm</li>
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
        See my projects: <Link href="Software"><a className="link">Here</a></Link>
      </span>
    </div>
  </div>
      <Footer></Footer>
    </div>
  );
  
  export default debug;