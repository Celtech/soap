const path = require('path');

const init = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.dirname(require.resolve('@soap/app/dist/index.html')));
  });

  app.get('/api/test', (req, res) => {
    res.send('test');
  });
};

module.exports = {
  init,
};
