var http = require('http');
var path = require('path');
var fs = require('fs');

function getFileName(url){
  return url.split('/').pop().split('.').shift();
}

function getExtension(url){
  return url.split('/').pop().split('.').pop();
}
function getHost(url){
  return url.replace(/.*?:\/\//g, '').split('/').shift();
}
function getPath(url){
  url = url.replace(/.*?:\/\//g, '').split('/');
  url.shift();

  return '/' + url.join('/');
}

function ImageDownloader () {

}

ImageDownloader.prototype.getImage = (imageUrl, name, dir, cb) => {
  if (typeof name === 'function'){
    cb = name;
    name = null;
    dir = null;
  }
  else if (typeof dir === 'function'){
    cb = dir;
    dir = null;
  }

  dir = dir || './';
  name = name || getFileName(imageUrl);
  name = [name, getExtension(imageUrl)].join('.');
  cb = typeof cb === 'function' ?  cb : () => {};

  var options = {
    host : getHost(imageUrl),
    port : 80,
    path : getPath(imageUrl)
  };

  http.get(options, res => {
    var imageData = '';
    res.setEncoding('binary');

    res.on('data',chunk => { imageData += chunk; });
    res.on('end',() => {
      fs.writeFile(path.join(dir,name), imageData, 'binary', cb);
    });
  });
};

module.exports = ImageDownloader;