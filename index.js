// through2 is a thin wrapper around node transform streams
var through = require('through2');
var gutil = require('gulp-util');
var download = require("gulp-download-stream")
var PluginError = gutil.PluginError;

// Consts
const PLUGIN_NAME = 'gulp-Palettte';

// Plugin level function(dealing with files)
function gulpPalettte(url, type, filename) {
  url = url.replace("/styles/", "/"+type+"/")+"/plain";
  
  if (!url) {
    throw new PluginError(PLUGIN_NAME, 'Missing url!');
  }
  if (!filename) {
    throw new PluginError(PLUGIN_NAME, 'Missing filename!');
  }
  if (!type) {
    throw new PluginError(PLUGIN_NAME, 'Missing type!');
  }
  
  console.log(filename);
  console.log(url);
  return download({
    file: filename,
    url: url
  });
}

// Exporting the plugin main function
module.exports = gulpPalettte;