// @ts-check
const fs = require('fs');

/**
 * @type {import('@jest/transform').Transformer}
 */
const transformer = {
  process(src, filename) {
    const content = fs.readFileSync(filename, 'utf8');
    return {
      code: 'module.exports = ' + JSON.stringify(content)
    };
  }
};

module.exports = transformer;
