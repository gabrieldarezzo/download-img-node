var ulrs = [
    'https://diageo.vteximg.com.br/arquivos/ids/158353-428-478/Delicias-de-Natal.jpg',    
];

var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    request(uri).pipe(fs.createWriteStream('imgs/' + filename)).on('close', callback);
  });
};


ulrs.map(function(url) {
    var nomeImg = url.substring(url.lastIndexOf('/') + 1);
    download(url, nomeImg, function(){
        console.log('done');
    });
});

