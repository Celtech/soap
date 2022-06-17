const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const init = (app) => {
  app.use(morgan('combined'));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(helmet());
};

module.exports = {
  init,
};
