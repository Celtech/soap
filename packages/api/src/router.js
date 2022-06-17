const path = require('path');

const init = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../app/dist/index.html'));
  });
};

module.exports = {
  init,
};
