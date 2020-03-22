require('dotenv').config()
module.exports = {
    exportPathMap: () => {
      return {
        '/': { page: '/' },
        'software': { page: 'software' },
        'debug': { page: 'debug' },
        'contact': { page: 'contact' },
        'login': { page: 'login' }
      };
    },
    env: {
      DATABASE_URL:process.env.DATABASE_URL,
      MOOD:process.env.MOOD,
      ADMIN_KEY:process.env.ADMIN_KEY
    },
};