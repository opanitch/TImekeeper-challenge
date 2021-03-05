const path = require('path');

module.exports = {
  // API
  API: path.resolve(__dirname, '../api'),
  CONFIG: path.resolve(__dirname, '../api/config'),
  CONSTANTS: path.resolve(__dirname, '../api/constants'),
  DATA: path.resolve(__dirname, '../api/data'),
  HELPERS: path.resolve(__dirname, '../api/helpers'),

  // Application
  Atoms: path.resolve(__dirname, '../source/atoms'),
  Components: path.resolve(__dirname, '../source/components'),
  Forms: path.resolve(__dirname, '../source/forms'),
  Pages: path.resolve(__dirname, '../source/pages'),

  // Assets
  ASSETS: path.resolve(__dirname, '../assets'),
};
