const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const port = Number(process.env.SERVER_PORT) || 8080;
const app = express();

app.use(cors());
app.use(helmet());

const server = app.listen(port, () => {
  console.log(
    `🚀 Server started on port ${port} in ${process
      .uptime()
      .toFixed(3)} seconds`,
  );
});

const gracefulShutdownHandler = function gracefulShutdownHandler(signal) {
  console.log(`🛑️️ Caught ${signal}, gracefully shutting down`);

  setTimeout(() => {
    console.log('🤞 Shutting down application');

    server.close(() => {
      console.log('👋 All requests stopped, shutting down');
      process.exit();
    });
  }, 0);
};

process.on('SIGINT', gracefulShutdownHandler);
process.on('SIGTERM', gracefulShutdownHandler);
