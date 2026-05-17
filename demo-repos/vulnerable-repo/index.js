const express = require('express');
const lodash = require('lodash');

function createApp() {
  const app = express();

  app.get('/', (_request, response) => {
    response.json({
      status: 'vulnerable-repo',
      sampleValue: lodash.trim('  vulnerable fixture  '),
    });
  });

  return app;
}

if (require.main === module) {
  const app = createApp();
  const port = process.env.PORT || 3001;

  app.listen(port, () => {
    console.log(`vulnerable-repo listening on port ${port}`);
  });
}

module.exports = { createApp };