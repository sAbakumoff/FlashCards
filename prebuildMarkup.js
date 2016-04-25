
import React from 'react';
import ReactDom from 'react-dom/server';
import App from './scripts/containers';
import fs from 'fs';

var str = ReactDom.renderToString(<App/>);

fs.readFile('./${index}.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/\$\{app\}/g, str);

  fs.writeFile('./index.html', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
