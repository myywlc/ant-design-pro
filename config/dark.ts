import lessToJs from 'less-vars-to-js';
import * as fs from 'fs';
import * as path from 'path';

const darkLess = fs.readFileSync(path.resolve(__dirname, 'dark.less'), 'utf8');

const dark = lessToJs(darkLess, {
  resolveVariables: true,
  stripPrefix: true,
});

module.exports = dark;
