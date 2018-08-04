'use strict';

module.exports = {
  apps: [
    {
      name: 'butler',
      script: './src/index.ts',
      node_args: ['--inspect=9090'],
      watch: true,
      env: {
        "NODE_ENV": "development",
      },
    },
  ],
};
