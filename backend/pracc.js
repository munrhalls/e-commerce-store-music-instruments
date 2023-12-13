const { get } = require('node:https');

const baseUrl =
  'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative';

get(baseUrl, res => {
  res.on('data', data => {
    return data.json()l
  });
});
