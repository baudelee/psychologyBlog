var thinkjs = require('thinkjs');
var path = require('path');

var rootPath = path.dirname(__dirname);

var instance = new thinkjs({
  APP_PATH: rootPath + path.sep + 'app',
  RUNTIME_PATH: rootPath + path.sep + 'runtime',
  ROOT_PATH: rootPath,
  RESOURCE_PATH: __dirname,
  UPLOAD_PATH: __dirname + "/static/upload", // 定义文件上传的目录
  env: 'development'
});

//compile src/ to app/
instance.compile({
  retainLines: true, 
  log: true
});

instance.run();