require('dotenv').config()
module.exports = {
    exportPathMap: () => {
      return {
        '/': { page: '/' },
        'software': { page: 'software' },
        'debug': { page: 'debug' },
        'contact': { page: 'contact' },
        'api/test': { page: 'api/test' }
      };
    },
    env: {
      DATABASE_URL:process.env.DATABASE_URL
    },
};