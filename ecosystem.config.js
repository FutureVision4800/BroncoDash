module.exports = {
  apps: [{
    name: 'bronco-rush',
    script: './server/index.js',
/*
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
*/
  deploy: {
    production: {
      user: 'FutureVision',
      host: 'ec2-18-188-136-254.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/BroncoDash.pem',
      ref: 'origin/Running-with-pm2-branch',
      repo: 'git@github.com:FutureVision4800/BroncoProject-Fullstack.git',
      path: '/home/bryan/BroncoProject-Fullstack',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js '
    }
  }
};
