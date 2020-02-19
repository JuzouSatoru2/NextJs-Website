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
      DATABASE_URL:process.env.DATABASE_URL
    },
};