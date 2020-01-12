require('dotenv').config()
module.exports = {
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        'dashboard': { page: 'dashboard' },
        'software': { page: 'software' },
        'debug': { page: 'debug' },
        'contact': { page: 'contact' }
      };
    },
    env: {
      // Reference a variable that was defined in the .env file and make it available at Build Time
      // TEST_VAR: process.env.TEST_VAR,
    },
};