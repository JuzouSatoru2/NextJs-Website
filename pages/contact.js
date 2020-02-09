import Sources from '../components/Sources';

import Link from 'next/link';

const dashboard = () => (
    <div>
      <Sources></Sources>
      <h1>Coming Soon!<br></br><Link href="/"><a>Go back</a></Link></h1>
      <style jsx>
          {
        ` @font-face {
            font-family: Gravity;
            src: url(/static/fonts/Gravity-Regular.otf);
        }

        h1, a {
            margin: 10%;
            text-align: center;
            font-family: Gravity;
        }

        `
    }
    </style>
    </div>
  );
  
  export default dashboard;