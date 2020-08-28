const express = require('express');
const router = express.Router();
const auth = require('../lib/auth');

router.get('/', auth, (req, res) => {
  const jsonpackage = JSON.parse(
    require('fs').readFileSync('./package.json', 'utf-8')
  );
  const { name, description, version, author } = jsonpackage;

  const secs = process.uptime();
  const uptime =
    ('0' + Math.floor(secs / 3600)).slice(-2) +
    ':' +
    ('0' + Math.floor((secs % 3600) / 60)).slice(-2) +
    ':' +
    ('0' + Math.floor((secs % 3600) % 60)).slice(-2);

  const mem = process.memoryUsage();
  let formatted = {};
  for (let key in mem) {
    formatted[key] = formatMemory(mem[key]);
  }

  res.json({
    package: { name, description, version, author },
    memory: formatted,
    uptime: uptime,
  });
});

function formatMemory(bytes) {
  if (bytes === 0) {
    return '0 Bytes';
  }
  const k = 1000,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

module.exports = router;
