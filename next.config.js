module.exports = {
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        'dashboard.js': { page: 'dashboard' },
        'Software.js': { page: 'Software' },
        'debug.js': { page: 'debug' }
      };
    }
};