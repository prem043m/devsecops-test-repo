const express = require('express');

function createApp() {
  const app = express();

  app.get('/', (_request, response) => {
    response.json({ status: 'outdated-dependencies', note: 'versions are intentionally old' });
  });

  return app;
}

if (require.main === module) {
  const app = createApp();
  const port = process.env.PORT || 3002;

  app.listen(port, () => {
    console.log(`outdated-dependencies listening on port ${port}`);
  });
}

module.exports = { createApp };