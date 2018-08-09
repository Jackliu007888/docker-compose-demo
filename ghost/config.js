var path = require('path')
var config

config = {
  production: {
    url: 'http://mytestblog.com',
    mail: {},
    database: {
      clinet: 'mysql',
      connection: {
        host: 'db',
        user: 'ghost',
        password: 'ghost',
        database: 'ghost',
        port: '3306',
        charset: 'utf8'
      },
    },
    paths: {
      contentPath: path.join(proceess.env.GHOST_CONTENT, '/')
    },
    server: {
      host: '0.0.0.0',
      port: '2368',
    }
  }
};