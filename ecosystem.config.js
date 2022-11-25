module.exports = {
  apps : [{
    script: 'npm start',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '192.168.1.105',
      ref  : 'origin/master',
      repo : 'git@github.com:hapo-toanna/demo.git',
      path : '/code/test/demo',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
