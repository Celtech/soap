const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

const staticFileMiddleware = express.static(
  path.dirname(require.resolve('@soap/app/dist/index.html')),
);

const init = (app) => {
  app.use(morgan('combined'));
  app.use(staticFileMiddleware);
  app.use(
    history({
      rewrites: [
        {
          from: /^\/test\/.*$/,
          to(context) {
            return context.parsedUrl.path;
          },
        },
      ],
    }),
  );

  app.use(bodyParser.json());
  app.use(cors());
  app.use(helmet());
};

module.exports = {
  init,
};
