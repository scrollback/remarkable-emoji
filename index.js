/* jshint node:true */

var emoji = require('./emojify.js');

module.exports = function (md) {
    md.emoji = md.emoji || {};
    md.block.ruler.after('code', 'emoji', emoji(md), {alt: []});
};