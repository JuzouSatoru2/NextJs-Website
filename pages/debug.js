import Link from 'next/link';

import DebugSources from '../components/DebugSources';
import Header from '../components/Header';
import Footer from '../components/Footer';

const debug = () => (
    <div>
      <DebugSources></DebugSources>

      <Header></Header>
      <Footer></Footer>
    </div>
  );
  
  export default debug;