module.exports = {
  apps : [{
    name: 'bash-report-executor',
    script: 'index.js',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};
