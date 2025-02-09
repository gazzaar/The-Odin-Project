const http = require('http');
const fs = require('fs');
const url = require('url');

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const filename = '.' + q.pathname + '.html';
    fs.readFile(filename, function (err, data) {
      if (err) {
        fs.readFile('./404.html', (err, noData) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            // res.write();
            return res.end('404 Not Found');
          }
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.write(noData);
          return res.end();
        });
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      }
    });
  })
  .listen(8080);
