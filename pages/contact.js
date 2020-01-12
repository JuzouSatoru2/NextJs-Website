import Sources from '../components/Sources';

const dashboard = () => (
    <div>
      <Sources></Sources>
      <h1>Coming Soon!</h1>
      <style jsx>
          {
        ` @font-face {
            font-family: Gravity;
            src: url(/static/fonts/Gravity-Regular.otf);
        }

        h1 {
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