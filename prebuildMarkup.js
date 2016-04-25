
import React from 'react';
import ReactDom from 'react-dom/server';
import App from './scripts/containers';
import fs from 'fs';

var str = ReactDom.renderToString(<App/>);

fs.readFile('./${index}.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  
  var result = data.replace(/\$\{app\}/g, str).replace(/<link href='([^\.]+\.css)'[^>]*>/g, function(s, filename) {
      var style = fs.readFileSync(filename, 'utf8');
      return '<style>\n' + style + '\n</style>';
  });

  fs.writeFile('./index.html', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

