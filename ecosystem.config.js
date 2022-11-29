module.exports = {
  apps : [{
    script: 'npm start',
    watch: '.'
  }],

  deploy : {
    production : {
      key : 'key.pem',
      user : 'ubuntu',
      host : '192.168.1.105',
      ref  : 'origin/main',
      repo : 'git@github.com:hapo-toanna/demo.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
