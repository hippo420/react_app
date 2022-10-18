const setProxy = require('http-proxy-middleware');
const config = require('./config');

module.exports = app =>{

    const ip = config.ip;
    const port = config.port;
    app.use('/',
                setProxy({
                    target:'http://'+ip+':'+port,
                    changeOrigin:true,
                })
            )
};