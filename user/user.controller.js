'use strict';

const PLOTLY_API_KEY = process.env.PLOTLY_API_KEY || 'woeg71x4f7';
const PLOTLY_USERNAME = process.env.PLOTLY_USERNAME || 'threepears';
const plotly = require('plotly')(PLOTLY_USERNAME, PLOTLY_API_KEY);

module.exports = {

  chart (req, res) {
    const trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: "scatter"
    };
    const trace2 = {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: "scatter"
    };
    const data = [trace1, trace2];
    const graphOptions = {filename: "basic-line", fileopt: "overwrite"};
    plotly.plot(data, graphOptions, function (err, msg) {
        console.log(msg);
        // cuts out last characters after the last '/' to use with the script in chart from plotly
        msg.file = msg.url.slice(msg.url.lastIndexOf('/') + 1);
        res.render('chart', {msg: msg});
    });
  }

};
