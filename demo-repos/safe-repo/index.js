const express = require('express');

function createApp() {
  const app = express();

  app.get('/', (_request, response) => {
    response.json({ status: 'safe-repo', dependencies: 'current' });
  });

  return app;
}

if (require.main === module) {
  const app = createApp();
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`safe-repo listening on port ${port}`);
  });
}

module.exports = { createApp };