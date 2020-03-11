require('dotenv').config()
module.exports = {
    exportPathMap: () => {
      return {
        '/': { page: '/' },
        'software': { page: 'software' },
        'debug': { page: 'debug' },
        'contact': { page: 'contact' }
      };
    },
    env: {
      DATABASE_URL:process.env.DATABASE_URL,
      MOOD:process.env.MOOD
    },
};