const instagram = require('./lib/instagram');
const facebook = require('./lib/facebook');
const tiktok = require('./lib/tiktok');

module.exports = {
    instagramDown: instagram.instagramDown,
    facebookDown: facebook.facebookDown,
    tiktokDown: tiktok.tiktokDown,
};
